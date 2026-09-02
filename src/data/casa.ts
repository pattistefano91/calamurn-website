/**
 * I dati della casa che si ripetono in più punti del sito.
 * Unica fonte: cambiarli qui li cambia ovunque (spec 008, FR-011).
 *
 * Alcuni di questi valori sono prosa, non numeri — «entro un'ora», «inclusa, in
 * Piazza Archimede» — e vanno quindi scritti in tutte le lingue come qualsiasi
 * altro testo (spec 009, FR-005).
 */
import type { Lingua } from "../i18n/lingue";

export type Frase = Record<Lingua, string>;

export interface DatoDaConfermare<T> {
  valore: T;
  confermato: boolean;
  /** Cosa manca, per il comando `npm run dati:mancanti`. */
  nota?: string;
}

const daConfermare = <T,>(valore: T, nota: string): DatoDaConfermare<T> => ({
  valore,
  confermato: false,
  nota,
});

const confermato = <T,>(valore: T): DatoDaConfermare<T> => ({
  valore,
  confermato: true,
});

export const casa = {
  nome: "Calamùrn",
  palazzo: "Palazzo Di Natale",
  indirizzo: {
    via: "Via Dione 58",
    cap: "96100",
    citta: "Siracusa",
    quartiere: "Ortigia",
    paese: "IT",
  },
  /** Coordinate di via Dione 58, Ortigia. Da rifinire con un rilievo sul posto. */
  coordinate: daConfermare(
    { lat: 37.0644, lon: 15.2933 },
    "Coordinate ricavate dall'indirizzo, non rilevate sul posto.",
  ),
  cin: confermato("19089017C106672"),

  contatti: {
    /** Numero senza «+» né spazi, come vuole wa.me. */
    whatsapp: daConfermare(
      "39XXXXXXXXXX",
      "Numero WhatsApp reale della casa: nel prototipo è un segnaposto.",
    ),
    email: daConfermare(
      "ciao@calamurn.it",
      "Indirizzo e-mail: verificare che la casella sia attiva.",
    ),
    rispostaEntro: daConfermare<Frase>(
      { it: "un'ora", en: "an hour", fr: "une heure", de: "einer Stunde" },
      "Tempo di risposta dichiarato agli ospiti.",
    ),
    /** Un intervallo orario si legge uguale in tutte e quattro le lingue. */
    orari: daConfermare("9:00 – 22:00", "Orari in cui la casa risponde davvero."),
  },

  soggiorno: {
    // Non compaiono in pagina: la risposta alle domande frequenti li racconta
    // già, tradotti. Se un giorno serviranno qui, andranno resi Frase.
    checkIn: confermato("dalle 15:00 alle 23:30, in autonomia"),
    checkOut: confermato("entro le 11:00"),
    colazione: daConfermare<Frase>(
      {
        it: "inclusa, in Piazza Archimede",
        en: "included, on Piazza Archimede",
        fr: "compris, sur la Piazza Archimede",
        de: "inbegriffen, an der Piazza Archimede",
      },
      "Bar convenzionato: nome, orari, cosa comprende il ticket, cosa ordinare.",
    ),
    cancellazione: daConfermare<Frase | null>(
      null,
      "Giorni di cancellazione gratuita e politica di caparra.",
    ),
    gradini: daConfermare(
      null as number | null,
      "Numero esatto di gradini dal portone al secondo piano e all'attico.",
    ),
    ascensore: confermato(false),
  },

  ospitiMax: 3,
};

/** Tutti i dati ancora da confermare, per lo script e per i segnaposto in pagina. */
export function datiMancanti(): { chiave: string; nota: string }[] {
  const fuori: { chiave: string; nota: string }[] = [];
  const cammina = (nodo: unknown, percorso: string) => {
    if (!nodo || typeof nodo !== "object") return;
    if ("confermato" in nodo && "valore" in nodo) {
      const d = nodo as DatoDaConfermare<unknown>;
      if (!d.confermato) fuori.push({ chiave: percorso, nota: d.nota ?? "" });
      return;
    }
    for (const [k, v] of Object.entries(nodo)) cammina(v, percorso ? `${percorso}.${k}` : k);
  };
  cammina(casa, "casa");
  return fuori;
}

export const indirizzoCompleto = `${casa.indirizzo.via}, ${casa.indirizzo.cap} ${casa.indirizzo.citta} · ${casa.indirizzo.quartiere}`;
