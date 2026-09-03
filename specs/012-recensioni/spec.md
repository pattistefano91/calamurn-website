# Feature Specification: Le recensioni degli ospiti

**Feature Branch**: `012-recensioni`

**Created**: 2026-09-03

**Status**: Draft

**Input**: User description: "Una sezione con le recensioni. Il Calamùrn ne riceve su
Booking.com — punteggio 9,2 — e sulla scheda Google. Vogliamo mostrare le migliori, senza
doverle ricopiare a mano una per una."

**Dati confermati il 3 settembre 2026** (esportazione Google fornita dal proprietario):

- **Google**: 4,8/5 su **68 recensioni**. Scheda:
  <https://maps.app.goo.gl/HJqeGzgmouQAmmg16>
- Distribuzione dei voti nell'esportazione (66 recensioni leggibili): **62 da cinque stelle,
  3 da quattro, 1 da una**.
- Lingua originale: 40 in italiano, poi spagnolo, tedesco, polacco, ebraico e un gruppo
  scritto direttamente in inglese.
- **Booking.com**: ancora da esportare.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Chi esita vede che qualcun altro c'è già stato (Priority: P1)

Il visitatore ha guardato le camere, ha letto la tariffa, e sta per chiudere la pagina. Prima
di farlo legge tre righe scritte da qualcuno che ci ha davvero dormito, con un nome, una data
e il nome del portale su cui le ha scritte.

**Why this priority**: è l'unica sezione che parla con la voce di qualcun altro. Tutto il
resto del sito lo scrive la casa, e chi legge lo sa.

**Independent Test**: si apre la sezione e si verifica che ogni recensione riporti testo,
nome, data e piattaforma di provenienza, e che nessuna sia priva di uno di questi.

**Acceptance Scenarios**:

1. **Given** la sezione recensioni, **When** la guardo, **Then** vedo almeno tre recensioni,
   ognuna con testo, nome di chi l'ha scritta, mese e anno, e piattaforma.
2. **Given** una recensione, **When** la leggo, **Then** posso raggiungere l'originale sulla
   piattaforma con un collegamento.
3. **Given** la sezione, **When** guardo in cima, **Then** leggo il punteggio complessivo con
   la fonte e la data in cui è stato rilevato.

---

### User Story 2 - Chi sospetta capisce da dove vengono (Priority: P1)

Il visitatore ha visto cento siti con recensioni finte. Qui legge, senza doverlo cercare, chi
le ha scelte, da dove vengono, e dove stanno tutte quante — comprese quelle che qui non ci
sono.

**Why this priority**: stessa priorità della prima, per due ragioni. La prima è che una
selezione non dichiarata è una **pratica commerciale ingannevole** ai sensi dell'art. 22-bis
del Codice del Consumo, sanzionabile dall'AGCM. La seconda è che una selezione dichiarata
convince di più: chi ammette di aver scelto le migliori è più credibile di chi finge che
siano tutte.

**Independent Test**: si legge la sezione senza aprire nulla e si verifica che dichiari
provenienza, criterio di selezione e collegamento all'elenco completo.

**Acceptance Scenarios**:

1. **Given** la sezione recensioni, **When** la leggo, **Then** trovo scritto che sono una
   selezione, chi l'ha fatta, e che vengono da ospiti che hanno soggiornato davvero.
2. **Given** la dichiarazione, **When** la guardo, **Then** contiene un collegamento
   all'elenco completo su ciascuna piattaforma citata.
3. **Given** la pagina, **When** ne ispeziono i dati strutturati, **Then** NON contengono
   valutazioni sulla casa stessa.

---

### User Story 3 - Aggiornarle non costa una giornata (Priority: P2)

Arrivano dieci recensioni nuove. Il proprietario le copia in blocco dalla propria Extranet e
dalla propria scheda Google, incolla in un file, esegue un comando, e le trova sul sito.

**Why this priority**: senza questo la sezione invecchia e smette di essere vera. Non è P1
perché il primo lancio si fa con quelle già scelte.

**Independent Test**: si prende un blocco di testo copiato dal pannello di una piattaforma,
lo si dà allo script e si verifica che produca file di contenuto corretti.

**Acceptance Scenarios**:

1. **Given** un blocco copiato dalla Extranet, **When** eseguo lo script di ingestione,
   **Then** genera un file per recensione, con i campi riconosciuti e quelli mancanti
   dichiarati.
2. **Given** una recensione già presente, **When** rieseguo lo script, **Then** non viene
   duplicata.
3. **Given** una recensione in tedesco, **When** viene ingerita, **Then** il testo originale
   è conservato e la lingua è registrata.

---

### User Story 4 - Chi non legge l'italiano le capisce lo stesso (Priority: P2)

