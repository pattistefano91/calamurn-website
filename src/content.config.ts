import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

/** Elenco chiuso delle dotazioni (spec 004, FR-013). */
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

const camere = defineCollection({
  loader: glob({ base: "./src/content/camere", pattern: "**/*.json" }),
  schema: z.object({
    nome: z.string(),
    occhiello: z.string(),
    descrizione: z.string(),
    piano: z.string(),
    affaccio: z.string(),
    /** null quando la misura non è ancora stata presa: si mostra un segnaposto. */
    metratura: z.number().nullable(),
    ospitiMax: z.number().nullable(),
    letto: z.string().nullable(),
    dotazioni: z.array(dotazione),
    /** Identificativi del manifesto fotografico, nell'ordine di visualizzazione. */
    foto: z.array(z.string()),
    fotoExtra: z.array(z.string()).default([]),
    /** Tariffa minima a notte in euro; null se non ancora confermata. */
    tariffaDa: z.number().nullable(),
    tariffaConfermata: z.boolean().default(false),
    prenotabile: z.boolean(),
    ordine: z.number(),
    /** Ciò che va detto prima, non dopo (spec 008, Principio I). */
    avvertenza: z.string().optional(),
  }),
});

const luoghi = defineCollection({
  loader: glob({ base: "./src/content/luoghi", pattern: "**/*.json" }),
  schema: z.object({
    nome: z.string(),
    occhiello: z.string(),
    categoria: z.enum(["monumenti", "mare", "mangiare", "pratico"]),
    /** Coordinate nel sistema del disegno, non in gradi. */
    x: z.number(),
    y: z.number(),
    /** Ancoraggio dell'etichetta rispetto al punto. */
    etichetta: z.enum(["destra", "sinistra"]).default("destra"),
    /** Minuti a piedi dal portone; null finché non sono cronometrati. */
    minuti: z.number().nullable(),
    minutiMisurati: z.boolean().default(false),
    consiglio: z.string(),
    ordine: z.number(),
    casa: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ base: "./src/content/faq", pattern: "**/*.json" }),
  schema: z.object({
    domanda: z.string(),
    risposta: z.string().nullable(),
    /** Cosa serve per poter rispondere, quando la risposta manca. */
    daConfermare: z.string().optional(),
    apertaDiDefault: z.boolean().default(false),
    ordine: z.number(),
  }),
});

export const collections = { camere, luoghi, faq };
