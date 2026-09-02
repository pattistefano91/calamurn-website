# Costituzione — Calamùrn · Palazzo Di Natale

Il sito di una casa con quattro camere in un palazzo del Quattrocento, in via Dione 58 a
Ortigia. Non è un prodotto software: è il modo in cui la casa si presenta a chi non l'ha
ancora vista. Questa costituzione vincola ogni spec, ogni piano e ogni riga di codice del
repository.

## Core Principles

### I. Onestà preventiva (NON NEGOZIABILE)

Ciò che l'ospite scoprirebbe con la valigia in mano va scritto in home, non nascosto nelle
condizioni. I gradini senza ascensore, il bagno della Standard che sta sul pianerottolo, la
ZTL, la colazione fuori: si dicono prima, e si trasformano in informazione utile invece che
in una recensione da tre stelle.

Corollario operativo: **nessun dato viene inventato**. Metrature, tariffe, minuti a piedi,
numero di gradini, orari e nomi di luoghi entrano nel sito solo se misurati o confermati dal
proprietario. Finché un dato non è confermato resta un `[NEEDS CLARIFICATION]` nella spec e
un segnaposto visibile in pagina — mai un numero plausibile messo lì per riempire.

### II. La prenotazione diretta è la funzione del sito

Ogni pagina esiste per portare a una conversazione diretta con la casa. Il canale è WhatsApp,
con data di arrivo, partenza, numero di ospiti e camera già scritti nel messaggio: l'ospite
non ricopia nulla. Esiste sempre un ripiego via e-mail per chi WhatsApp non lo usa.

Non si introducono passaggi che il portale fa meglio (pagamento immediato, conferma
automatica) e non si nasconde ciò che il diretto fa meglio (tariffa, flessibilità, una
persona che risponde). Il confronto con i portali si può fare apertamente, ed è una riga di
contenuto, non un vanto.

### III. Il peso della pagina è un costo dell'ospite

Chi apre il sito è spesso in strada, in roaming, con una barra di segnale. Budget vincolanti
per ogni pagina pubblicata, misurati su Lighthouse mobile con throttling di default:

- **≤ 250 KB** trasferiti al primo viewport (HTML + CSS + font + immagini above-the-fold);
- **≤ 40 KB** di JavaScript totale, compresso, su tutto il sito;
- **LCP ≤ 2,0 s** e **CLS ≤ 0,05** su rete 4G simulata;
- nessuna immagine servita a più del doppio dei pixel che occupa.

Il prototipo pesa 3,5 MB perché ha 45 fotografie in base64: è un documento di lavoro, non un
modello di implementazione. Nessuna dipendenza di terze parti entra nel bundle senza che la
spec ne dichiari il costo in KB.

### IV. Tutto raggiungibile senza mouse e senza animazione

Ogni informazione visibile passando il puntatore sopra un elemento deve essere raggiungibile
anche con tocco e con tastiera: i punti caldi del disegno del palazzo, i pin della mappa, le
didascalie della galleria. `prefers-reduced-motion` disattiva le animazioni di tracciamento
senza togliere contenuto. Contrasto minimo AA sui testi, focus sempre visibile, ogni
fotografia con un `alt` scritto a mano in italiano — le didascalie del prototipo sono già
quel testo.

### V. Una sola fonte per ogni contenuto

Camere, luoghi di Ortigia, FAQ, fotografie e didascalie vivono in *content collection* e file
di dati, mai duplicati dentro il markup. Le quattro lingue derivano dalla stessa struttura:
aggiungere una lingua è aggiungere traduzioni, non un'altra copia del sito. Una fotografia
compare in più sezioni riferendosi allo stesso identificativo, non con un secondo file.

## Vincoli tecnici

- **Stack**: Astro in output statico, TypeScript, CSS scritto a mano con i token del
  prototipo (la palette «Ombra»). Nessun framework UI, nessun CSS framework.
- **Nessun backend, nessun database, nessun account.** Il sito è un insieme di file statici.
  I moduli di contatto sono link `wa.me` e `mailto:` costruiti nel browser.
- **Hosting**: Vercel, deploy dal branch `main`, anteprima automatica su ogni pull request.
- **Immagini**: le originali (`material/`, ~236 MB fra PNG e HEIC) non entrano nel repository.
  Le sorgenti versionate sono le derivate lunghe 2400 px in `src/assets/photos/`, generate da
  `scripts/ingest-photos.py`; Astro produce in build le varianti responsive in AVIF e WebP.
- **Dati personali**: nessuna raccolta. Nessun cookie di profilazione, nessun tracker di terze
  parti; se servirà una statistica sarà senza cookie e senza dati personali.
- **Conformità**: il CIN va esposto in ogni pagina, insieme a privacy, cookie e condizioni.

## Flusso di lavoro

1. Ogni intervento nasce da una spec in `specs/###-nome/spec.md`, scritta prima del codice.
2. Le domande aperte si segnano come `[NEEDS CLARIFICATION]` e si risolvono con il
   proprietario: non si implementa attorno a un'ipotesi non dichiarata.
3. Una feature per branch (`###-nome`), una pull request, un'anteprima Vercel da guardare sul
   telefono prima del merge.
4. Prima del merge: build senza avvisi, budget del Principio III verificati sulla pagina
   toccata, navigazione da tastiera provata sulle parti interattive.
5. `main` è sempre deployabile. Ciò che non è confermato si pubblica come segnaposto
   dichiarato, non si tiene fuori dal branch.

## Governance

Questa costituzione prevale su ogni altra convenzione del repository. Una spec che la
contraddice va corretta, oppure la costituzione va emendata prima — con una riga di
motivazione e un numero di versione nuovo.

Gli emendamenti seguono il versionamento semantico: **MAJOR** se un principio viene rimosso o
ribaltato, **MINOR** se se ne aggiunge uno o se una sezione cambia sostanza, **PATCH** per
precisazioni che non cambiano ciò che è permesso.

Il Principio I non ammette eccezioni per ragioni commerciali. Se un dato onesto costa una
prenotazione, si perde quella prenotazione.

**Version**: 1.0.0 | **Ratified**: 2026-09-02 | **Last Amended**: 2026-09-02
