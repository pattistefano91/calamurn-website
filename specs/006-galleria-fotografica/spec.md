# Feature Specification: Galleria fotografica

**Feature Branch**: `006-galleria-fotografica`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Una sezione dove confluiscono tutte le fotografie della casa,
filtrabili per ambiente, con ingrandimento a schermo intero e didascalia. È la sezione che
l'ospite guarda per ultima prima di scrivere, e quella che manda al compagno di viaggio."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Guardare tutte le fotografie della casa (Priority: P1)

Il visitatore arriva in fondo alla home e trova una griglia con tutte le fotografie: il
palazzo, le quattro camere, gli spazi comuni. Le scorre in fila, senza dover entrare e
uscire dalle singole camere.

**Why this priority**: è il modo in cui la gente guarda davvero una casa prima di prenotarla.
Senza griglia complessiva le fotografie restano sparse e nessuno le vede tutte.

**Independent Test**: si apre la sezione e si conta che tutte le fotografie del manifesto
siano presenti, ognuna con la propria didascalia.

**Acceptance Scenarios**:

1. **Given** la sezione galleria, **When** la apro, **Then** vedo una griglia con tutte le
   fotografie pubblicate, in un ordine dichiarato e stabile.
2. **Given** la griglia, **When** scorro, **Then** le fotografie fuori schermo vengono
   caricate solo quando servono e il layout non salta mai.

---

### User Story 2 - Vedere solo l'ambiente che interessa (Priority: P2)

Il visitatore ha già scelto la Superior e vuole vedere solo quella. Preme il filtro e la
griglia si riduce alle sue fotografie.

**Why this priority**: fa risparmiare tempo a chi ha già deciso, ma la griglia completa
funziona anche senza filtri.

**Independent Test**: si preme ogni filtro e si verifica che la griglia mostri solo le
fotografie di quell'ambiente e che il filtro attivo sia riconoscibile.

**Acceptance Scenarios**:

1. **Given** i filtri, **When** scelgo «Suite», **Then** restano solo le fotografie della
   suite e il filtro attivo è dichiarato anche a un lettore di schermo.
2. **Given** un filtro attivo, **When** apro l'ingrandimento, **Then** scorrendo resto dentro
   il filtro scelto.
3. **Given** un filtro attivo, **When** ricarico la pagina con lo stesso indirizzo, **Then**
   ritrovo lo stesso filtro.

---

### User Story 3 - Ingrandire una fotografia e passarle in rassegna (Priority: P2)

Il visitatore tocca una fotografia, la vede a schermo intero con la didascalia e la posizione
(«7 di 45»), e passa alla successiva con le frecce o con il dito.

**Why this priority**: è il gesto naturale su una griglia di immagini; senza, la griglia
risulta rotta.

**Independent Test**: si apre l'ingrandimento, si scorre avanti e indietro con la tastiera e
si chiude con Esc, verificando che il fuoco torni alla fotografia di partenza.

**Acceptance Scenarios**:

1. **Given** l'ingrandimento aperto, **When** premo la freccia destra, **Then** passa alla
   fotografia successiva del gruppo corrente e la didascalia cambia.
2. **Given** l'ingrandimento aperto, **When** premo Esc, **Then** si chiude e il fuoco torna
   alla fotografia da cui ero partito.
3. **Given** l'ingrandimento aperto, **When** uso la tastiera, **Then** il fuoco resta
   dentro l'ingrandimento finché non lo chiudo.
4. **Given** l'ingrandimento aperto su un telefono, **When** trascino orizzontalmente,
   **Then** cambio fotografia.

### Edge Cases

- Un filtro senza fotografie: si dichiara che non ce ne sono, il filtro non sparisce.
- Ingrandimento sull'ultima fotografia e freccia avanti: torna alla prima, e la posizione
  dichiarata lo riflette.
- Fotografia molto verticale su schermo basso: entra per intero, senza tagli e senza uscire
  dallo schermo.
