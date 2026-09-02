# Feature Specification: Pipeline delle immagini

**Feature Branch**: `002-pipeline-immagini`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Le fotografie della casa stanno in `material/`, divise per
ambiente (palazzo, suite, deluxe, standard, superior, spazi comuni, colazione, terrazzo), per
un totale di 115 file e 236 MB fra PNG a piena risoluzione e HEIC dell'iPhone. Servono
nel sito, ottimizzate, con una didascalia in italiano, senza appesantire il repository."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - L'ospite vede le fotografie subito, anche in roaming (Priority: P1)

Chi apre il sito su una rete lenta vede le fotografie comparire in fretta e alla nitidezza
giusta per il suo schermo: nessun PNG da 3 MB scaricato per riempire un riquadro largo 320 px.

**Why this priority**: sono le fotografie a vendere la casa e sono la parte più pesante del
sito. Senza questa storia il Principio III della costituzione è violato ovunque.

**Independent Test**: si apre una pagina con fotografie su un telefono con rete lenta
simulata e si misura il peso totale delle immagini scaricate nel primo viewport.

**Acceptance Scenarios**:

1. **Given** uno schermo largo 390 px a densità 2, **When** carico una pagina con
   fotografie, **Then** il browser scarica varianti larghe al più 960 px, non l'originale.
2. **Given** un browser che dichiara di accettare WebP, **When** carico una fotografia,
   **Then** riceve la variante WebP; altrimenti riceve il ripiego JPEG.
3. **Given** una fotografia sotto la piega, **When** carico la pagina, **Then** viene
   caricata in differita e il suo spazio è già riservato con le proporzioni corrette.

---

### User Story 2 - Chi clona il repository può ricostruire il sito (Priority: P2)

Uno sviluppatore clona il repository senza avere `material/` sul disco e riesce comunque a
costruire il sito completo di fotografie.

**Why this priority**: senza questo il progetto dipende dal disco di una sola persona. Non è
P1 perché il sito online funziona lo stesso.

**Independent Test**: si clona il repository in una cartella pulita, si esegue
l'installazione e la costruzione, e si verifica che tutte le fotografie siano presenti.

**Acceptance Scenarios**:

1. **Given** un clone senza `material/`, **When** eseguo la costruzione del sito, **Then**
   completa senza errori e ogni fotografia prevista è presente nel risultato.
2. **Given** il repository, **When** ne misuro il peso, **Then** resta sotto i 60 MB.

---

### User Story 3 - Aggiungere una fotografia è un'operazione dichiarata (Priority: P3)

Il proprietario manda una nuova fotografia del terrazzo. Si aggiunge una voce al manifesto
con ambiente, ruolo, didascalia e file di origine, si esegue un comando, e la fotografia
entra nel sito con tutte le sue varianti.

**Why this priority**: rende manutenibile il sito nel tempo, ma il primo lancio si può fare
con la selezione già esistente.

**Independent Test**: si aggiunge una voce al manifesto puntando a un file di `material/`, si
esegue lo script e si verifica la comparsa della derivata e della didascalia nella galleria.

**Acceptance Scenarios**:

1. **Given** una voce nuova nel manifesto, **When** eseguo lo script di ingestione, **Then**
   viene creata la sola derivata mancante e le esistenti non vengono ritoccate.
2. **Given** una voce del manifesto che punta a un file inesistente, **When** eseguo lo
   script, **Then** fallisce indicando il percorso mancante, senza produrre file parziali.

### Edge Cases

- File HEIC dell'iPhone (le quattro fotografie del palazzo): vanno convertiti; nessun browser
  può essere lasciato senza un formato che sa leggere.
- Fotografia verticale in un riquadro orizzontale: il ritaglio non deve tagliare il soggetto;
  il punto di interesse è dichiarabile nel manifesto.
- Due voci del manifesto che puntano allo stesso file di origine: ammesso, ma la derivata è
  una sola e viene riusata.
- Fotografia più piccola della larghezza obiettivo: non va ingrandita, si usa com'è.
- L'originale contiene coordinate GPS e modello di fotocamera nei metadati: vanno rimossi.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: DEVE esistere un manifesto delle fotografie, versionato, che per ogni immagine
  dichiara: identificativo stabile, ambiente, ruolo, file di origine relativo a `material/`,
  dimensioni dell'originale e didascalia in italiano.
- **FR-002**: Il manifesto DEVE partire dalla selezione e dall'ordine già presenti nel
  prototipo — 45 fotografie: 3 del palazzo, 18 della suite, 6 per ciascuna fra Deluxe,
  Standard, Superior e spazi comuni — abbinate all'originale ad alta risoluzione
  corrispondente.