L'ospite francese legge le recensioni in francese, ma vede che l'originale era in inglese e
che la traduzione è nostra.

**Why this priority**: il sito è in quattro lingue e una sezione monolingue stonerebbe. Ma
una recensione nella lingua sbagliata resta comunque leggibile.

**Independent Test**: si apre ogni lingua e si verifica che il testo sia tradotto e che la
lingua originale sia dichiarata quando è diversa.

**Acceptance Scenarios**:

1. **Given** la versione tedesca, **When** leggo una recensione scritta in italiano, **Then**
   la leggo in tedesco, con l'indicazione che è tradotta dall'italiano.
2. **Given** una recensione scritta nella lingua della pagina, **When** la leggo, **Then**
   nessuna indicazione di traduzione compare.

### Edge Cases

- **Una recensione viene cancellata dalla piattaforma**: il collegamento all'originale non
  porta più a nulla. Va tolta anche dal sito: una recensione che non si può verificare non è
  una recensione.
- **L'ospite chiede di essere rimosso**: va tolta entro il tempo previsto, senza discussione.
  Compare in pagina un nome di persona e questo basta a farne un dato personale.
- **Le recensioni invecchiano**: una recensione di tre anni fa descrive una casa che forse
  non esiste più. La data va sempre visibile, e va deciso dopo quanto una recensione esce.
- **Il punteggio complessivo cambia**: quello scritto sul sito è una fotografia. Va sempre
  accompagnato dalla data del rilevamento, altrimenti diventa falso senza che nessuno lo
  tocchi.
- **Nessuna recensione è ancora stata inserita**: la sezione non compare, invece di mostrarsi
  vuota.
- **Una recensione cita il nome di un dipendente o di un altro ospite**: va omesso.
- **Tutte le recensioni scelte sono a punteggio pieno**: il visitatore smette di crederci. La
  selezione dovrebbe includere un giudizio meno che perfetto — vedi le assunzioni.

## Cosa l'esportazione Google contiene e cosa no

L'esportazione fornita è sufficiente per il punteggio complessivo e per **scegliere** quali
recensioni pubblicare. Non è sufficiente per pubblicarne il testo, per tre ragioni che vanno
risolte prima dell'implementazione.

1. **I testi sono tagliati.** Quasi ogni recensione finisce con «… More»: l'esportazione ha
   catturato la vista compressa, non quella aperta. Pubblicare una recensione monca sarebbe
   peggio che non pubblicarla.
2. **I testi sono la traduzione automatica di Google verso l'inglese.** Quaranta recensioni su
   sessantasei erano scritte in italiano, e quello che l'esportazione riporta non sono le
   parole dell'ospite ma la resa inglese che Google ne fa. Pubblicarle significherebbe
   attribuire a una persona parole che non ha scritto, e violare il divieto di modificare il
   testo (FR-010).
3. **Le date sono relative** — «2 years ago», «a month ago» — quindi non permettono di
   scrivere il mese e l'anno richiesti da FR-018.

Poiché in pagina ne andranno cinque o sei, la soluzione non è riesportare tutto: basta che il
proprietario apra quelle poche sulla scheda, prema «Altro» e «Visualizza originale», e ne
copi il testo nella lingua in cui è stato scritto, con la data che Google mostra per esteso.

## Requirements *(mandatory)*

### Provenienza e raccolta

- **FR-001**: Le recensioni pubblicate DEVONO provenire **dai pannelli della casa stessa** —
  la Extranet di Booking.com e la scheda Google — dove il proprietario ha accesso alle
  recensioni ricevute. Sono dati suoi, e copiarli dal proprio pannello è legittimo.
- **FR-002**: Il sito NON DEVE estrarre recensioni dalle pagine pubbliche delle piattaforme,
  né una volta sola né periodicamente. I termini d'uso di Booking.com vietano l'estrazione
  sistematica; quelli delle API di Google vietano di conservare i contenuti delle schede oltre
  trenta giorni, il che rende una copia permanente nel repository una violazione.
- **FR-003**: DEVE esistere uno script di ingestione che accetta un blocco di testo copiato da
  un pannello e produce i file di contenuto, riconoscendo nome, data, punteggio e testo, e
  dichiarando i campi che non è riuscito a riconoscere. Il proprietario incolla, lo script
  trasforma: nessuna trascrizione a mano.
- **FR-004**: Lo script DEVE essere idempotente e NON DEVE duplicare una recensione già
  presente.
- **FR-005**: Ogni recensione DEVE conservare un collegamento alla propria pagina di origine,
  perché chiunque possa verificarla.

### Onestà e legge

