# Feature Specification: Internazionalizzazione (IT · EN · FR · DE)

**Feature Branch**: `009-internazionalizzazione`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Il sito va pubblicato in italiano, inglese, francese e tedesco:
sono le quattro lingue del piè di pagina del prototipo e coprono la grande maggioranza degli
ospiti di Ortigia. Ogni testo, didascalia e messaggio WhatsApp deve esistere nelle quattro
lingue, senza duplicare il sito."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Leggere il sito nella propria lingua (Priority: P1)

Un ospite tedesco apre il sito e lo trova in tedesco: le camere, le domande, i consigli sulla
mappa, la nota sui gradini. Non una traduzione parziale con metà pagina in italiano.

**Why this priority**: senza traduzione completa il sito perde la parte più redditizia degli
ospiti di Ortigia, e una traduzione a metà comunica trascuratezza.

**Independent Test**: si apre ogni lingua e si verifica che nessuna stringa resti in
italiano, comprese le didascalie delle fotografie e i messaggi di errore dei campi data.

**Acceptance Scenarios**:

1. **Given** l'indirizzo della versione tedesca, **When** la apro, **Then** ogni testo
   visibile è in tedesco e l'attributo di lingua del documento è `de`.
2. **Given** una traduzione mancante, **When** costruisco il sito, **Then** la costruzione
   fallisce indicando chiave e lingua, invece di pubblicare un testo italiano.
3. **Given** una qualsiasi lingua, **When** guardo le fotografie, **Then** anche le
   didascalie e i testi alternativi sono tradotti.

---

### User Story 2 - Cambiare lingua senza perdere il punto (Priority: P2)

Il visitatore è a metà della sezione camere in italiano, sceglie l'inglese e ritrova la
stessa sezione, non la testata della home.

**Why this priority**: chi cambia lingua ha già trovato quello che cerca; rimandarlo in cima
lo costringe a ricominciare.

**Independent Test**: si passa da una lingua all'altra da più punti e si verifica di
ritrovare la sezione corrispondente.

**Acceptance Scenarios**:

1. **Given** la sezione camere in italiano, **When** scelgo l'inglese, **Then** arrivo alla
   stessa sezione della versione inglese.
2. **Given** il selettore di lingua, **When** lo uso con la tastiera, **Then** funziona e la
   lingua corrente è dichiarata.

---

### User Story 3 - Essere trovato nella lingua giusta dai motori di ricerca (Priority: P2)

Chi cerca «bed and breakfast Ortigia» in francese trova la versione francese, non quella
italiana.

**Why this priority**: moltiplica il valore della traduzione, ma dipende dall'esistenza delle
traduzioni.

**Independent Test**: si controlla che ogni pagina dichiari le proprie alternative
linguistiche e che la mappa del sito le contenga tutte.

**Acceptance Scenarios**:

1. **Given** una pagina qualsiasi, **When** ne guardo i metadati, **Then** dichiara sé stessa
   e le altre tre lingue, più una versione predefinita.
2. **Given** la mappa del sito, **When** la leggo, **Then** contiene tutte le pagine in tutte
   le lingue.

---

### User Story 4 - Scrivere alla casa nella propria lingua (Priority: P3)

L'ospite francese preme «Prenota» e il messaggio WhatsApp è in francese, ma resta
comprensibile a chi risponde dall'altra parte.

**Why this priority**: rende naturale l'ultimo passo, ma un messaggio in inglese sarebbe già
accettabile.

**Independent Test**: si compila la barra in ciascuna lingua e si verifica lingua e
leggibilità del messaggio generato.

**Acceptance Scenarios**:

1. **Given** la versione francese, **When** premo «Prenota», **Then** il messaggio è in
   francese e le date sono in un formato non ambiguo.

### Edge Cases

- Una lingua ha una traduzione più lunga del previsto (il tedesco compone parole lunghe): il
  layout non si rompe e il testo non viene tagliato.
- Le date: il formato `12/06` significa cose diverse in Italia e negli Stati Uniti. Nei
  messaggi va usato un formato non ambiguo.
- Il visitatore ha il browser in spagnolo: riceve la versione predefinita, senza redirezioni
  automatiche che gli impediscano di scegliere.
