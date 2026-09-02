# Feature Specification: Le camere e le tariffe

**Feature Branch**: `004-camere-e-tariffe`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Quattro camere — Suite in attico con terrazzo, Deluxe Queen,
Standard Queen, Superior Queen — più due spazi che camere non sono: il pianerottolo del
secondo piano e l'androne. Ognuna con metratura reale, affaccio, dotazioni, fotografie e
tariffa. La Standard ha il bagno sul pianerottolo e va detto."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Capire la differenza fra le quattro camere (Priority: P1)

Il visitatore scorre quattro schede e in mezzo minuto sa quale gli serve: quanto è grande,
dove guarda, quante persone ci stanno, quanto costa, e che cosa la distingue dalle altre.

**Why this priority**: è la decisione che il sito deve far prendere. Senza schede confrontabili
il visitatore torna sul portale, dove il confronto è già fatto per lui.

**Independent Test**: si guarda la sezione camere e si verifica che per ognuna siano presenti
metratura, affaccio, capienza, tariffa di partenza, una fotografia e la frase che la
distingue.

**Acceptance Scenarios**:

1. **Given** la sezione camere, **When** la guardo, **Then** vedo quattro schede con
   fotografia, nome, metratura, capienza, affaccio, descrizione e tariffa di partenza.
2. **Given** la scheda Standard, **When** la leggo, **Then** il bagno sul pianerottolo è
   dichiarato nella scheda stessa, non solo nelle domande frequenti.
3. **Given** uno schermo stretto, **When** scorro le schede, **Then** restano leggibili una
   sotto l'altra senza scorrimento orizzontale.

---

### User Story 2 - Vedere davvero una camera prima di prenotarla (Priority: P1)

Il visitatore apre la camera che gli interessa e ne guarda sei fotografie con la didascalia
che dice cosa sta guardando: il balcone all'ora blu, il bagno, la pietra retroilluminata.

**Why this priority**: è la fotografia a convincere, e una fotografia senza didascalia lascia
il dubbio su cosa appartenga davvero alla camera.

**Independent Test**: si apre una camera, si passano le fotografie con la tastiera e si
verifica che la didascalia cambi insieme all'immagine.

**Acceptance Scenarios**:

1. **Given** la galleria di una camera, **When** scelgo la terza miniatura, **Then**
   l'immagine grande e la didascalia cambiano insieme.
2. **Given** la galleria, **When** uso solo la tastiera, **Then** raggiungo ogni miniatura e
   il fuoco è visibile.
3. **Given** `prefers-reduced-motion` attivo, **When** cambio immagine, **Then** il cambio è
   immediato, senza dissolvenza.

---

### User Story 3 - Conoscere la suite prima che sia una sorpresa (Priority: P2)

La suite occupa l'ultimo piano e ha un terrazzo che non divide con nessuno. Ha una sezione
propria, più ampia della scheda, perché è il pezzo forte della casa.

**Why this priority**: è la camera con la tariffa più alta e la storia migliore, ma la casa
funziona anche mostrandola come le altre tre.

**Independent Test**: si apre la sezione suite e si verifica che il terrazzo a uso esclusivo
sia dichiarato, con le fotografie del terrazzo e un pulsante di prenotazione dedicato.

**Acceptance Scenarios**:

1. **Given** la sezione suite, **When** la leggo, **Then** è detto che il terrazzo è a uso
   esclusivo e che sopra non c'è nessun altro.
2. **Given** la sezione suite, **When** premo il pulsante, **Then** la barra si apre con la
   suite già scelta.

---

### User Story 4 - Riconoscere gli spazi che non sono camere (Priority: P3)

Il pianerottolo del secondo piano e l'androne al 58 hanno una loro pagina di racconto: non si
prenotano, ma spiegano com'è abitare la casa.

**Why this priority**: aggiunge carattere e giustifica la tariffa della Standard, ma non
partecipa alla decisione principale.

**Independent Test**: si apre lo spazio comune e si verifica che non abbia tariffa né pulsante
di prenotazione, ma abbia fotografie e descrizione.

**Acceptance Scenarios**:

1. **Given** la scheda del pianerottolo, **When** la guardo, **Then** al posto della tariffa
   leggo che è uno spazio della casa, e non c'è alcun pulsante di prenotazione.

### Edge Cases

- Una camera senza tariffa confermata: mostra un segnaposto dichiarato, mai un numero
  inventato, e resta prenotabile.
- Una camera temporaneamente non disponibile: la scheda lo dice e il pulsante diventa una
  richiesta di essere avvisati.
- Una camera con meno di sei fotografie: la galleria si adatta senza riquadri vuoti.
- La metratura non è nota (oggi è il caso della suite): il campo mostra un segnaposto
  visibile, non viene omesso in silenzio.
