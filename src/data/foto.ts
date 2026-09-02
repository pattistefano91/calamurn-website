/**
 * Registro delle fotografie (spec 002).
 *
 * Il manifesto dichiara identificativo, ambiente, ruolo e didascalia; le sorgenti
 * versionate stanno in src/assets/photos/ e vengono generate da
 * scripts/ingest-photos.py a partire dagli originali in material/.
 */
import manifesto from "./foto.manifest.json";

export type Ambiente =
  | "palazzo"
  | "suite"
  | "deluxe"
  | "standard"
  | "superior"
  | "comuni";

export interface Foto {
  id: string;
  ambiente: Ambiente;
  ruolo: string;
  didascalia: string;
  immagine: ImageMetadata;
}

const sorgenti = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/photos/*.jpg",
  { eager: true },
);

const perId = new Map<string, ImageMetadata>();
for (const [percorso, modulo] of Object.entries(sorgenti)) {
  const id = percorso.split("/").pop()!.replace(/\.jpg$/, "");
  perId.set(id, modulo.default);
}

export const foto: Foto[] = manifesto.foto.map((voce) => {
  const immagine = perId.get(voce.id);
  if (!immagine) {
    throw new Error(
      `Fotografia mancante: src/assets/photos/${voce.id}.jpg è dichiarata nel ` +
        `manifesto ma non esiste. Esegui «npm run foto:ingest».`,
    );
  }
  return {
    id: voce.id,
    ambiente: voce.gruppo as Ambiente,
    ruolo: voce.ruolo,
    didascalia: voce.didascalia,
    immagine,
  };
});

const indice = new Map(foto.map((f) => [f.id, f]));

export function fotoDi(id: string): Foto {
  const f = indice.get(id);
  if (!f) throw new Error(`Fotografia sconosciuta: «${id}».`);
  return f;
}

export function fotoDegli(ids: readonly string[]): Foto[] {
  return ids.map(fotoDi);
}

export function fotoPerAmbiente(ambiente: Ambiente): Foto[] {
  return foto.filter((f) => f.ambiente === ambiente);
}

export function fotoConRuolo(ruolo: string): Foto {
  const f = foto.find((x) => x.ruolo === ruolo);
  if (!f) throw new Error(`Nessuna fotografia con ruolo «${ruolo}».`);
  return f;
}

/** Etichette degli ambienti, per i filtri della galleria (spec 006). */
export const etichetteAmbiente: Record<Ambiente, string> = {
  palazzo: "Il palazzo",
  deluxe: "Deluxe",
  standard: "Standard",
  superior: "Superior",
  suite: "Suite",
  comuni: "Spazi comuni",
};