- **FR-006**: La sezione DEVE dichiarare, in modo visibile e senza doverlo cercare: che le
  recensioni provengono da ospiti che hanno soggiornato davvero, da quali piattaforme, che
  sono **una selezione fatta dalla casa**, e dove si trovano tutte quante.

  *Non è una scelta editoriale ma un obbligo:* l'art. 22-bis del Codice del Consumo (D.lgs.
  206/2005, come modificato dal D.lgs. 26/2023 che recepisce la direttiva Omnibus) qualifica
  come pratica commerciale ingannevole la pubblicazione di recensioni senza informare se e
  come si garantisce che provengano da consumatori reali. Presentare una selezione come se
  fosse l'insieme completo rientra nella stessa fattispecie.

- **FR-007**: La dichiarazione DEVE contenere un collegamento diretto all'elenco pubblico
  completo di ciascuna piattaforma citata.
- **FR-008**: NON DEVONO essere pubblicate recensioni scritte dalla casa, da conoscenti, o
  ottenute in cambio di sconti o vantaggi non dichiarati.
- **FR-009**: Il punteggio complessivo DEVE essere mostrato come dato citato: valore, scala,
  numero di recensioni, piattaforma e **data del rilevamento**. Senza la data diventa falso
  da solo, col passare del tempo.
- **FR-010**: Nessun testo di recensione DEVE essere modificato. È ammesso tagliare, ma il
  taglio va segnalato; è ammesso — anzi dovuto — omettere nomi di terzi.
- **FR-010b**: DEVE essere pubblicato il testo **nella lingua in cui l'ospite l'ha scritto**,
  non la traduzione automatica che la piattaforma mostra di default. Le traduzioni verso le
  altre tre lingue del sito sono nostre e vanno dichiarate come tali (FR-017).
- **FR-010c**: NON DEVE essere pubblicata alcuna recensione scritta da chi gestisce la casa o
  da suoi familiari, neppure se autentica e spontanea. *(L'esportazione Google ne contiene una
  firmata con il nome del proprietario: va esclusa dalla selezione — vedi i dati da
  confermare.)*

### Dati personali

- **FR-011**: Di chi ha scritto DEVONO comparire al massimo il **nome di battesimo** e il
  paese. Nessun cognome, nessuna fotografia, nessun contatto, nessun collegamento a profili.
- **FR-012**: DEVE esistere un modo dichiarato per chiedere la rimozione, e la rimozione DEVE
  consistere nel cancellare il file di contenuto: nessun archivio nascosto.
- **FR-013**: Le recensioni NON DEVONO essere raccolte dal sito: il sito le mostra soltanto.
  Nessun modulo, nessun invio, nessun dato che parte dal browser.

### Reperibilità

- **FR-014**: Sulla scheda della struttura NON DEVE essere emesso alcun dato strutturato di
  tipo `Review` o `AggregateRating`.

  *Motivo:* Google considera «auto-referenziali» le recensioni su un'attività pubblicate sul
  sito dell'attività stessa. Quel markup non produce stelle nei risultati di ricerca e può
  esporre a un'azione manuale. Il guadagno è nullo, il rischio no.

- **FR-015**: Il collegamento all'elenco completo sulle piattaforme DEVE essere navigabile ma
  NON DEVE far partire richieste verso terzi finché il visitatore non lo attiva.

### Presentazione

- **FR-016**: Le recensioni DEVONO stare in una content collection, un file per recensione,
  con schema validato.
- **FR-017**: Il testo DEVE esistere nelle quattro lingue del sito; quando la lingua della
  pagina è diversa da quella in cui la recensione è stata scritta, la traduzione DEVE essere
  dichiarata insieme alla lingua originale.
- **FR-018**: Ogni recensione DEVE mostrare la data almeno al mese e all'anno.
- **FR-019**: Una recensione PUÒ dichiarare la camera in cui l'ospite ha dormito, e in tal
  caso la scheda della camera PUÒ mostrarla.
- **FR-020**: La casa PUÒ rispondere a una recensione, e la risposta DEVE essere riconoscibile
  come tale.
- **FR-021**: La sezione DEVE essere leggibile per intero senza JavaScript; scorrimenti,
  filtri o caroselli sono potenziamenti.
- **FR-022**: La sezione compare quando ha **qualcosa di vero da dire**. Il punteggio
  complessivo di una piattaforma è già qualcosa di vero: se è confermato, la sezione compare
  anche prima che esista una singola recensione pubblicata, dichiarando che i testi mancano.
  Se invece non è confermato nemmeno un punteggio, la sezione NON DEVE comparire.

  *(Il requisito diceva prima che senza recensioni la sezione non doveva comparire affatto.
  È stato corretto il 3 settembre 2026: il punteggio Google è un dato confermato e nasconderlo
  in attesa dei testi sarebbe tenere fuori dal sito una cosa vera. Il Principio I della
  costituzione chiede di dichiarare i buchi, non di rimandare la pagina.)*