- Il visitatore apre l'ingrandimento e ruota il telefono: l'immagine si riadatta senza
  chiudersi.
- La stessa fotografia appartiene a due ambienti: compare una sola volta nella vista
  completa.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La galleria DEVE raccogliere tutte le fotografie pubblicate, provenienti dal
  manifesto della feature 002, senza che nessuna sia dichiarata due volte.
- **FR-002**: DEVONO esistere filtri per ambiente — tutte, il palazzo, Deluxe, Standard,
  Superior, Suite, spazi comuni — costruiti dal contenuto e non scritti a mano.
- **FR-003**: Il filtro attivo DEVE essere riconoscibile visivamente e dichiarato ai lettori
  di schermo.
- **FR-004**: Il filtro attivo DEVE riflettersi nell'indirizzo della pagina, così che il
  collegamento sia condivisibile e la pagina ricaricabile nello stesso stato.
- **FR-005**: Ogni fotografia della griglia DEVE avere un testo alternativo e mostrare la
  didascalia con l'ambiente di appartenenza.
- **FR-006**: La didascalia NON DEVE essere visibile solo al passaggio del puntatore: su
  tocco e con la tastiera DEVE restare raggiungibile.
- **FR-007**: L'ingrandimento DEVE mostrare immagine, didascalia, ambiente e posizione nella
  serie corrente.
- **FR-008**: L'ingrandimento DEVE essere una finestra modale corretta: fuoco trattenuto
  all'interno, chiusura con Esc, ritorno del fuoco all'elemento di partenza, resto della
  pagina inerte per i lettori di schermo.
- **FR-009**: L'ingrandimento DEVE essere navigabile con frecce, con i pulsanti visibili e
  con il trascinamento orizzontale su schermo tattile.
- **FR-010**: Le fotografie della griglia DEVONO essere caricate in differita, con lo spazio
  già riservato dalle proporzioni.
- **FR-011**: Nell'ingrandimento DEVE essere servita una variante adatta allo schermo, mai
  l'originale a 2400 px su un telefono.
- **FR-012**: Senza JavaScript la griglia DEVE restare visibile e le fotografie
  raggiungibili; filtri e ingrandimento sono potenziamenti.
- **FR-013**: La sezione DEVE dichiarare gli ambienti ancora non fotografati, invece di
  fingere che la casa sia tutta lì. *(Il prototipo dichiara mancanti: interni della suite già
  parzialmente coperti, cortile, scala, androne.)*

### Key Entities

- **Voce di galleria**: una fotografia con identificativo, ambiente, didascalia, proporzioni
  e posizione nell'ordine.
- **Gruppo**: l'insieme delle fotografie di un ambiente; è anche un filtro.
- **Serie corrente**: le fotografie effettivamente scorribili nell'ingrandimento, cioè quelle
  del filtro attivo.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: La galleria completa non trasferisce più di 400 KB prima che il visitatore
  scorra, indipendentemente dal numero di fotografie pubblicate.
- **SC-002**: L'ingrandimento è interamente utilizzabile con la sola tastiera: apertura,
  scorrimento, chiusura, ritorno del fuoco.
- **SC-003**: Il CLS della sezione galleria è zero.
- **SC-004**: Ogni fotografia ha una didascalia distinta; nessuna didascalia è ripetuta.
- **SC-005**: Il JavaScript di filtri e ingrandimento resta sotto gli 8 KB compressi.

## Assumptions

- Le fotografie e il loro ordine provengono dal manifesto: la galleria non decide cosa
  pubblicare, lo legge.
- La galleria è una sezione della home, non una pagina separata; se diventerà una pagina sarà
  materia della feature 010.
- Non serve un ingrandimento con zoom: bastano schermo intero, didascalia e scorrimento.
- Le didascalie sono quelle scritte per il prototipo, in italiano; le altre lingue seguono la
  feature 009.
