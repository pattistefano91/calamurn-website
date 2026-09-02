# Calamùrn · Palazzo Di Natale

Il sito di quattro camere in un palazzo tardo-gotico catalano, in via Dione 58 a Ortigia
(Siracusa). Sito statico, prenotazione diretta su WhatsApp, nessun backend.

**Online:** <https://calamurn-website.vercel.app> — deploy automatico a ogni push su `main`,
anteprima su ogni pull request. Il sito è dichiarato `noindex` finché non viene collegato un
dominio proprio: per ora è un'anteprima, non una vetrina pubblicata.

Il progetto segue [Spec-Driven Development](https://github.com/github/spec-kit): prima la
specifica, poi il codice. Le regole che valgono su tutto stanno nella
[costituzione](.specify/memory/constitution.md); la prima, non negoziabile, è che **nessun
dato viene inventato** — finché un numero non è confermato, in pagina compare un segnaposto
giallo invece di una cifra plausibile.

---

## Avvio rapido

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run check      # controllo dei tipi
```

Serve **Node ≥ 22.12**. Su questa macchina è installato come keg Homebrew:

```bash
export PATH="/usr/local/opt/node@22/bin:$PATH"
```

## Comandi

| Comando | Cosa fa |
| --- | --- |
| `npm run dev` | Server di sviluppo con ricarica. |
| `npm run build` | Costruisce il sito statico in `dist/`. Impiega circa 90 secondi a freddo: genera le varianti WebP e JPEG di ogni fotografia. |
| `npm run check` | Controllo dei tipi su componenti e contenuti. |
| `npm run foto:ingest` | Rigenera le sorgenti fotografiche da `material/` (serve solo a chi ha gli originali). |
| `npm run dati:mancanti` | **Elenca tutto ciò che è ancora da confermare.** È la lista da mandare al proprietario. |

## Com'è fatto

```
.specify/            impianto spec-kit: costituzione, modelli, script
.claude/skills/      comandi /speckit-* per l'agente
specs/               undici specifiche, una per feature
material/            fotografie originali (236 MB, FUORI dal repository)
scripts/
  ingest-photos.py   material/ → src/assets/photos/ (sips, senza dipendenze)
  dati-mancanti.mjs  il rapporto sui segnaposto
src/
  assets/photos/     45 sorgenti versionate, lato lungo ≤ 2400 px
  components/        una sezione della home per file
  content/           camere, luoghi di Ortigia, domande frequenti
  data/              casa.ts (dati della casa), foto.ts (registro), manifesto
  layouts/Base.astro cornice comune: metadati, dati strutturati, testata, piè di pagina
  pages/             index.astro, 404.astro
  styles/ombra.css   il sistema visivo: ogni colore del sito nasce qui
vercel.json          intestazioni di sicurezza e cache
```

### Le fotografie

`material/` non è versionato: pesa 236 MB fra PNG a piena risoluzione e HEIC dell'iPhone. Le
sorgenti del sito sono le 45 derivate in `src/assets/photos/` (15 MB), scelte a partire dal
prototipo e riabbinate agli originali ad alta risoluzione. Il legame fra le due cose è
`src/data/foto.manifest.json`, che per ogni fotografia dichiara identificativo, ambiente,
ruolo, file d'origine e didascalia in italiano — la didascalia è anche il testo alternativo.

Chi clona il repository **non ha bisogno di `material/`**: la costruzione parte dalle
sorgenti versionate.

### I contenuti

Camere, luoghi e domande stanno in `src/content/` come JSON validati da uno schema
(`src/content.config.ts`). Aggiungere una camera significa aggiungere un file, non toccare i
componenti. I dati della casa che si ripetono in più punti — orari, colazione,
cancellazione, contatti — stanno tutti in `src/data/casa.ts`, ognuno con il proprio stato di
conferma.

## Le specifiche

| | Feature | Stato |
| --- | --- | --- |
| 001 | [Fondamenta del sito](specs/001-fondamenta-sito/spec.md) | implementata |
| 002 | [Pipeline delle immagini](specs/002-pipeline-immagini/spec.md) | implementata |
| 003 | [Prenotazione via WhatsApp](specs/003-prenotazione-whatsapp/spec.md) | implementata, mancano i contatti veri |
| 004 | [Camere e tariffe](specs/004-camere-e-tariffe/spec.md) | implementata, tariffe da confermare |
| 005 | [Disegno interattivo del palazzo](specs/005-disegno-interattivo-palazzo/spec.md) | implementata |
| 006 | [Galleria fotografica](specs/006-galleria-fotografica/spec.md) | implementata |
| 007 | [Mappa di Ortigia](specs/007-mappa-ortigia/spec.md) | implementata, minuti da cronometrare |
| 008 | [Contenuti editoriali](specs/008-contenuti-editoriali/spec.md) | parziale: quattro domande senza risposta |
| 009 | [Internazionalizzazione IT·EN·FR·DE](specs/009-internazionalizzazione/spec.md) | da fare |
| 010 | [Reperibilità e pagine locali](specs/010-seo-e-pagine-locali/spec.md) | parziale: dati strutturati e sitemap sì, pagine locali no |
| 011 | [Pubblicazione su Vercel](specs/011-deploy-vercel/spec.md) | implementata, manca il dominio |

Il flusso spec-kit resta disponibile: `/speckit-specify`, `/speckit-plan`, `/speckit-tasks`,
`/speckit-implement`.

## Cosa manca prima di poter dire che il sito è pubblicato

Esegui `npm run dati:mancanti` per la lista completa. In sintesi:

- **il numero WhatsApp e l'indirizzo e-mail veri** — oggi sono segnaposto, e finché lo sono
  il pulsante di prenotazione non porta da nessuna parte;
- **le tariffe reali** per stagione, e la metratura della suite;
- **il numero di gradini** dal portone al secondo piano e all'attico;
- **i minuti a piedi cronometrati** verso gli undici luoghi della mappa;
- **le regole della ZTL, i parcheggi, la colazione, la cancellazione**;
- **le tre traduzioni** (inglese, francese, tedesco);
- **il dominio** da collegare: quando c'è, va impostata la variabile d'ambiente `SITE_URL`
  sul progetto Vercel — è quella a togliere il `noindex` e a rendere corretti indirizzi
  canonici e mappa del sito.

Finché queste voci restano aperte il sito è un'anteprima onesta, non una vetrina finita: ogni
buco è dichiarato in pagina.
