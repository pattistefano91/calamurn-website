# Feature Specification: Il disegno interattivo del palazzo

**Feature Branch**: `005-disegno-interattivo-palazzo`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Il pezzo che nessun portale può copiare: il prospetto e la
sezione del palazzo disegnati a matita, che si tracciano da soli quando entrano nello
schermo. Toccando un ambiente si apre la scheda della camera corrispondente. Serve a far
capire dove sta ogni camera dentro la casa, cosa che dieci fotografie non riescono a dire."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Capire dove sta la camera dentro il palazzo (Priority: P1)

Il visitatore guarda il prospetto su via Dione, tocca la finestra della Deluxe e vede
comparire accanto la scheda di quella camera. Capisce che sta al secondo piano,
all'estremità, con il balcone sulla strada.

**Why this priority**: è la ragione per cui esiste questa sezione. Nessuna fotografia
spiega la posizione: il disegno sì.

**Independent Test**: si tocca ognuno dei punti caldi del prospetto e si verifica che la
scheda accanto cambi con la camera giusta.

**Acceptance Scenarios**:

1. **Given** il prospetto, **When** tocco l'area della Deluxe, **Then** la scheda accanto
   mostra nome, occhiello, descrizione, dotazioni, tariffa e fotografie della Deluxe, e
   l'area toccata resta evidenziata.
2. **Given** il prospetto su un computer, **When** passo il puntatore su un ambiente,
   **Then** la scheda lo anticipa; **When** clicco, **Then** la selezione si blocca e la
   pagina lo dichiara.
3. **Given** una selezione bloccata, **When** clicco di nuovo sullo stesso ambiente,
   **Then** si sblocca.

---

### User Story 2 - Vedere la casa in sezione, non solo di facciata (Priority: P2)

Il visitatore passa alla vista in sezione e capisce quello che il prospetto non può mostrare:
la Superior guarda il cortile interno, la suite sta in attico con il terrazzo, il
pianerottolo è uno spazio vero fra le camere, la scala sale per quattro livelli.

**Why this priority**: aggiunge le informazioni che dal prospetto sono invisibili — cortile,
attico, scala — ma il prospetto da solo già funziona.

**Independent Test**: si passa alla sezione, si toccano i suoi punti caldi e si verifica che
compaiano anche gli ambienti non visibili dal prospetto.

**Acceptance Scenarios**:

1. **Given** la vista in sezione, **When** tocco l'area della Superior, **Then** la scheda
   mostra la Superior e il disegno indica che affaccia sul cortile.
2. **Given** la vista in sezione, **When** tocco il pianerottolo, **Then** compare lo spazio
   comune, senza tariffa e senza pulsante di prenotazione.
3. **Given** il passaggio da una vista all'altra, **When** avviene, **Then** la camera
   selezionata resta la stessa se esiste anche nell'altra vista.

---

### User Story 3 - Il disegno si costruisce sotto gli occhi (Priority: P3)

Quando la sezione entra nello schermo il disegno si traccia, linea dopo linea, come se
qualcuno lo stesse disegnando. Un pulsante permette di rivederlo.

**Why this priority**: è ciò che rende la sezione memorabile e condivisibile, ma è
ornamento: il disegno fermo comunica le stesse informazioni.

**Independent Test**: si scorre fino alla sezione e si osserva il tracciamento; si preme
«ridisegna» e riparte; si attiva `prefers-reduced-motion` e il disegno compare già completo.

**Acceptance Scenarios**:

1. **Given** la sezione fuori schermo, **When** entra per almeno un terzo, **Then** il
   tracciamento parte una sola volta.
2. **Given** `prefers-reduced-motion` attivo, **When** la sezione entra, **Then** il disegno
   è già completo e nessun elemento si anima.
3. **Given** il disegno tracciato, **When** premo «ridisegna», **Then** riparte da capo.

### Edge Cases

- Il visitatore tocca lo spazio fra due ambienti: non cambia nulla, la selezione precedente
  resta.
- Schermo stretto: il disegno e la scheda si dispongono uno sopra l'altra e i punti caldi
  restano grandi abbastanza da essere toccati con un dito (almeno 44×44 px effettivi).
