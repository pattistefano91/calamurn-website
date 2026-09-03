import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";
import { LINGUE } from "./i18n/lingue";

/** Elenco chiuso delle dotazioni (spec 004, FR-013). Le etichette stanno nelle traduzioni. */
const dotazione = z.enum([
  "balcone-su-via",
  "vista-cortile",
  "vista-mare",
  "terrazzo-privato",
  "bagno-interno",
  "bagno-sul-pianerottolo",
  "cabina-armadio",
  "doccia-a-filo",
  "letto-queen",
  "letto-baldacchino",
  "terzo-letto",
  "angolo-colazione",
  "pietra-a-vista",
  "soffitto-in-travi",
]);

/**
 * Un campo di testo esiste in tutte le lingue o la costruzione fallisce
 * (spec 009, FR-005 e FR-006). I numeri restano fuori: vivono una volta sola.
 */
function tradotto<T extends z.ZodType>(forma: T) {
  return z
    .object(Object.fromEntries(LINGUE.map((l) => [l, forma])) as Record<
      (typeof LINGUE)[number],
      T
    >)
    .strict();
}

const camere = defineCollection({
  loader: glob({ base: "./src/content/camere", pattern: "**/*.json" }),
  schema: z.object({
    // --- fatti: una sola volta per tutte le lingue ---
    metratura: z.number().nullable(),
    ospitiMax: z.number().nullable(),
    dotazioni: z.array(dotazione),
    foto: z.array(z.string()),
    fotoExtra: z.array(z.string()).default([]),
    tariffaDa: z.number().nullable(),
    tariffaConfermata: z.boolean().default(false),
    prenotabile: z.boolean(),
    ordine: z.number(),

    // --- testi: in tutte le lingue ---
    nome: tradotto(z.string()),
    occhiello: tradotto(z.string()),
    descrizione: tradotto(z.string()),
    /** Ciò che va detto prima, non dopo (spec 008, Principio I). */
    avvertenza: tradotto(z.string()).optional(),
  }),
});

const luoghi = defineCollection({
  loader: glob({ base: "./src/content/luoghi", pattern: "**/*.json" }),
  schema: z.object({
    categoria: z.enum(["monumenti", "mare", "mangiare", "pratico"]),
    /** Coordinate nel sistema del disegno, non in gradi. */
    x: z.number(),
    y: z.number(),
    etichetta: z.enum(["destra", "sinistra"]).default("destra"),
    /** Minuti a piedi dal portone; null finché non sono cronometrati. */
    minuti: z.number().nullable(),
    minutiMisurati: z.boolean().default(false),
    ordine: z.number(),
    casa: z.boolean().default(false),

    nome: tradotto(z.string()),
    occhiello: tradotto(z.string()),
    consiglio: tradotto(z.string()),
  }),
});

/**
 * Le recensioni (spec 012). I fatti — chi, quando, quanto, dove — stanno alla
 * radice; il testo esiste nelle quattro lingue come ogni altra prosa.
 *
 * La cartella è vuota finché non arrivano i testi per esteso in lingua
 * originale: quelli dell'esportazione Google sono tagliati e tradotti a
 * macchina, e pubblicarli attribuirebbe a una persona parole che non ha
 * scritto (FR-010b).
 */
const recensioni = defineCollection({
  loader: glob({ base: "./src/content/recensioni", pattern: "**/*.json" }),
  schema: z.object({
    fonte: z.enum(["google", "booking"]),
    /** Mese e anno bastano, e sono meno identificanti del giorno esatto. */
    data: z.string().regex(/^\d{4}-\d{2}$/),
    /** Solo il nome di battesimo: mai il cognome (FR-011). */
    nome: z.string(),
    /** Codice del paese, facoltativo. */
    paese: z.string().length(2).optional(),
    punteggio: z.number(),
    scala: z.number(),
    /** La lingua in cui l'ospite ha scritto: può non essere una del sito. */
    linguaOriginale: z.string(),
    /** La pagina dove chiunque può verificare che esista davvero (FR-005). */
    link: z.url(),
    /** Il testo, nella lingua originale e tradotto nelle quattro del sito. */
    testo: tradotto(z.string()),
    /** Se il testo è stato accorciato, va dichiarato (FR-010). */
    accorciata: z.boolean().default(false),
    camera: z.string().optional(),
    risposta: tradotto(z.string()).optional(),
    ordine: z.number(),
  }),
});

const faq = defineCollection({
  loader: glob({ base: "./src/content/faq", pattern: "**/*.json" }),
  schema: z.object({
    apertaDiDefault: z.boolean().default(false),
    ordine: z.number(),

    domanda: tradotto(z.string()),
    risposta: tradotto(z.string()).nullable(),
    /** Cosa serve per poter rispondere, quando la risposta manca. */
    daConfermare: tradotto(z.string()).optional(),
  }),
});

export const collections = { camere, luoghi, faq, recensioni };
