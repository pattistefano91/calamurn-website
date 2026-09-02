# Note per chi lavora su questo repository

Sito statico di una casa con quattro camere a Ortigia. Astro, nessun backend.

## Prima di toccare qualsiasi cosa

Leggi [.specify/memory/constitution.md](.specify/memory/constitution.md). Due regole valgono
sempre e non si negoziano:

1. **Nessun dato inventato.** Metrature, tariffe, minuti a piedi, gradini, orari: se non sono
   confermati restano segnaposto visibili (`class="todo"`) e voci di `npm run dati:mancanti`.
   Non riempire un buco con un numero plausibile perché «così la pagina è più bella».
2. **Niente solo al passaggio del puntatore.** Ogni informazione raggiungibile con `:hover`
   deve esserlo anche con tocco e tastiera.

## Ambiente

Node 22 è un keg Homebrew non collegato:

```bash
export PATH="/usr/local/opt/node@22/bin:$PATH"
```

`material/` (236 MB di originali) non è versionato e non serve per costruire.

## Dove sta cosa

- **Contenuti** → `src/content/` (JSON validati da `src/content.config.ts`). Aggiungere una
  camera o un luogo significa aggiungere un file, non toccare un componente.
- **Dati ripetuti** (orari, colazione, cancellazione, contatti) → `src/data/casa.ts`, ognuno
  con il proprio stato di conferma. Non duplicarli nel markup.
- **Fotografie** → `src/data/foto.manifest.json` dichiara didascalie e origini;
  `src/data/foto.ts` le espone al sito. Le didascalie sono anche i testi alternativi.
- **Colori e misure** → solo `src/styles/ombra.css`. Nessun colore scritto in un componente.
- **Testi** → `src/i18n/testi/{it,en,fr,de}.ts`. Nessuna stringa visibile scritta in un
  componente: l'italiano è la fonte, le altre tre devono avere le stesse chiavi o non compila.
  Nei contenuti i fatti stanno alla radice del JSON e la prosa sotto la lingua.

## Attenzione ricorrente

Un valore che è **prosa** non va in `casa.ts` come stringa singola: finisce non tradotto
dentro le pagine straniere. Se si legge in pagina, è un testo e vuole tutte e quattro le
lingue (il tipo `Frase`).

## Costruzione

`npm run build` impiega circa 90 secondi: genera WebP e JPEG a più larghezze per 45
fotografie. AVIF è stato provato e scartato (vedi spec 002, FR-007): portava la costruzione
a oltre quaranta minuti.

## Flusso di lavoro

Spec prima del codice. Le undici specifiche stanno in `specs/`; i comandi spec-kit
(`/speckit-specify`, `/speckit-plan`, `/speckit-tasks`, `/speckit-implement`) sono installati
in `.claude/skills/`. Se un'implementazione contraddice una spec, si corregge la spec con una
motivazione scritta — non si lascia la divergenza in silenzio.
