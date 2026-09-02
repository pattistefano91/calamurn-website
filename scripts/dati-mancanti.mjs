#!/usr/bin/env node
/**
 * Elenca tutto ciò che il sito dichiara come non confermato (spec 008, FR-010).
 *
 * È la lista da mandare al proprietario: finché una voce è qui, in pagina
 * compare un segnaposto giallo invece di un numero inventato.
 *
 *     npm run dati:mancanti
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

function file(percorso) {
  return readFileSync(join(ROOT, percorso), "utf8");
}

function percorsi(cartella, filtro) {
  const fuori = [];
  const cammina = (d) => {
    for (const voce of readdirSync(d)) {
      const p = join(d, voce);
      if (statSync(p).isDirectory()) cammina(p);
      else if (filtro(voce)) fuori.push(p);
    }
  };
  cammina(join(ROOT, cartella));
  return fuori.sort();
}

const sezioni = [];

// --- dati della casa ------------------------------------------------------
const casa = file("src/data/casa.ts");
const daCasa = [
  ...casa.matchAll(/daConfermare\(\s*[\s\S]*?"((?:[^"\\]|\\.)*)"\s*,?\s*\)/g),
]
  .map((m) => m[1])
  .filter((n) => n.length > 20);
if (daCasa.length) {
  sezioni.push(["Dati della casa (src/data/casa.ts)", daCasa]);
}

// --- camere ---------------------------------------------------------------
const camere = [];
for (const p of percorsi("src/content/camere", (f) => f.endsWith(".json"))) {
  const d = JSON.parse(readFileSync(p, "utf8"));
  const nome = d.nome;
  if (d.prenotabile && d.metratura === null) camere.push(`${nome}: metratura da misurare`);
  if (d.prenotabile && d.tariffaDa === null) camere.push(`${nome}: tariffa mancante`);
  else if (d.prenotabile && !d.tariffaConfermata)
    camere.push(`${nome}: tariffa indicativa (${d.tariffaDa} €), da confermare`);
  if (d.prenotabile && d.ospitiMax === null) camere.push(`${nome}: capienza massima`);
  if (d.prenotabile && d.foto.length < 5)
    camere.push(`${nome}: solo ${d.foto.length} fotografie (ne servono almeno 5)`);
}
if (camere.length) sezioni.push(["Camere (src/content/camere/)", camere]);

// --- luoghi ---------------------------------------------------------------
const luoghi = [];
for (const p of percorsi("src/content/luoghi", (f) => f.endsWith(".json"))) {
  const d = JSON.parse(readFileSync(p, "utf8"));
  if (d.casa) continue;
  if (d.minuti === null) luoghi.push(`${d.nome}: minuti a piedi mancanti`);
  else if (!d.minutiMisurati) luoghi.push(`${d.nome}: ${d.minuti} min stimati, da cronometrare`);
}
if (luoghi.length) sezioni.push(["Mappa di Ortigia (src/content/luoghi/)", luoghi]);

// --- domande --------------------------------------------------------------
const faq = [];
for (const p of percorsi("src/content/faq", (f) => f.endsWith(".json"))) {
  const d = JSON.parse(readFileSync(p, "utf8"));
  if (!d.risposta) faq.push(`«${d.domanda}» → serve: ${d.daConfermare ?? "una risposta"}`);
}
if (faq.length) sezioni.push(["Domande senza risposta (src/content/faq/)", faq]);

// --- specifiche -----------------------------------------------------------
const spec = [];
for (const p of percorsi("specs", (f) => f === "spec.md")) {
  const righe = readFileSync(p, "utf8").split("\n");
  righe.forEach((riga, i) => {
    if (riga.includes("NEEDS CLARIFICATION")) {
      spec.push(`${relative(ROOT, p)}:${i + 1}`);
    }
  });
}
if (spec.length) {
  sezioni.push([`Specifiche con punti aperti (${spec.length})`, spec]);
}

// --- stampa ---------------------------------------------------------------
let totale = 0;
for (const [titolo, voci] of sezioni) {
  console.log(`\n${titolo}`);
  console.log("─".repeat(titolo.length));
  for (const v of voci) console.log(`  · ${v}`);
  totale += voci.length;
}

console.log(
  totale === 0
    ? "\nNiente da confermare: il sito non dichiara segnaposto.\n"
    : `\n${totale} voci da confermare. Finché restano qui, in pagina compaiono ` +
        `segnaposto dichiarati.\n`,
);
