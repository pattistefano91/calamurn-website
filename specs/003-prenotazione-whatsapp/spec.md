# Feature Specification: Prenotazione diretta via WhatsApp

**Feature Branch**: `003-prenotazione-whatsapp`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "La barra di ricerca con arrivo, partenza, ospiti e camera non
interroga nessun sistema: compone un messaggio WhatsApp con le date già scritte e lo apre.
Chi non usa WhatsApp trova la stessa richiesta come e-mail precompilata. Nessuna commissione,
nessun pagamento online, risposta di una persona vera."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Chiedere disponibilità senza ricopiare nulla (Priority: P1)

Il visitatore sceglie le date, il numero di ospiti ed eventualmente la camera, preme il
pulsante e si ritrova WhatsApp aperto con il messaggio già scritto. Deve solo premere invio.

**Why this priority**: è la funzione del sito secondo il Principio II della costituzione.
Tutto il resto serve a portare qui.

**Independent Test**: si compilano le date su un telefono, si preme il pulsante e si verifica
che WhatsApp si apra sul numero giusto con arrivo, partenza, ospiti e camera nel testo.

**Acceptance Scenarios**:

1. **Given** arrivo 12/06 e partenza 15/06, 2 ospiti, camera Deluxe, **When** premo «Prenota
   la tua camera», **Then** si apre WhatsApp con un messaggio che contiene quelle quattro
   informazioni in italiano, leggibili da una persona.
2. **Given** nessuna data scelta, **When** premo il pulsante, **Then** il messaggio si apre
   comunque, con le date indicate come da definire, senza bloccare l'invio.
3. **Given** un computer fisso senza WhatsApp installato, **When** premo il pulsante,
   **Then** si apre WhatsApp Web nella stessa condizione.

---

### User Story 2 - Chi non usa WhatsApp ha la stessa strada (Priority: P1)

Accanto alla barra c'è un collegamento «scrivici una mail» che apre il programma di posta con
oggetto e corpo già compilati con gli stessi dati.

**Why this priority**: stessa priorità della prima perché senza ripiego una parte degli
ospiti — spesso quelli stranieri e meno giovani — resta senza modo di prenotare.

**Independent Test**: si compilano le date, si apre il collegamento e si verifica che la
bozza di posta contenga gli stessi dati del messaggio WhatsApp.

**Acceptance Scenarios**:

1. **Given** le date compilate, **When** apro il ripiego via e-mail, **Then** oggetto e corpo
   contengono arrivo, partenza, ospiti e camera.
2. **Given** un indirizzo e-mail non ancora attivo, **When** costruisco la pagina, **Then**
   la costruzione fallisce con un messaggio esplicito invece di pubblicare un `mailto:` rotto.

---

### User Story 3 - Prenotare una camera precisa da qualunque punto della pagina (Priority: P2)

Dalla scheda di una camera, dal disegno del palazzo o dal riquadro della suite, il visitatore
preme «Prenota» e ritrova la barra con quella camera già scelta.

**Why this priority**: riduce l'attrito e dice alla casa quale camera interessa davvero, ma
la richiesta generica funziona già.

**Independent Test**: si preme «Prenota» dalla scheda Superior e si verifica che la barra
mostri Superior e che il messaggio la riporti.

**Acceptance Scenarios**:

1. **Given** la scheda della Superior, **When** premo «Prenota», **Then** la pagina porta
   alla barra, il campo camera indica Superior e il fuoco entra nel primo campo data.
2. **Given** una camera scelta dalla barra, **When** cambio idea e scelgo «Tutte», **Then**
   il messaggio riporta «indifferente».

---

### User Story 4 - Sapere cosa succede dopo aver premuto (Priority: P2)

Sotto la barra il visitatore legge che il pulsante apre WhatsApp, che risponde una persona in
un tempo dichiarato e in quali orari, che non ci sono commissioni né pagamento online.

**Why this priority**: dichiarare l'attesa evita l'abbandono di chi teme di finire in un
modulo o su una pagina di pagamento.

**Independent Test**: si legge la nota sotto la barra e si verifica che riporti canale, tempi
di risposta, orari e assenza di commissioni.

**Acceptance Scenarios**:

1. **Given** la barra di prenotazione, **When** la guardo, **Then** sotto leggo il canale, il
   tempo di risposta atteso, gli orari e l'assenza di commissioni e di pagamento online.

### Edge Cases

- Partenza precedente o uguale all'arrivo: va segnalato prima dell'invio, con un messaggio in
  italiano, senza impedire l'uso della pagina.
- Date nel passato: il campo arrivo non accetta date precedenti a oggi.
- Soggiorno oltre i 30 giorni: ammesso, ma il messaggio lo dichiara perché la casa possa
  valutare.