- **FR-003**: Uno script di ingestione DEVE produrre da `material/` le sorgenti versionate:
  lato lungo massimo 2400 px, formato JPEG di qualità alta, metadati EXIF rimossi, nome del
  file uguale all'identificativo del manifesto.
- **FR-004**: Lo script DEVE essere idempotente: eseguito due volte di seguito non riscrive
  le derivate già aggiornate.
- **FR-005**: Lo script DEVE convertire i file HEIC in un formato leggibile dai browser.
- **FR-006**: Le sorgenti versionate DEVONO stare sotto `src/assets/photos/` ed essere l'unico
  ingresso della costruzione; `material/` NON DEVE essere necessario per costruire il sito.
- **FR-007**: In fase di costruzione ogni fotografia DEVE produrre varianti responsive in
  **WebP con ripiego JPEG**, servite con `srcset` e `sizes` coerenti con lo spazio
  effettivamente occupato. Le larghezze si scelgono per contesto, non per tutti uguali: le
  miniature da 80 px non hanno bisogno di cinque varianti.

  *AVIF è stato provato e scartato.* Su questo progetto — 45 fotografie riusate in più
  sezioni — l'aggiunta di AVIF porta la costruzione da circa un minuto a oltre quaranta,
  che sarebbe il costo di ogni singolo deploy. WebP copre più del 97% dei browser e il
  guadagno residuo di AVIF non vale quel prezzo. Se un giorno la codifica costerà meno, o
  se le fotografie diventeranno poche e grandi, la scelta si può ribaltare: è una decisione
  di costo, non di principio.
- **FR-008**: Ogni immagine emessa DEVE dichiarare larghezza e altezza intrinseche perché il
  browser riservi lo spazio prima del caricamento.
- **FR-009**: Le fotografie sotto la piega DEVONO essere caricate in differita; quella della
  testata NON DEVE esserlo e DEVE essere segnalata come risorsa prioritaria.
- **FR-010**: Ogni fotografia DEVE avere un testo alternativo in italiano; la didascalia del
  manifesto è quel testo quando non ne è dato uno più specifico.
- **FR-011**: Il manifesto DEVE poter dichiarare, per ogni fotografia, un punto di interesse
  usato come centro dei ritagli.
- **FR-012**: I file di `material/` NON DEVONO essere modificati né spostati dallo script.
- **FR-013**: Le fotografie delle cartelle `colazione/` e `terrazzo/` DEVONO essere
  classificate. *(`terrazzo/` è vuota: [NEEDS CLARIFICATION] le fotografie del terrazzo
  esistono? Nel prototipo il terrazzo è raccontato dalle immagini della suite e la sezione
  dedicata usa un segnaposto.)*

### Key Entities

- **Voce del manifesto**: identificativo, ambiente, ruolo, origine, dimensioni, didascalia,
  punto di interesse. È il contratto fra le fotografie e tutto il resto del sito.
- **Sorgente versionata**: la derivata a 2400 px in `src/assets/photos/`, unica base della
  costruzione.
- **Ambiente**: palazzo, suite, deluxe, standard, superior, spazi comuni, colazione,
  terrazzo. Sono anche i filtri della galleria.
- **Ruolo**: che uso ha la fotografia — testata di giorno, testata di sera, facciata,
  principale della camera, extra della galleria.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Il peso mediano di una fotografia servita a 1200 px di larghezza resta sotto i
  160 KB in WebP.
- **SC-002**: Il repository dopo l'ingestione resta sotto i 60 MB, contro i 236 MB di
  `material/`.
- **SC-003**: Nessuna immagine viene servita a più del doppio dei pixel che occupa, su tutte
  le larghezze di schermo provate (320, 390, 768, 1024, 1440, 1920 px).
- **SC-004**: Il CLS attribuibile alle immagini è zero su ogni pagina.
- **SC-005**: Ogni fotografia pubblicata ha un testo alternativo non vuoto e diverso da
  quello delle altre.

## Assumptions

- L'abbinamento fra le 45 fotografie del prototipo e gli originali di `material/` è già
  stato calcolato per somiglianza percettiva ed è registrato nel manifesto; ogni abbinamento
  ha un margine ampio rispetto al secondo candidato ed è stato ritenuto affidabile.
- Le fotografie sono di proprietà del committente e liberamente pubblicabili.
- L'ingestione avviene sulla macchina di sviluppo, non nella costruzione su Vercel: le
  sorgenti a 2400 px sono già nel repository.
- Non serve un editor di immagini in linea: ritagli e selezione avvengono a monte.
