#!/usr/bin/env node
/**
 * Elenca le traduzioni mancanti, lingua per lingua (spec 009, FR-007).
 *
 * Le chiavi dell'interfaccia le controlla già TypeScript: `Record<Lingua, Testi>`
 * non compila se una lingua ne perde una. Questo script guarda ciò che
 * TypeScript non vede — i contenuti in JSON e le didascalie delle fotografie —
 * e serve a sapere cosa manca *prima* di far fallire una costruzione.
 *
 *     npm run traduzioni:mancanti
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

// L'elenco delle lingue viene letto dal sorgente, non ricopiato: aggiungerne
// una quinta non deve richiedere di toccare anche questo script.
const LINGUE = [
  ...readFileSync(join(ROOT, "src/i18n/lingue.ts"), "utf8")
    .match(/export const LINGUE = \[([^\]]*)\]/)[1]
    .matchAll(/"([a-z-]+)"/g),
].map((m) => m[1]);

function file(...p) {
  return JSON.parse(readFileSync(join(ROOT, ...p), "utf8"));
}

function jsonIn(cartella) {
  const dir = join(ROOT, cartella);
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => ({ nome: f.replace(/\.json$/, ""), dati: file(cartella, f) }));
}

const buchi = [];

/** Un campo tradotto è un oggetto con esattamente le chiavi delle lingue. */
function controlla(dove, campo, valore) {
  if (valore === null || valore === undefined) return;
  if (typeof valore !== "object") return;
  for (const l of LINGUE) {
    const v = valore[l];
    if (typeof v !== "string" || v.trim() === "") {
      buchi.push({ lingua: l, dove, campo });
    }
  }
  for (const chiave of Object.keys(valore)) {
    if (!LINGUE.includes(chiave)) {
      buchi.push({ lingua: chiave, dove, campo, extra: true });
    }
  }
}

const TRADOTTI = {
  camere: ["nome", "occhiello", "descrizione", "avvertenza"],
  luoghi: ["nome", "occhiello", "consiglio"],
  faq: ["domanda", "risposta", "daConfermare"],
};

for (const [collezione, campi] of Object.entries(TRADOTTI)) {
  for (const { nome, dati } of jsonIn(`src/content/${collezione}`)) {
    for (const campo of campi) {
      if (dati[campo] !== undefined) {
        controlla(`${collezione}/${nome}`, campo, dati[campo]);
      }
    }
  }
}

for (const voce of file("src/data/foto.manifest.json").foto) {
  controlla(`fotografia ${voce.id}`, "didascalia", voce.didascalie);
}

// --- stampa ---------------------------------------------------------------
if (buchi.length === 0) {
  console.log(
    `\nNessuna traduzione mancante: ${LINGUE.join(", ")} sono complete.\n`,
  );
  process.exit(0);
}

const perLingua = new Map();
for (const b of buchi) {
  if (!perLingua.has(b.lingua)) perLingua.set(b.lingua, []);
  perLingua.get(b.lingua).push(b);
}

for (const [lingua, voci] of perLingua) {
  const titolo = voci[0].extra
    ? `Lingua sconosciuta «${lingua}» (${voci.length})`
    : `Mancano in «${lingua}» (${voci.length})`;
  console.log(`\n${titolo}`);
  console.log("─".repeat(titolo.length));
  for (const v of voci) console.log(`  · ${v.dove} → ${v.campo}`);
}

console.log(
  `\n${buchi.length} voci. Finché restano, la costruzione fallisce: nessuna ` +
    `pagina\nviene pubblicata con il testo di un'altra lingua.\n`,
);
process.exit(1);