- Un nome proprio non si traduce: «Fonte Aretusa», «Piazza Archimede», «Calamùrn» restano
  tali in ogni lingua, con eventuale glossa fra parentesi.
- La lingua viene aggiunta a metà lavoro: le chiavi mancanti sono elencabili prima di iniziare.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Il sito DEVE essere pubblicato in italiano, inglese, francese e tedesco.
- **FR-002**: L'italiano DEVE essere la lingua predefinita e stare alla radice (`/`); le
  altre sotto un prefisso (`/en/`, `/fr/`, `/de/`).
- **FR-003**: Ogni pagina DEVE dichiarare la lingua nel documento e le alternative
  linguistiche nei metadati, compresa una versione predefinita.
- **FR-004**: Tutti i testi dell'interfaccia DEVONO provenire da file di traduzione, mai
  scritti nel markup.
- **FR-005**: Tutti i contenuti — camere, luoghi, domande, didascalie delle fotografie,
  testi editoriali — DEVONO esistere nelle quattro lingue, con la stessa struttura e gli
  stessi identificativi.
- **FR-006**: La costruzione DEVE fallire quando manca una traduzione, indicando chiave e
  lingua: nessuna pagina pubblicata con testo di un'altra lingua.
- **FR-007**: DEVE esistere un comando che elenca le traduzioni mancanti per lingua.
- **FR-008**: Il selettore di lingua DEVE portare alla pagina equivalente e, quando possibile,
  alla stessa sezione.
- **FR-009**: NON DEVE esistere alcuna redirezione automatica basata sulla lingua del
  browser; il visitatore sceglie.
- **FR-010**: Il messaggio di prenotazione DEVE essere composto nella lingua della pagina,
  con date in formato non ambiguo (giorno, mese in lettere, anno).
- **FR-011**: Numeri, valuta e date DEVONO essere formattati secondo la lingua della pagina.
- **FR-012**: I nomi propri di luoghi e della casa NON DEVONO essere tradotti; se serve una
  spiegazione va aggiunta accanto.
- **FR-013**: Aggiungere una quinta lingua NON DEVE richiedere modifiche ai componenti, solo
  contenuto e traduzioni.
- **FR-014**: Le traduzioni DEVONO essere riviste da una persona madrelingua prima della
  pubblicazione, e lo stato di revisione DEVE essere registrato. *[NEEDS CLARIFICATION] chi
  rivede inglese, francese e tedesco?*

### Key Entities

- **Lingua**: codice, nome nella propria lingua, se è la predefinita, stato di revisione.
- **Chiave di traduzione**: l'identificativo stabile di un testo dell'interfaccia, con il suo
  valore in ogni lingua.
- **Contenuto tradotto**: la versione in una lingua di una camera, un luogo, una domanda o
  una didascalia; condivide l'identificativo con le altre versioni.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Nelle quattro lingue nessuna stringa resta nella lingua sbagliata: verificato da
  un controllo automatico sulla completezza delle chiavi.
- **SC-002**: Aggiungere una lingua richiede solo file di traduzione e contenuto: zero
  modifiche ai componenti, verificato provando una quinta lingua fittizia.
- **SC-003**: Ogni pagina dichiara quattro alternative linguistiche più la predefinita.
- **SC-004**: Nessuna traduzione supera la larghezza disponibile fino a rompere il layout,
  provato su schermo largo 320 px in tedesco.
- **SC-005**: Le pagine tradotte non pesano più di quella italiana: nessun costo aggiuntivo
  in KB per la traduzione.

## Assumptions

- L'italiano è la lingua di partenza: i testi si scrivono in italiano e si traducono da lì.
- Le quattro lingue sono quelle del piè di pagina del prototipo e non cambiano prima del
  lancio.
- La traduzione automatica può servire come bozza, ma non può essere pubblicata senza
  revisione umana: i testi hanno una voce precisa che una macchina appiattisce.
- Il volume di testo è contenuto (poche migliaia di parole): non serve un sistema di gestione
  delle traduzioni, bastano file versionati.
- Le fotografie sono le stesse in tutte le lingue; cambiano solo didascalie e testi
  alternativi.
