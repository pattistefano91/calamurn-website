# Feature Specification: Fondamenta del sito

**Feature Branch**: `001-fondamenta-sito`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Impianto del sito Calamùrn a partire dal prototipo
`material/calamurn-sito-ombra.html`: progetto Astro statico, sistema visivo «Ombra», layout
di base con testata fissa e piè di pagina, e una home page che regge tutte le sezioni
previste dalle feature successive."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Un visitatore capisce dove si trova nei primi tre secondi (Priority: P1)

Qualcuno arriva da una ricerca su Google o da un link su Instagram, sul telefono, in strada.
Vede una fotografia del portone su via Dione, il nome della casa, e una frase che dice cosa
è: quattro camere dentro un palazzo gotico-catalano dietro Piazza Archimede. Non deve
scorrere, non deve aspettare, non deve chiudere un banner.

**Why this priority**: senza questo non esiste nulla. È l'unica storia che, da sola, produce
già un sito pubblicabile: un'unica schermata onesta vale più di dieci sezioni non finite.

**Independent Test**: si apre la home su un telefono in 4G e si cronometra il tempo fino a
quando l'immagine di testata è visibile e leggibile; si verifica che nome, luogo e frase di
apertura siano presenti senza scorrere.

**Acceptance Scenarios**:

1. **Given** un telefono con rete 4G simulata, **When** apro la home, **Then** l'elemento
   più grande del primo viewport è disegnato entro 2,0 s e non si sposta più dopo.
2. **Given** la home aperta, **When** guardo il primo viewport senza scorrere, **Then** leggo
   il nome «Calamùrn», l'indirizzo «Via Dione 58 · Ortigia, Siracusa» e la frase di apertura.
3. **Given** JavaScript disattivato nel browser, **When** apro la home, **Then** testata,
   testi, fotografie e piè di pagina restano leggibili e i collegamenti funzionano.

---

### User Story 2 - Il visitatore raggiunge la sezione che gli interessa (Priority: P2)

Dalla testata fissa il visitatore salta alle camere, alla suite, alla mappa, al palazzo, alle
foto, a Ortigia, alle domande. La testata resta visibile mentre scorre e da qualsiasi punto
della pagina il pulsante di prenotazione è a portata.

**Why this priority**: la home è lunga; senza orientamento le sezioni sotto non vengono
raggiunte. Vale meno della P1 perché una pagina senza navigazione si può comunque scorrere.

**Independent Test**: si percorre la pagina con il solo tasto Tab e si verifica che ogni voce
della testata porti alla sezione corrispondente, con il fuoco visibile a ogni passo.

**Acceptance Scenarios**:

1. **Given** la home aperta a metà pagina, **When** guardo in alto, **Then** la testata è
   ancora visibile e contiene il nome della casa e il pulsante «Prenota».
2. **Given** la testata, **When** attivo con Invio la voce «Le camere», **Then** la pagina
   scorre fino alla sezione camere e il fuoco della tastiera si sposta lì dentro.
3. **Given** uno schermo largo meno di 960 px, **When** apro la home, **Then** esiste un modo
   dichiarato di raggiungere tutte le sezioni (menu compatto), non solo lo scorrimento.

---

### User Story 3 - Chi torna sul sito lo riconosce (Priority: P3)

Il sito ha un aspetto proprio — la palette «Ombra» costruita sui colori della pietra in ombra
e delle persiane di via Dione, tre famiglie tipografiche, il tratto a matita dei disegni — e
lo mantiene identico su ogni pagina e in ogni lingua.

**Why this priority**: la coerenza visiva è ciò che distingue il sito da un annuncio su un
portale, ma non blocca la pubblicazione della prima schermata.

**Independent Test**: si aprono due pagine diverse e si confronta che colori, spaziature,
misure dei titoli e stile dei bordi provengano dagli stessi token dichiarati.

**Acceptance Scenarios**:

1. **Given** il foglio di stile, **When** cerco un colore scritto direttamente in un
   componente, **Then** non ne trovo: ogni colore viene da una variabile CSS dichiarata.
2. **Given** una pagina qualsiasi, **When** i font di rete non si caricano, **Then** i testi
   restano leggibili con i caratteri di sistema di riserva e il layout non salta.

### Edge Cases

- Il visitatore ha `prefers-reduced-motion` attivo: lo scorrimento è immediato, nessuna
  animazione di comparsa, nessun contenuto perso.
- La rete cade dopo il caricamento dell'HTML ma prima delle fotografie: al posto di ogni
  immagine resta uno spazio della proporzione corretta con il colore di fondo della palette,
  senza salti del testo attorno.
- Lo schermo è largo 320 px: nessun elemento produce scorrimento orizzontale della pagina.
- Il visitatore usa il sito con lo zoom di sistema al 200%: la testata non copre più di un
  terzo dell'altezza e resta usabile.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Il progetto DEVE essere un sito Astro in output statico (`output: 'static'`),
  senza runtime lato server e senza chiamate di rete a terze parti in fase di esecuzione,
  fatta eccezione per i caratteri tipografici serviti da un dominio dichiarato.
