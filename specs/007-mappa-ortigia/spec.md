# Feature Specification: La mappa di Ortigia

**Feature Branch**: `007-mappa-ortigia`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Una mappa disegnata dell'isola, con il portone al centro e i
luoghi attorno: non Google Maps, ma Ortigia come la conosce chi ci abita. Ogni punto ha i
minuti a piedi dal portone e una riga che dice quando andarci e cosa aspettarsi. È la pagina
che gli ospiti fotografano."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Capire quanto è vicino tutto (Priority: P1)

Il visitatore vede sulla mappa il portone e attorno i luoghi che conosce di nome — il Duomo,
il mercato, la Fonte Aretusa — ognuno con i minuti a piedi. Capisce in un colpo che non gli
serve l'auto.

**Why this priority**: la posizione è il primo argomento di vendita di una casa a Ortigia, e
i minuti a piedi sono la prima cosa che un ospite verifica.

**Independent Test**: si guarda la mappa e si verifica che il portone sia evidente e che
ogni luogo dichiari i minuti a piedi.

**Acceptance Scenarios**:

1. **Given** la mappa, **When** la guardo, **Then** il punto della casa è distinto dagli
   altri ed etichettato «Calamùrn».
2. **Given** l'elenco dei luoghi, **When** lo leggo, **Then** ogni voce ha un nome e i minuti
   a piedi dal portone.
3. **Given** uno schermo stretto, **When** apro la sezione, **Then** mappa ed elenco si
   dispongono uno sopra l'altro e restano entrambi utilizzabili.

---

### User Story 2 - Sapere quando andarci, non solo dove (Priority: P1)

Toccando un luogo il visitatore legge una riga che nessuna guida gli darebbe: il mercato
chiude verso l'una e mezza, al Duomo vacci presto o dopo cena, Cala Rossa va in ombra nel
pomeriggio.

**Why this priority**: è ciò che distingue la mappa da una qualunque cartina. Senza il
consiglio, i punti sono solo pallini.

**Independent Test**: si tocca ogni punto e si verifica che compaia una descrizione che
contiene un'indicazione pratica, non una definizione da enciclopedia.

**Acceptance Scenarios**:

1. **Given** la mappa, **When** tocco il punto del mercato, **Then** compaiono nome,
   posizione, minuti a piedi e la riga sull'orario di chiusura.
2. **Given** un punto selezionato, **When** guardo la mappa, **Then** quel punto è
   evidenziato e la voce corrispondente nell'elenco pure.
3. **Given** l'elenco, **When** scelgo una voce con la tastiera, **Then** la scheda di
   lettura si aggiorna e il cambiamento è annunciato ai lettori di schermo.

---

### User Story 3 - Trovare i posti dei padroni di casa (Priority: P2)

Oltre ai monumenti, la mappa porta i luoghi che solo chi abita lì conosce: la granita giusta
all'ora giusta, la trattoria dove mangiano loro, lo scoglio senza turisti.

**Why this priority**: è il valore vero della sezione, ma richiede contenuto che oggi non
esiste ancora.

**Independent Test**: si verifica che la mappa distingua per categoria i luoghi e che sia
possibile aggiungerne di nuovi con un solo file di contenuto.

**Acceptance Scenarios**:

1. **Given** un luogo nuovo aggiunto al contenuto con nome, coordinate, categoria, minuti e
   consiglio, **When** ricostruisco il sito, **Then** compare sulla mappa e nell'elenco senza
   toccare il codice.
2. **Given** i luoghi divisi per categoria, **When** guardo l'elenco, **Then** sono
   raggruppati e le categorie sono dichiarate.

### Edge Cases

- Un luogo senza minuti misurati: mostra un segnaposto dichiarato, non un numero plausibile.
- Due punti troppo vicini sulla mappa: le etichette non si sovrappongono in modo illeggibile.
- Il visitatore vuole le indicazioni stradali vere: esiste un collegamento verso una mappa
  esterna, aperto solo su richiesta esplicita, senza caricare nulla di terze parti prima.