- Il visitatore preme il pulsante due volte: non si aprono due schede.
- La camera scelta non esiste più nel contenuto del sito: la barra torna a «Tutte» invece di
  produrre un messaggio con un nome sbagliato.
- Il numero di ospiti supera la capienza della camera scelta (per esempio 3 ospiti in
  Superior): la pagina lo dice al momento della scelta, non dopo l'invio.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La barra DEVE contenere quattro campi — arrivo, partenza, ospiti, camera — e un
  pulsante di invio, utilizzabili con la sola tastiera e correttamente etichettati.
- **FR-002**: Il pulsante DEVE aprire un collegamento `wa.me` verso il numero della casa, con
  il testo del messaggio codificato, in una nuova scheda.
- **FR-003**: Il messaggio DEVE essere scritto in italiano, su righe distinte, e contenere
  arrivo, partenza, numero di ospiti e camera richiesta.
- **FR-004**: Quando un campo data è vuoto il messaggio DEVE riportare un segnaposto
  esplicito invece di una data inventata.
- **FR-005**: DEVE esistere un ripiego `mailto:` con oggetto e corpo equivalenti.
- **FR-006**: I dati di contatto — numero WhatsApp, indirizzo e-mail, tempo di risposta
  dichiarato, orari — DEVONO stare in un unico file di configurazione, non nel markup.
- **FR-007**: La costruzione DEVE fallire se il numero WhatsApp o l'indirizzo e-mail sono
  ancora dei segnaposto. *(Oggi lo sono entrambi: [NEEDS CLARIFICATION] numero WhatsApp reale
  della casa; nel prototipo è `39XXXXXXXXXX`. [NEEDS CLARIFICATION] indirizzo e-mail: è
  attivo `ciao@calamurn.it`?)*
- **FR-008**: Il campo arrivo NON DEVE accettare date precedenti al giorno corrente; il campo
  partenza NON DEVE accettare date precedenti o uguali all'arrivo.
- **FR-009**: Ogni pulsante «Prenota» sparso nella pagina DEVE portare alla barra, impostare
  la camera corrispondente e spostare il fuoco della tastiera nella barra.
- **FR-010**: Il numero di ospiti selezionabile DEVE fermarsi alla capienza massima della
  casa e, scelta una camera, alla capienza di quella camera.
- **FR-011**: Senza JavaScript la barra DEVE degradare a un collegamento WhatsApp e a un
  `mailto:` con un messaggio generico ma valido: la richiesta resta sempre possibile.
- **FR-012**: La nota sotto la barra DEVE dichiarare canale, tempo di risposta, orari,
  assenza di commissioni e di pagamento online.
- **FR-013**: Il sito NON DEVE inviare i dati inseriti a nessun server proprio o di terze
  parti: la composizione del messaggio avviene interamente nel browser.
- **FR-014**: Nelle lingue diverse dall'italiano il messaggio DEVE essere scritto nella
  lingua del visitatore, ma restare comprensibile a chi risponde. *(Vedi feature 009.)*

### Key Entities

- **Richiesta di disponibilità**: arrivo, partenza, ospiti, camera. Non viene salvata da
  nessuna parte: esiste solo nel messaggio che l'ospite invia.
- **Configurazione dei contatti**: numero WhatsApp, e-mail, tempo di risposta, orari,
  eventuale numero di telefono.
- **Camera prenotabile**: nome pubblico e capienza; il collegamento con la feature 004.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Dall'apertura della home alla schermata WhatsApp precompilata servono al più
  quattro azioni dell'ospite (due date, ospiti, invio).
- **SC-002**: Il messaggio generato è leggibile da chi risponde senza bisogno di
  interpretarlo: contiene le quattro informazioni in chiaro, in italiano.
- **SC-003**: Il JavaScript aggiunto da questa feature resta sotto i 4 KB compressi.
- **SC-004**: Nessuna richiesta di rete parte dal browser mentre l'ospite compila la barra.
- **SC-005**: Con JavaScript disattivato è ancora possibile arrivare a WhatsApp e alla posta.

## Assumptions

- La casa risponde a mano: nessuna disponibilità in tempo reale, nessun calendario condiviso,
  nessun pagamento sul sito. È una scelta dichiarata, non una mancanza.
- L'integrazione con un motore di prenotazione resta fuori da questa feature e, se mai
  arriverà, sarà una spec a sé.
- I portali continuano a esistere in parallelo: il sito non promette la disponibilità, chiede
  una conversazione.
- Il tempo di risposta dichiarato nel prototipo è «entro un'ora, dalle 9 alle 22» ed è
  contrassegnato come da confermare.