- Tariffe diverse per stagione: la scheda mostra «da», con il periodo cui si riferisce.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le camere DEVONO essere descritte in una content collection con schema
  validato, un file per camera, non nel markup delle pagine.
- **FR-002**: Ogni camera DEVE dichiarare: identificativo, nome pubblico, occhiello
  (piano e affaccio), descrizione lunga, metratura, capienza massima, tipo di letto, elenco
  di dotazioni, elenco ordinato di fotografie con didascalia, tariffa minima, prenotabilità.
- **FR-003**: Le quattro camere DEVONO essere: Suite (attico, terrazzo a uso esclusivo),
  Deluxe Queen (secondo piano, balcone su via Dione, 24 m², fino a 3 ospiti), Standard Queen
  (secondo piano, balcone su via Dione, 19 m², 2 ospiti, bagno privato sul pianerottolo),
  Superior Queen (secondo piano, affaccio sul cortile interno, 17 m², 2 ospiti, bagno interno).
- **FR-004**: DEVONO esistere due spazi non prenotabili: il pianerottolo del secondo piano e
  l'androne di via Dione 58, con la stessa struttura ma senza tariffa né prenotazione.
- **FR-005**: La scheda della Standard DEVE dichiarare in modo esplicito che il bagno è
  privato ma si trova sul pianerottolo, di fronte alla porta, e che la tariffa ne tiene conto.
- **FR-006**: Ogni camera DEVE mostrare la propria galleria con immagine grande, miniature e
  didascalia sincronizzata, utilizzabile con tastiera e con tocco.
- **FR-007**: Le tariffe DEVONO essere espresse come importo minimo con la formula «da X € /
  notte», con l'indicazione di ciò che è incluso.
- **FR-008**: Una camera senza tariffa confermata DEVE mostrare un segnaposto visibilmente
  incompleto invece di un numero.
- **FR-009**: Ogni camera DEVE avere un pulsante che porta alla barra di prenotazione con la
  camera già scelta.
- **FR-010**: La suite DEVE avere, oltre alla scheda, una sezione dedicata con le fotografie
  del terrazzo e il racconto dell'ultimo piano.
- **FR-011**: L'ordine di comparsa delle camere DEVE essere dichiarato nel contenuto, non
  dedotto dalla tariffa o dal nome del file.
- **FR-012**: I dati mancanti DEVONO essere elencabili con un comando, così che il
  proprietario sappia cosa manca. Oggi mancano: *[NEEDS CLARIFICATION] metratura della suite;
  [NEEDS CLARIFICATION] tariffe reali per stagione — quelle del prototipo (da 180/125/105/95 €)
  sono ricavate dalle schede pubbliche e vanno sostituite; [NEEDS CLARIFICATION] capienza
  massima della suite; [NEEDS CLARIFICATION] esiste un supplemento per il terzo letto in
  Deluxe?*
- **FR-013**: Le dotazioni DEVONO provenire da un elenco chiuso e riusabile, perché le stesse
  parole indichino sempre la stessa cosa nelle quattro lingue.

### Key Entities

- **Camera**: l'unità prenotabile. Identificativo, nome, piano, affaccio, metratura,
  capienza, letto, dotazioni, fotografie, tariffa minima, prenotabilità, ordine.
- **Spazio della casa**: come la camera ma non prenotabile; pianerottolo e androne.
- **Dotazione**: una voce dell'elenco chiuso (balcone, bagno interno, bagno sul pianerottolo,
  vista cortile, terrazzo privato, cabina armadio, doccia a filo pavimento, vista mare).
- **Tariffa**: importo minimo, valuta, ciò che include, periodo di validità.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visitatore che non conosce la casa sa dire, dopo trenta secondi sulla
  sezione camere, quale camera ha il bagno fuori e quale ha il terrazzo.
- **SC-002**: Ogni camera pubblicata ha almeno cinque fotografie con didascalia diversa.
- **SC-003**: Nessuna tariffa e nessuna metratura compare nel sito senza essere confermata o
  visibilmente segnata come mancante.
- **SC-004**: Aggiungere una quinta camera richiede di aggiungere un solo file di contenuto,
  senza toccare i componenti.
- **SC-005**: La galleria di camera è interamente utilizzabile con la sola tastiera.

## Assumptions

- Le quattro camere e i due spazi comuni sono quelli del prototipo; non ce ne sono altri.
- Le fotografie e le didascalie provengono dal manifesto della feature 002.
- La colazione è inclusa nella tariffa; il luogo va confermato (vedi feature 008).
- Le tariffe non sono gestite da nessun sistema esterno: sono contenuto del sito e vanno
  aggiornate a mano quando cambiano.
- Il sito non mostra disponibilità: le schede raccontano, la conversazione conferma.