- Un luogo chiude definitivamente: si toglie dal contenuto e sparisce da mappa ed elenco.
- Lettore di schermo: la mappa è decorativa rispetto all'elenco, che resta la fonte completa
  e ordinata delle informazioni.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La mappa DEVE essere un disegno SVG scritto nel documento, senza tessere
  cartografiche, senza chiavi di servizi esterni e senza richieste di rete a terze parti.
- **FR-002**: I luoghi DEVONO stare in una content collection con schema validato: nome,
  occhiello, categoria, coordinate sul disegno, minuti a piedi, consiglio.
- **FR-003**: Il punto della casa DEVE essere visivamente distinto e sempre presente.
- **FR-004**: Ogni luogo DEVE essere selezionabile sia dalla mappa sia dall'elenco, con
  tocco, puntatore e tastiera.
- **FR-005**: La selezione DEVE aggiornare una scheda di lettura con nome, occhiello, minuti
  a piedi e consiglio, e l'aggiornamento DEVE essere annunciato ai lettori di schermo.
- **FR-006**: L'elenco DEVE essere completo e ordinato anche senza la mappa: è la versione
  accessibile della stessa informazione.
- **FR-007**: I minuti a piedi DEVONO essere misurati sul percorso reale dal portone di via
  Dione 58, non in linea d'aria. *[NEEDS CLARIFICATION] i minuti del prototipo sono stime e
  vanno cronometrati: Piazza Archimede 1', Duomo 4', mercato 5', Tempio di Apollo 6', Fonte
  Aretusa 7', Castello Maniace 14', Ponte Umbertino 8', Cala Rossa 9', Giudecca 8', Solarium
  di Ponente 8', Forte Vigliena 11'.*
- **FR-008**: I luoghi DEVONO essere raggruppabili per categoria (monumenti, mare, mangiare e
  bere, servizi pratici), e le categorie DEVONO comparire nell'elenco.
- **FR-009**: Per ogni luogo DEVE essere possibile dichiarare un collegamento a una mappa
  esterna, che si apre solo su azione esplicita del visitatore.
- **FR-010**: La mappa DEVE riportare i riferimenti che orientano: Porto Grande a ponente,
  Lungomare di Levante, il ponte verso la terraferma, una scala grafica.
- **FR-011**: Senza JavaScript la mappa DEVE restare visibile con le etichette dei luoghi, e
  l'elenco DEVE restare completo di minuti e consigli.
- **FR-012**: La sezione DEVE dichiarare apertamente che l'elenco è ancora parziale, finché i
  luoghi dei proprietari non saranno aggiunti.
- **FR-013**: La geometria del disegno NON DEVE pretendere precisione cartografica; una nota
  DEVE dichiarare che è una mappa disegnata.

### Key Entities

- **Luogo**: nome, occhiello, categoria, posizione sul disegno, minuti a piedi dal portone,
  consiglio pratico, eventuale collegamento esterno.
- **Categoria**: il raggruppamento dei luoghi nell'elenco.
- **Punto della mappa**: la resa grafica di un luogo; conosce l'identificativo, non i
  contenuti.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Ogni luogo pubblicato ha un consiglio pratico di almeno una frase, distinto da
  una definizione enciclopedica.
- **SC-002**: Tutti i luoghi sono raggiungibili con la sola tastiera e la selezione è
  annunciata ai lettori di schermo.
- **SC-003**: La sezione non genera alcuna richiesta di rete verso domini di terze parti
  finché il visitatore non chiede esplicitamente le indicazioni stradali.
- **SC-004**: Aggiungere un luogo richiede un solo file di contenuto.
- **SC-005**: Il disegno della mappa e il suo codice restano sotto i 20 KB compressi.

## Assumptions

- Gli undici luoghi del prototipo sono il punto di partenza; l'elenco crescerà con i
  suggerimenti dei proprietari.
- I minuti a piedi si riferiscono a un passo normale, da adulto, senza soste.
- La mappa non deve sostituire la navigazione stradale: serve a far capire le distanze.
- Le coordinate sul disegno sono espresse nel sistema del disegno stesso, non in gradi.
