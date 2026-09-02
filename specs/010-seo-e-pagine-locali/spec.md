# Feature Specification: Reperibilità e pagine locali

**Feature Branch**: `010-seo-e-pagine-locali`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Il sito deve essere trovato da chi cerca dove dormire a Ortigia
senza sapere che esiste il Calamùrn: dati strutturati corretti, metadati, e le pagine di
approfondimento già elencate nel piè di pagina del prototipo — dormire nel centro storico,
vicino al Duomo, dove parcheggiare, cosa fare in due giorni, i palazzi gotico-catalani."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Essere trovati da chi cerca una casa a Ortigia (Priority: P1)

Qualcuno cerca «dormire a Ortigia centro storico». Fra i risultati compare il Calamùrn, con
il nome giusto, una descrizione che dice cos'è, e la fotografia del portone.

**Why this priority**: il traffico diretto è l'unico che non paga commissioni. Senza
reperibilità il sito serve solo a chi lo conosce già.

**Independent Test**: si controlla che ogni pagina abbia titolo, descrizione, indirizzo
canonico e immagine sociale, e che i dati strutturati siano validi.

**Acceptance Scenarios**:

1. **Given** una pagina qualsiasi, **When** ne leggo i metadati, **Then** ha un titolo unico,
   una descrizione scritta a mano, un indirizzo canonico e un'immagine sociale.
2. **Given** i dati strutturati della home, **When** li valido, **Then** descrivono una
   struttura ricettiva con nome, indirizzo, coordinate, fotografie e contatto, senza errori.
3. **Given** il sito costruito, **When** cerco la mappa del sito e il file per i robot,
   **Then** esistono, sono raggiungibili e contengono tutte le pagine di tutte le lingue.

---

### User Story 2 - Trovare risposta a una domanda pratica su Ortigia (Priority: P2)

Chi cerca «dove parcheggiare a Ortigia» arriva su una pagina del sito che risponde davvero, e
scopre da lì che esiste la casa.

**Why this priority**: porta visitatori che non stavano cercando la casa, ma nasce solo dopo
che il sito principale esiste.

**Independent Test**: si apre ogni pagina locale e si verifica che risponda alla domanda del
titolo prima di parlare della casa.

**Acceptance Scenarios**:

1. **Given** la pagina sul parcheggio, **When** la leggo, **Then** risponde alla domanda nei
   primi due paragrafi, prima di qualsiasi invito a prenotare.
2. **Given** una pagina locale, **When** la scorro fino in fondo, **Then** trovo un
   collegamento alle camere, non un banner che interrompe la lettura.

---

### User Story 3 - Condividere il sito e vederlo bene (Priority: P3)

Il visitatore manda il collegamento su WhatsApp a chi viaggia con lui: compare l'anteprima con
la fotografia del portone e il nome della casa.

**Why this priority**: le case si scelgono in due, e l'anteprima decide se il collegamento
viene aperto. Non blocca nulla.

**Independent Test**: si incolla il collegamento in un servizio di anteprima e si verifica
immagine, titolo e descrizione.

**Acceptance Scenarios**:

1. **Given** il collegamento alla home, **When** lo incollo in una chat, **Then** compare la
   fotografia del portone con nome e descrizione della casa.

### Edge Cases

- Una pagina locale non ha ancora contenuto: non viene pubblicata, e il collegamento nel piè
  di pagina non compare, invece di portare a una pagina vuota.
- Contenuto simile fra le pagine locali: ognuna deve rispondere a una domanda diversa,
  altrimenti si accorpano.
- Il sito è raggiungibile con e senza `www`: una sola forma è canonica.
- Un motore di ricerca indicizza le anteprime di Vercel: vanno escluse.
- Le pagine tradotte competono fra loro: le alternative linguistiche vanno dichiarate.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Ogni pagina DEVE avere titolo, descrizione, indirizzo canonico e immagine
  sociale dedicati, scritti a mano e non generati automaticamente dal contenuto.
- **FR-002**: La home DEVE esporre dati strutturati che descrivono la struttura ricettiva:
  nome, indirizzo completo, coordinate, telefono, fotografie, camere, servizi.
- **FR-003**: Le domande frequenti DEVONO esporre i dati strutturati corrispondenti.
- **FR-004**: Il sito DEVE generare una mappa del sito con tutte le pagine di tutte le lingue
  e un file per i robot che la dichiara.
- **FR-005**: Le distribuzioni di anteprima NON DEVONO essere indicizzabili; solo il dominio
  di produzione lo è.
- **FR-006**: DEVE esistere una sola forma canonica del dominio; le altre reindirizzano.
- **FR-007**: DEVONO esistere le pagine locali elencate nel piè di pagina del prototipo: B&B
  nel centro storico di Ortigia, dove dormire vicino al Duomo, dove parcheggiare a Ortigia,
  cosa fare a Siracusa in due giorni, i palazzi gotico-catalani di Ortigia.
- **FR-008**: Ogni pagina locale DEVE rispondere alla propria domanda prima di parlare della
  casa, e non DEVE essere pubblicata finché non ha contenuto proprio.
- **FR-009**: Le pagine locali DEVONO seguire le stesse regole di onestà del resto del sito:
  nessun dato non verificato, nessuna promessa sul conto di terzi.
- **FR-010**: DEVONO esistere le pagine di servizio: privacy, cookie, condizioni.
- **FR-011**: Il CIN `19089017C106672` DEVE comparire in ogni pagina, come richiesto dalla
  normativa italiana sulle locazioni turistiche.
- **FR-012**: Se verrà introdotta una misurazione del traffico DEVE essere senza cookie e
  senza dati personali. *[NEEDS CLARIFICATION] serve una statistica? Con quale strumento?*
- **FR-013**: Ogni fotografia usata come immagine sociale DEVE avere le proporzioni corrette
  per l'anteprima e un peso sotto i 300 KB.
- **FR-014**: I dati di contatto pubblicati nei dati strutturati DEVONO coincidere con quelli
  della configurazione della feature 003.

### Key Entities

- **Pagina**: indirizzo, titolo, descrizione, immagine sociale, lingua, alternative
  linguistiche, se sia indicizzabile.
- **Pagina locale**: una pagina che risponde a una domanda su Ortigia; ha una domanda, un
  contenuto proprio e un collegamento alle camere.
- **Scheda della struttura**: i dati che descrivono la casa ai motori di ricerca; unica fonte,
  riusata da tutte le pagine.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: I dati strutturati passano la validazione senza errori né avvisi.
- **SC-002**: Ogni pagina pubblicata ha titolo e descrizione unici: nessun duplicato nel sito.
- **SC-003**: La mappa del sito contiene tutte le pagine pubblicate in tutte e quattro le
  lingue e nessuna pagina non pubblicata.
- **SC-004**: L'anteprima del collegamento mostra la fotografia corretta su WhatsApp,
  Facebook e X.
- **SC-005**: Nessuna distribuzione di anteprima risulta indicizzabile.

## Assumptions

- Il dominio di produzione è da confermare: *[NEEDS CLARIFICATION] è `calamurn.it`? È già
  registrato e presso quale registrar?*
- Le coordinate della casa vanno prese dall'indirizzo reale di via Dione 58.
- Le pagine locali si scrivono una alla volta e si pubblicano quando sono pronte: meglio tre
  pagine buone che cinque vuote.
- Il sito non ha un blog: le pagine locali sono stabili, non un flusso di articoli.
- Nessuna raccolta di dati personali, quindi nessun banner di consenso: la pagina cookie
  dichiara che non ce ne sono di profilazione.