- **FR-002**: Il sistema visivo DEVE essere espresso come token CSS in un unico file, con i
  valori della palette «Ombra» del prototipo (pietra, carta, inchiostro, persiana, piombo,
  cielo, ombra, regola) e le tre famiglie tipografiche (display, testo, monospaziato).
- **FR-003**: Ogni famiglia tipografica DEVE dichiarare una pila di riserva di caratteri di
  sistema e caricarsi con `font-display: swap`; il peso complessivo dei caratteri non DEVE
  superare 120 KB.
- **FR-004**: DEVE esistere un layout di base riusabile che fornisce testata, area di
  contenuto e piè di pagina, e che accetta titolo, descrizione e immagine sociale per pagina.
- **FR-005**: La testata DEVE restare visibile durante lo scorrimento, contenere il nome
  «Calamùrn · Palazzo Di Natale · Ortigia», i collegamenti alle sezioni e il pulsante di
  prenotazione, ed essere utilizzabile con la sola tastiera.
- **FR-006**: Sotto i 960 px di larghezza la navigazione DEVE restare raggiungibile tramite
  un menu compatto apribile da tastiera e da tocco. *(Nel prototipo la navigazione veniva
  semplicemente nascosta: è un difetto da correggere, non da riprodurre.)*
- **FR-007**: Il piè di pagina DEVE contenere ragione sociale, indirizzo completo, il CIN
  `19089017C106672`, i collegamenti a privacy, cookie e condizioni, e il selettore di lingua.
- **FR-008**: La home DEVE esporre, nell'ordine del prototipo, i contenitori vuoti ma
  identificati delle sezioni che le feature successive riempiranno: testata fotografica,
  barra di prenotazione, disegno del palazzo, camere, suite, palazzo, distanze a piedi,
  mappa, gradini, confronto con i portali, galleria, domande frequenti.
- **FR-009**: Ogni sezione DEVE avere un identificativo stabile riutilizzabile come àncora,
  e i collegamenti interni DEVONO funzionare anche senza JavaScript.
- **FR-010**: Il sito NON DEVE impostare cookie né caricare tracker di terze parti.
- **FR-011**: La testata fotografica DEVE mostrare la fotografia del portone di giorno; il
  passaggio giorno/sera del prototipo (dissolvenza guidata da un cursore) È un
  potenziamento facoltativo che DEVE degradare a immagine singola senza JavaScript.
- **FR-012**: Il repository DEVE contenere le istruzioni per installare, sviluppare e
  costruire il sito, e dichiarare che `material/` resta fuori dal controllo di versione.

### Key Entities

- **Token visivo**: un colore, una misura tipografica o una spaziatura del sistema «Ombra»,
  con un nome stabile riusato da tutte le pagine.
- **Layout di base**: la cornice comune a ogni pagina; conosce titolo, descrizione, lingua e
  percorso corrente, e da questi costruisce testata, metadati e piè di pagina.
- **Sezione della home**: un blocco identificato da un'àncora, con un titolo, un occhiello e
  un corpo fornito da una feature successiva.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: La home raggiunge almeno 95 su 100 nelle categorie Prestazioni, Accessibilità e
  Best Practices di Lighthouse in modalità mobile, con la configurazione predefinita.
- **SC-002**: Il primo viewport della home trasferisce meno di 250 KB e il JavaScript
  complessivo del sito resta sotto i 40 KB compressi.
- **SC-003**: LCP sotto 2,0 s e CLS sotto 0,05 su rete 4G simulata, misurati tre volte.
- **SC-004**: Tutte le sezioni della home sono raggiungibili con la sola tastiera in meno di
  quindici pressioni di Tab dalla cima della pagina.
- **SC-005**: Con JavaScript disattivato la home resta leggibile e navigabile per intero:
  nessuna sezione risulta vuota, nessun collegamento inerte.

## Assumptions

- Il prototipo `material/calamurn-sito-ombra.html` è la fonte di riferimento per colori,
  tipografia, tono dei testi e ordine delle sezioni; i suoi difetti dichiarati (navigazione
  nascosta sotto i 960 px, fotografie in base64, contenuti solo al passaggio del puntatore)
  non vanno riprodotti.
- Il sito è una singola pagina lunga in italiano più le pagine di servizio; l'articolazione
  in più pagine è materia della feature 010.
- I caratteri Space Grotesk, IBM Plex Sans e IBM Plex Mono restano quelli del prototipo.
- Node 20 e npm sono disponibili sulla macchina di sviluppo.
- Il nome pubblico è «Calamùrn», con accento grave, e la denominazione dell'immobile è
  «Palazzo Di Natale».
