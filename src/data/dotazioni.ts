/**
 * Le dotazioni sono un elenco chiuso (spec 004, FR-013): la chiave è la stessa
 * in tutte le lingue, l'etichetta la danno le traduzioni.
 */
import { t, type Lingua } from "../i18n";
import type { Testi } from "../i18n/testi/it";

export type ChiaveDotazione = keyof Testi["dotazioni"];

export const etichetta = (lingua: Lingua, k: ChiaveDotazione): string =>
  t(lingua).dotazioni[k];

/** «19 m²», oppure niente quando la misura non c'è: il segnaposto lo mette la pagina. */
export function metraturaTesto(m: number | null): string | null {
  return m === null ? null : `${m} m²`;
}

export function ospitiTesto(lingua: Lingua, n: number | null): string | null {
  return n === null ? null : t(lingua).generale.ospiti(n);
}
