/**
 * Punto d'ingresso delle traduzioni.
 *
 * `Record<Lingua, Testi>` è il controllo che chiede la spec 009 (FR-006): se
 * una lingua manca, o le manca una chiave, la costruzione non parte. Nessuna
 * pagina viene pubblicata con il testo di un'altra lingua.
 */
import type { Lingua } from "./lingue";
import { LINGUA_PREDEFINITA, LOCALE } from "./lingue";
import { it, type Testi } from "./testi/it";
import { en } from "./testi/en";
import { fr } from "./testi/fr";
import { de } from "./testi/de";

export const TESTI: Record<Lingua, Testi> = { it, en, fr, de };

/** Le lingue già rilette da una persona madrelingua (spec 009, FR-014). */
export const TRADUZIONE_RIVISTA: Record<Lingua, boolean> = {
  it: true, // lingua di partenza
  en: false,
  fr: false,
  de: false,
};

export function t(lingua: Lingua): Testi {
  return TESTI[lingua] ?? TESTI[LINGUA_PREDEFINITA];
}

/** Numeri e valuta secondo la lingua della pagina (spec 009, FR-011). */
export function euro(lingua: Lingua, importo: number): string {
  return new Intl.NumberFormat(LOCALE[lingua], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(importo);
}

/** Data non ambigua: «12 giugno 2026», mai «12/06» (spec 009, FR-010). */
export function dataLunga(lingua: Lingua, iso: string): string | null {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat(LOCALE[lingua], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export type { Testi, Lingua };
export * from "./lingue";
