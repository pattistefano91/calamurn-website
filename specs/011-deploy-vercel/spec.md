# Feature Specification: Pubblicazione su Vercel

**Feature Branch**: `011-deploy-vercel`

**Created**: 2026-09-02

**Status**: Draft

**Input**: User description: "Il sito vive su Vercel: `main` va in produzione, ogni pull
request produce un'anteprima da guardare sul telefono prima di unire. Serve il dominio, le
intestazioni di sicurezza e di cache, e la certezza che una modifica sbagliata si possa
annullare in un minuto."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Il sito è online e si aggiorna da solo (Priority: P1)

Chi lavora al sito unisce una modifica su `main` e nel giro di un paio di minuti è online, senza
comandi manuali e senza caricare file a mano.

**Why this priority**: senza pubblicazione il sito non esiste. È anche la storia che rende
verificabili tutte le altre.

**Independent Test**: si modifica un testo, si unisce su `main` e si verifica che il sito
pubblico mostri la modifica entro pochi minuti.

**Acceptance Scenarios**:

1. **Given** una modifica unita su `main`, **When** attendo il completamento, **Then** il
   dominio di produzione mostra la nuova versione senza intervento manuale.
2. **Given** una costruzione fallita, **When** guardo il sito pubblico, **Then** mostra
   ancora la versione precedente, integra.
3. **Given** una versione pubblicata sbagliata, **When** chiedo il ritorno alla precedente,
   **Then** il sito torna indietro in meno di un minuto.

---

### User Story 2 - Guardare una modifica prima di pubblicarla (Priority: P1)

Chi propone una modifica riceve un indirizzo di anteprima da aprire sul telefono, e la giudica
davvero prima che sia online.

**Why this priority**: è il modo in cui il proprietario approva testi e fotografie senza
installare nulla. Il flusso di lavoro della costituzione lo richiede.

**Independent Test**: si apre una pull request e si verifica che compaia un indirizzo di
anteprima funzionante e non indicizzabile.

**Acceptance Scenarios**:

1. **Given** una pull request aperta, **When** la guardo, **Then** contiene l'indirizzo
   dell'anteprima corrispondente a quel ramo.
2. **Given** un'anteprima, **When** ne leggo le intestazioni, **Then** dichiara di non essere
   indicizzabile.

---

### User Story 3 - Il sito risponde da un indirizzo che è il suo (Priority: P2)

Gli ospiti arrivano su un dominio proprio, in HTTPS, senza `www` di troppo e senza avvisi del
browser.

**Why this priority**: un dominio di servizio funziona tecnicamente ma non si può stampare su
un biglietto. Non blocca la prima pubblicazione.

**Independent Test**: si aprono le varianti dell'indirizzo e si verifica che convergano tutte
sulla forma canonica in HTTPS.

**Acceptance Scenarios**:

1. **Given** l'indirizzo senza HTTPS, **When** lo apro, **Then** vengo rediretto alla forma
   sicura e canonica con una redirezione permanente.
2. **Given** la forma non canonica del dominio, **When** la apro, **Then** vengo rediretto
   alla canonica.

### Edge Cases

- La costruzione fallisce: la versione online resta quella buona, e chi ha proposto la
  modifica riceve l'errore.
- Un file pesante viene aggiunto per sbaglio: un controllo blocca la costruzione se il
  risultato supera un limite dichiarato.
- Il dominio non è ancora pronto: il sito resta pubblicato su un indirizzo di servizio, non
  indicizzabile, finché il dominio non viene collegato.
- Qualcuno pubblica dal proprio computer scavalcando `main`: va impedito, la produzione si
  aggiorna solo da `main`.
- Il limite gratuito di Vercel viene superato: va saputo prima, con un tetto dichiarato.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Il repository DEVE essere collegato a un progetto Vercel che costruisce da
  `main` verso la produzione.
- **FR-002**: Ogni pull request DEVE produrre un'anteprima con indirizzo proprio.
- **FR-003**: Le anteprime NON DEVONO essere indicizzabili dai motori di ricerca.
- **FR-004**: Il ritorno a una versione precedente DEVE essere possibile senza ricostruire.
- **FR-005**: Il sito DEVE essere servito solo in HTTPS, con redirezione permanente da HTTP.
- **FR-006**: DEVE esistere una sola forma canonica del dominio; le altre reindirizzano con
  una redirezione permanente.
- **FR-007**: Le risorse con nome contenente l'impronta del contenuto (immagini elaborate,
  CSS, JS) DEVONO essere servite con cache di lunga durata e immutabile; i documenti HTML
  DEVONO essere rivalidati.
- **FR-008**: DEVONO essere impostate le intestazioni di sicurezza: politica di sicurezza dei
  contenuti, `Referrer-Policy`, `X-Content-Type-Options`, `Strict-Transport-Security`,
  `Permissions-Policy` che nega fotocamera, microfono e geolocalizzazione.
- **FR-009**: La politica di sicurezza dei contenuti DEVE consentire solo le origini
  effettivamente usate — il sito stesso e il dominio dei caratteri tipografici — e vietare gli
  script incorporati non dichiarati.
- **FR-010**: La costruzione DEVE fallire se il risultato supera un limite di peso dichiarato,
  perché una regressione sulle immagini non passi inosservata.
- **FR-011**: Il progetto NON DEVE avere variabili d'ambiente contenenti segreti: il sito è
  statico e non ne ha bisogno.
- **FR-012**: La versione di Node usata per costruire DEVE essere dichiarata nel repository e
  coincidere con quella di sviluppo.
- **FR-013**: DEVE esistere una pagina 404 nello stile del sito, con un ritorno alla home,
  tradotta in tutte le lingue.
- **FR-014**: Il dominio di produzione DEVE essere collegato. *[NEEDS CLARIFICATION] quale
  dominio, e chi lo controlla? Prima del collegamento il sito resta su un indirizzo Vercel non
  indicizzabile.*

### Key Entities

- **Distribuzione**: una versione pubblicata; ha un indirizzo, un commit, uno stato e se sia
  di produzione o di anteprima.
- **Dominio**: il nome pubblico, la sua forma canonica e le forme che reindirizzano.
- **Regola di intestazione**: quali intestazioni valgono per quali percorsi.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Dal momento in cui una modifica è unita su `main` a quando è online passano
  meno di tre minuti.
- **SC-002**: Ogni pull request ha un'anteprima funzionante e non indicizzabile.
- **SC-003**: Le intestazioni di sicurezza ottengono almeno una B su un servizio pubblico di
  verifica.
- **SC-004**: Il ritorno a una versione precedente si completa in meno di un minuto.
- **SC-005**: Il sito è servito da CDN con risposte sotto i 200 ms per l'HTML dall'Europa.

## Assumptions

- Il piano gratuito di Vercel è sufficiente: sito statico, poche pagine, traffico modesto.
- Il repository sta su GitHub, nell'account `pattistefano91`, ed è pubblico.
- Non serve alcun servizio lato server: nessuna funzione, nessun database, nessun segreto.
- Il proprietario giudica le anteprime dal telefono: gli indirizzi vanno resi facili da aprire.
- Le fotografie sono già ottimizzate a monte (feature 002): la costruzione su Vercel non deve
  fare lavoro pesante sulle immagini.