- **FR-023**: La sezione DEVE stare **dopo il confronto con i portali e prima della
  galleria**: è lì che nasce il dubbio «posso fidarmi a prenotare diretto», ed è lì che la
  voce di un altro ospite serve.
- **FR-024**: Il peso aggiunto dalla sezione NON DEVE superare i 15 KB, fotografie escluse:
  è testo.

### Dati da confermare

- **[NEEDS CLARIFICATION]** Numero reale di recensioni su Booking.com: le fonti pubbliche si
  contraddicono (477, 461 e 108 a seconda dell'aggregatore). Il numero vero sta nella
  Extranet, ancora da esportare.
- *Risolto il 3 settembre 2026*: la scheda Google esiste, 4,8/5 su 68 recensioni.
- **[NEEDS CLARIFICATION]** Il testo per esteso, in lingua originale, e la data esatta delle
  cinque o sei recensioni scelte.
- **[NEEDS CLARIFICATION]** La recensione firmata con il nome del proprietario
  nell'esportazione Google è davvero sua, o di un omonimo? Se è sua va tolta anche da Google:
  le linee guida della piattaforma e l'art. 22-bis vietano le recensioni auto-prodotte.
- **[NEEDS CLARIFICATION]** Quante recensioni si vogliono mostrare, e chi le sceglie?
- **[NEEDS CLARIFICATION]** Dopo quanti anni una recensione esce dal sito?
- **[NEEDS CLARIFICATION]** La casa vuole rispondere in pagina ad almeno una recensione?
- **[NEEDS CLARIFICATION]** Si accetta di pubblicare almeno un giudizio meno che perfetto?
  *(Decisione del proprietario del 3 settembre 2026: mostrare solo recensioni positive. La
  presente spec la rispetta, con la dichiarazione richiesta da FR-006.)*

### Key Entities

- **Recensione**: identificativo, piattaforma di origine, collegamento all'originale, data,
  nome di battesimo, paese, punteggio e scala, lingua originale, testo nelle quattro lingue,
  camera (facoltativa), risposta della casa (facoltativa), se pubblicata.
- **Piattaforma**: nome, indirizzo dell'elenco pubblico completo, scala dei punteggi.
- **Punteggio complessivo**: valore, scala, numero di recensioni, piattaforma, data del
  rilevamento. È una citazione, non un calcolo del sito.
- **Dichiarazione di provenienza**: il testo che spiega da dove vengono le recensioni e chi le
  ha scelte. Non è decorazione: è ciò che rende la sezione lecita.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Ogni recensione pubblicata ha testo, nome, data, piattaforma e un collegamento
  che porta davvero all'originale: verificato aprendoli tutti.
- **SC-002**: La dichiarazione di provenienza è leggibile senza aprire nulla e senza scorrere
  oltre la sezione.
- **SC-003**: I dati strutturati della pagina non contengono `Review` né `AggregateRating`
  sulla casa.
- **SC-004**: Aggiungere dieci recensioni nuove richiede meno di quindici minuti del
  proprietario: un copia-incolla e un comando.
- **SC-005**: Nessuna richiesta di rete verso Booking o Google parte dal browser finché il
  visitatore non attiva un collegamento.
- **SC-006**: La sezione aggiunge meno di 15 KB alla pagina, fotografie escluse.
- **SC-007**: Nessun cognome, fotografia o contatto di un ospite compare in pagina.

## Assumptions

- Le recensioni sono di ospiti reali e il proprietario può dimostrarlo dai propri pannelli.
- Il proprietario ha accesso alla Extranet di Booking.com e, se esiste, alla scheda Google.
- La selezione la fa il proprietario: il sito la pubblica, non la giudica.
- **Sulla scelta di mostrare solo recensioni positive**: è legittima e diffusa, e la spec la
  rispetta. Resta però una raccomandazione contraria alla luce del Principio I della
  costituzione: nelle recensioni pubbliche del Calamùrn ricorre un rilievo — *le pareti sono
  sottili, si sentono gli altri ospiti* — che oggi il sito non dice da nessuna parte. Un
  ospite che lo scopre di notte scrive una recensione da tre stelle; un ospite che lo ha letto
  prima, no. Che compaia fra le recensioni o fra le domande frequenti è indifferente: che
  compaia, no. Vedi anche la feature 008.
- Non serve alcun sistema di raccolta: le recensioni si raccolgono dove già si raccolgono, sui
  portali, che lo fanno con la verifica del soggiorno.
- Il sito non calcola medie: le medie sono quelle delle piattaforme, citate come sono.
