/**
 * Elenco chiuso delle dotazioni (spec 004, FR-013): le stesse parole indicano
 * sempre la stessa cosa, e la traduzione avrà una sola chiave per ciascuna.
 */
export const dotazioni = {
  "balcone-su-via": "balcone su via Dione",
  "vista-cortile": "vista cortile",
  "vista-mare": "vista mare",
  "terrazzo-privato": "terrazzo privato",
  "bagno-interno": "bagno interno",
  "bagno-sul-pianerottolo": "bagno privato sul pianerottolo",
  "cabina-armadio": "cabina armadio",
  "doccia-a-filo": "doccia a filo pavimento",
  "letto-queen": "letto queen",
  "letto-baldacchino": "letto a baldacchino",
  "terzo-letto": "terzo letto su divano",
  "angolo-colazione": "angolo colazione",
  "pietra-a-vista": "pietra a vista",
  "soffitto-in-travi": "soffitto in travi",
} as const;

export type ChiaveDotazione = keyof typeof dotazioni;

export const etichetta = (k: ChiaveDotazione): string => dotazioni[k];

/** «19 m²», oppure il segnaposto dichiarato quando la misura non c'è. */
export function metraturaTesto(m: number | null): string | null {
  return m === null ? null : `${m} m²`;
}

export function ospitiTesto(n: number | null): string | null {
  if (n === null) return null;
  return n === 1 ? "1 ospite" : `${n} ospiti`;
}
