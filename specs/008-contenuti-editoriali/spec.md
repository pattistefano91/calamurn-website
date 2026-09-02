# Feature Specification: Contenuti editoriali e onestà preventiva

**Feature Branch**: `008-contenuti-editoriali`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Le sezioni che raccontano e quelle che avvertono: la storia di
via Dione e del palazzo, i minuti a piedi dai luoghi, i gradini senza ascensore dichiarati in
home, il confronto onesto con i portali, e le domande vere che gli ospiti fanno prima di
arrivare — ZTL, parcheggio, scale, bagno della Standard, colazione, check-in."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sapere prima ciò che scoprirei con la valigia in mano (Priority: P1)

Il visitatore legge in home, senza cercarla, la frase sui gradini e sull'assenza di
ascensore. Se non gli va bene lo sa adesso, non davanti al portone.

**Why this priority**: è il Principio I della costituzione fatto pagina. Una prenotazione
persa qui vale meno di una recensione da tre stelle scritta dopo.

**Independent Test**: si apre la home e si verifica che il numero di gradini e l'assenza di
ascensore siano leggibili senza aprire nulla e senza scendere fino alle domande frequenti.

**Acceptance Scenarios**:

1. **Given** la home, **When** la scorro, **Then** trovo una sezione che dichiara il numero
   di gradini e l'assenza di ascensore, con la stessa evidenza delle sezioni che vendono.
2. **Given** il numero di gradini non ancora contato, **When** guardo la sezione, **Then**
   vedo un segnaposto visibilmente incompleto, non un numero inventato.
3. **Given** la camera Standard, **When** ne leggo la scheda, **Then** il bagno sul
   pianerottolo è dichiarato lì, non solo nelle domande.

---

### User Story 2 - Trovare risposta alle domande pratiche prima di scrivere (Priority: P1)

Il visitatore ha tre dubbi che decidono la prenotazione: posso arrivare in auto, dove
parcheggio, come funziona il check-in. Li trova risolti in una sezione di domande, senza
dover scrivere su WhatsApp.

**Why this priority**: sono le domande che la casa riceve ogni giorno; risolverle in pagina
libera tempo e toglie l'ultimo attrito prima della richiesta.

**Independent Test**: si aprono le domande frequenti e si verifica che ZTL, parcheggio,
scale, bagno della Standard, terrazzo, orari di check-in e colazione abbiano una risposta.

**Acceptance Scenarios**:

1. **Given** la sezione domande, **When** apro «Posso arrivare in auto fin sotto il
   portone?», **Then** leggo regole e orari della ZTL e cosa si può fare per i bagagli.
2. **Given** una domanda ancora senza risposta confermata, **When** la apro, **Then** vedo
   dichiarato che manca, invece di una risposta generica.
3. **Given** la sezione domande, **When** uso la tastiera, **Then** apro e chiudo ogni voce e
   il fuoco resta prevedibile.

---

### User Story 3 - Capire perché prenotare qui invece che sul portale (Priority: P2)

Il visitatore che arriva dopo aver guardato Booking trova una tabella che confronta apertamente
tariffa, colazione, check-out, chi risponde, conferma e cancellazione.

**Why this priority**: converte chi è già interessato ma esita; non serve a chi non ha ancora
deciso di venire.

**Independent Test**: si legge la tabella e si verifica che ogni riga confronti una condizione
reale, con la colonna del diretto distinta.

**Acceptance Scenarios**:

1. **Given** la tabella, **When** la leggo, **Then** ogni riga mette a confronto la stessa
   condizione nelle due colonne, e la colonna del diretto è visivamente distinta.
2. **Given** una condizione non ancora definita, **When** la leggo, **Then** è segnata come
   da definire invece di promettere qualcosa.

---

### User Story 4 - Sapere dove si sta dormendo (Priority: P3)

Il visitatore legge la storia di via Dione — il decumano greco, il terremoto del 1693, gli
sventramenti degli anni Trenta — e capisce che la facciata che ha visto in fotografia è una
sopravvissuta.

**Why this priority**: dà valore alla casa e produce ricordo, ma nessuno prenota solo per
questo.

**Independent Test**: si legge la sezione e si verifica che ogni affermazione storica sia
accompagnata dalla sua fonte o dichiarata come da verificare.

**Acceptance Scenarios**:

1. **Given** la sezione sul palazzo, **When** la leggo, **Then** le affermazioni verificabili
   citano la fonte, e quelle non verificate sono marcate come tali.

### Edge Cases