- JavaScript non disponibile: si vede il prospetto completo, con le etichette degli ambienti
  già scritte sul disegno, e le camere restano raggiungibili dalla sezione camere.
- I filtri SVG che danno il tratto irregolare non sono supportati: il disegno resta pulito e
  leggibile, senza errori.
- Un lettore di schermo percorre la sezione: riceve una descrizione testuale della
  distribuzione del palazzo, non un elenco di coordinate.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: DEVONO esistere due viste dello stesso palazzo — prospetto su via Dione e
  sezione trasversale — commutabili con due schede.
- **FR-002**: I disegni DEVONO essere SVG scritti nel documento, senza librerie esterne.
- **FR-003**: Ogni vista DEVE avere aree sensibili corrispondenti agli ambienti: nel
  prospetto suite, superior, standard, deluxe e androne; nella sezione anche il pianerottolo.
- **FR-004**: Ogni area sensibile DEVE essere raggiungibile con la tastiera, avere un nome
  accessibile ed essere attivabile con Invio o barra spaziatrice.
- **FR-005**: Selezionare un ambiente DEVE aggiornare la scheda accanto con i dati della
  camera provenienti dalla content collection della feature 004, senza duplicarli.
- **FR-006**: Sui dispositivi con puntatore l'anteprima al passaggio DEVE essere possibile,
  ma ogni contenuto DEVE restare raggiungibile anche con tocco e tastiera.
- **FR-007**: Il blocco della selezione DEVE essere dichiarato in pagina con un testo che
  cambia quando è attivo.
- **FR-008**: Il tracciamento DEVE partire una sola volta, quando la sezione entra per almeno
  un terzo nello schermo, e DEVE essere ripetibile con un comando esplicito.
- **FR-009**: Con `prefers-reduced-motion` attivo il disegno DEVE comparire già completo.
- **FR-010**: Ogni vista DEVE avere una descrizione testuale alternativa che spiega la
  distribuzione degli ambienti a chi non vede il disegno.
- **FR-011**: Il disegno DEVE riportare le indicazioni che il prototipo già dichiara: l'asse
  del portone che divide il palazzo, la nota che al primo piano stanno altre proprietà, la
  suite in attico non visibile da via Dione, la Superior sul cortile, i civici 56, 58 e 60.
- **FR-012**: I disegni NON DEVONO essere spacciati per rilievi: una nota DEVE dichiarare che
  sono ricalcati dalle fotografie. *[NEEDS CLARIFICATION] esiste una planimetria reale? Il
  prototipo la segnala come mancante e le proporzioni della sezione sono ipotetiche.*
- **FR-013**: Il peso complessivo dei due SVG e del codice che li governa NON DEVE superare
  30 KB compressi.

### Key Entities

- **Vista**: prospetto o sezione. Ha un disegno, un elenco di aree sensibili e una
  descrizione testuale.
- **Area sensibile**: la regione del disegno che corrisponde a un ambiente; conosce solo
  l'identificativo della camera, non i suoi contenuti.
- **Selezione**: l'ambiente attualmente mostrato nella scheda, e se sia bloccato o transitorio.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Ogni ambiente disegnato è raggiungibile con la tastiera in non più di sei
  pressioni di Tab dall'inizio della sezione.
- **SC-002**: Nessuna informazione presente nel disegno è disponibile solo al passaggio del
  puntatore.
- **SC-003**: Il tempo dal tocco all'aggiornamento della scheda resta sotto i 100 ms.
- **SC-004**: I due disegni e il loro codice restano sotto i 30 KB compressi.
- **SC-005**: Con JavaScript disattivato il prospetto è comunque visibile e le etichette
  degli ambienti restano leggibili sul disegno.

## Assumptions

- I disegni del prototipo sono la base: vanno ripuliti e resi accessibili, non rifatti.
- I dati delle camere non vengono duplicati qui: la scheda legge la stessa fonte della
  sezione camere.
- Il disegno è illustrativo. Se arriverà una planimetria reale sarà una revisione di questa
  feature, non una feature nuova.
- La sezione trasversale mostra quattro livelli: piano terra con androne, primo piano di
  altre proprietà, secondo piano con le camere e il cortile, attico con suite e terrazzo.
