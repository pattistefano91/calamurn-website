/**
 * Le lingue del sito (spec 009).
 *
 * Aggiungerne una quinta significa toccare questo elenco e i file di
 * traduzione: nessun componente sa quante lingue esistono (FR-013).
 */

export const LINGUE = ["it", "en", "fr", "de"] as const;
export type Lingua = (typeof LINGUE)[number];

export const LINGUA_PREDEFINITA: Lingua = "it";

/** Il nome di ogni lingua nella lingua stessa: è così che si scrive un selettore. */
export const NOME_LINGUA: Record<Lingua, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

/** Locale per la formattazione di date, numeri e valuta. */
export const LOCALE: Record<Lingua, string> = {
  it: "it-IT",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
};

/** Il valore dell'attributo `lang` e degli `hreflang`. */
export const CODICE_HTML: Record<Lingua, string> = {
  it: "it",
  en: "en",
  fr: "fr",
  de: "de",
};

export function eLingua(x: string | undefined | null): x is Lingua {
  return typeof x === "string" && (LINGUE as readonly string[]).includes(x);
}

/** La lingua di una pagina, dedotta dal suo indirizzo. */
export function linguaDi(url: URL | string): Lingua {
  const percorso = typeof url === "string" ? url : url.pathname;
  const primo = percorso.split("/").filter(Boolean)[0];
  return eLingua(primo) ? primo : LINGUA_PREDEFINITA;
}

/**
 * L'indirizzo di una pagina in una data lingua.
 * `percorso("de", "/")` → `/de`, `percorso("it", "/")` → `/`.
 */
export function percorso(lingua: Lingua, dentro = "/"): string {
  const pulito = dentro.replace(/^\/+/, "");
  const prefisso = lingua === LINGUA_PREDEFINITA ? "" : `/${lingua}`;
  return pulito ? `${prefisso}/${pulito}` : prefisso || "/";
}

/** Le altre lingue, per il selettore e per gli `hreflang`. */
export function altreLingue(lingua: Lingua): Lingua[] {
  return LINGUE.filter((l) => l !== lingua);
}