- Un dato dichiarato cambia (la tariffa, l'orario della ZTL, il bar della colazione): esiste
  un unico punto in cui aggiornarlo.
- La casa preferirebbe non dire una cosa scomoda: la costituzione non lo consente; il testo si
  può scrivere meglio, non togliere.
- Una domanda frequente resta senza risposta a lungo: risulta in un elenco delle cose mancanti.
- Un ospite straniero legge la sezione ZTL: le regole vanno spiegate senza dare per scontato
  come funziona una città italiana.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le domande frequenti DEVONO stare in una content collection, ognuna con
  domanda, risposta, categoria e stato di conferma.
- **FR-002**: DEVONO esistere almeno le domande del prototipo: accesso in auto e ZTL,
  parcheggio, numero di gradini e ascensore, bagno della Standard, uso esclusivo del
  terrazzo, orari di check-in e check-out, colazione.
- **FR-003**: Una risposta non confermata DEVE comparire come dichiaratamente mancante, mai
  come risposta generica.
- **FR-004**: Le domande DEVONO essere apribili e chiudibili con la tastiera, e restare
  leggibili anche senza JavaScript.
- **FR-005**: La home DEVE contenere una sezione dedicata ai gradini e all'assenza di
  ascensore, con la stessa evidenza grafica delle sezioni promozionali.
- **FR-006**: La sezione dei minuti a piedi DEVE mostrare le distanze dai luoghi principali e
  dichiarare se sono misurate o stimate.
- **FR-007**: La tabella di confronto con i portali DEVE avere righe dichiarate nel contenuto
  e distinguere la colonna della prenotazione diretta.
- **FR-008**: La tabella NON DEVE contenere affermazioni non verificabili sulle condizioni dei
  portali: solo confronti su ciò che la casa controlla.
- **FR-009**: La sezione storica DEVE tenere separati i fatti documentati dalle attribuzioni
  incerte, con una nota per le seconde.
- **FR-010**: DEVE esistere un elenco, generabile con un comando, di tutti i contenuti ancora
  da confermare, così che il proprietario sappia cosa manca.
- **FR-011**: Ogni dato di fatto ripetuto in più punti (orari di check-in, colazione,
  cancellazione) DEVE avere un'unica fonte nel contenuto.

### Dati mancanti da confermare

- **[NEEDS CLARIFICATION]** Numero esatto di gradini dal portone al secondo piano e
  all'attico.
- **[NEEDS CLARIFICATION]** Regole e orari della ZTL di Ortigia: si può entrare per scaricare
  i bagagli, con quale permesso, chi lo richiede.
- **[NEEDS CLARIFICATION]** Parcheggi consigliati (Talete, Molo Sant'Antonio, Marina): minuti
  a piedi, tariffa giornaliera indicativa, eventuale convenzione.
- **[NEEDS CLARIFICATION]** Colazione: si fa al bar in Piazza Archimede? Nome del posto,
  orari, cosa comprende il ticket, cosa ordinare.
- **[NEEDS CLARIFICATION]** Termini di cancellazione gratuita (giorni prima) e politica di
  caparra.
- **[NEEDS CLARIFICATION]** Francesco Di Natale è documentato come committente? E se sì, per
  l'impianto originario o per un intervento successivo? Dalla risposta dipende se si può
  scrivere «palazzo gotico-catalano del Quattrocento» o solo «palazzo storico».
- **[NEEDS CLARIFICATION]** Orari e giorni in cui la casa risponde davvero su WhatsApp.
- **[NEEDS CLARIFICATION]** Animali ammessi? Bambini? Culla disponibile?

### Key Entities

- **Domanda frequente**: domanda, risposta, categoria, stato di conferma, ordine.
- **Riga di confronto**: la condizione, il suo valore sul portale, il suo valore in diretto.
- **Affermazione storica**: il testo, la fonte, e se sia verificata.
- **Dato della casa**: un valore ripetuto in più punti — orari, colazione, cancellazione —
  con un'unica fonte e uno stato di conferma.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Nessun numero non confermato compare nel sito senza essere marcato come tale.
- **SC-002**: Le sette domande del prototipo hanno tutte una risposta o una dichiarazione
  esplicita di mancanza.
- **SC-003**: Il comando che elenca i contenuti da confermare restituisce lo stesso insieme
  dei `[NEEDS CLARIFICATION]` di questa spec.
- **SC-004**: Ogni dato ripetuto compare una sola volta nel contenuto: cambiarlo in un punto
  lo cambia ovunque.
- **SC-005**: Le domande frequenti sono leggibili per intero con JavaScript disattivato.

## Assumptions

- I testi del prototipo sono la base redazionale: tono, lunghezza e voce restano quelli.
- Le informazioni storiche su via Dione (decumano greco, plastico di Costa del 1773, catastale
  del 1916, sventramenti degli anni Trenta) provengono dal prototipo e vanno verificate prima
  della pubblicazione definitiva.
- Le condizioni commerciali (tariffe, cancellazione, colazione) le decide il proprietario: il
  sito le pubblica, non le inventa.
- La normativa italiana consente di offrire condizioni migliori sul canale diretto rispetto ai
  portali.
