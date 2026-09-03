/**
 * Testi dell'interfaccia e della redazione, in italiano.
 *
 * Questa è la lingua di partenza: la forma di questo oggetto è il contratto che
 * inglese, francese e tedesco devono rispettare, e TypeScript fallisce la
 * costruzione quando una chiave manca (spec 009, FR-006).
 *
 * Qui non entrano numeri: metrature, tariffe, minuti e gradini vivono nei dati
 * e nei contenuti, una volta sola per tutte le lingue.
 */
export const it = {
  meta: {
    titolo: "Calamùrn · Palazzo Di Natale — quattro camere a Ortigia, Siracusa",
    descrizione:
      "Quattro camere dentro un palazzo gotico-catalano in via Dione 58, dietro Piazza Archimede, a Ortigia. Prenotazione diretta su WhatsApp, senza commissioni.",
  },

  generale: {
    saltaAlContenuto: "Salta al contenuto",
    daConfermare: "da confermare",
    daDefinire: "da definire",
    chiudi: "Chiudi",
    ospiti: (n: number) => (n === 1 ? "1 ospite" : `${n} ospiti`),
  },

  nav: {
    etichetta: "Sezioni del sito",
    menu: "Menu",
    prenota: "Prenota",
    voci: {
      camere: "Le camere",
      suite: "La suite",
      mappa: "La mappa",
      palazzo: "Il palazzo",
      galleria: "Foto",
      ortigia: "Ortigia",
      domande: "Prima di arrivare",
    },
  },

  hero: {
    titolo: "Il portone lo riconoscerai.",
    lede: "Quattro camere dentro un palazzo gotico-catalano, dietro Piazza Archimede. L'arco, le bifore e la balaustra traforata sono gli stessi da cinque secoli.",
    cursore: "La stessa facciata",
    cursoreEtichetta: "Ora del giorno sulla facciata",
  },

  prenotazione: {
    arrivo: "Arrivo",
    partenza: "Partenza",
    ospiti: "Ospiti",
    camera: "Camera",
    tutte: "Tutte",
    invia: "Prenota la tua camera",
    scriviMail: "scrivici una mail",

    nota: (entro: string, orari: string) =>
      `Il pulsante apre WhatsApp con le tue date già scritte: non devi ricopiare nulla. Ti rispondiamo di persona, di solito entro ${entro}, dalle ${orari}. Nessuna commissione, nessun pagamento online.`,
    notaWhatsApp: "WhatsApp",
    nonUsiWhatsApp: "Non usi WhatsApp?",
    tempiDaConfermare: "tempi da confermare",
    contattiDaConfermare: "contatti da confermare",
    contattiSpiegazione:
      "Il numero WhatsApp e l'indirizzo e-mail sono ancora segnaposto: vanno sostituiti con quelli veri prima della pubblicazione.",

    erroreDate: "La partenza deve essere dopo l'arrivo.",
    erroreCapienza: (camera: string, max: number | string) =>
      `La ${camera} ospita al massimo ${max} persone: scrivici comunque, cerchiamo una soluzione.`,

    // Il messaggio che l'ospite si ritrova già scritto.
    messaggioApertura: "Buongiorno, vorrei verificare la disponibilità al Calamùrn.",
    messaggioArrivo: "Arrivo",
    messaggioPartenza: "Partenza",
    messaggioOspiti: "Ospiti",
    messaggioCamera: "Camera",
    messaggioIndifferente: "indifferente",
    messaggioDaDefinire: "(da definire)",
    messaggioSaluto: "Grazie",
    oggettoMail: "Richiesta disponibilità Calamùrn",
  },

  disegno: {
    titolo: "Tutta la casa, in un disegno",
    occhiello: "tocca un ambiente · prospetto e sezione",
    viste: "Viste del palazzo",
    prospetto: "Prospetto",
    sezione: "Sezione",
    ridisegna: "↻ ridisegna",
    mostra: (ambiente: string) => `Mostra ${ambiente}`,
    esplora: "▸ passa sopra per esplorare, tocca per bloccare",
    bloccata: "● selezione bloccata — tocca di nuovo per sbloccare",
    descrizioneProspetto: "Prospetto del palazzo su via Dione: quattro livelli. Al piano terra il portone al civico 58, con l'arco ribassato e la lanterna. Al primo piano altre proprietà. Al secondo, sulla metà destra, la camera Standard verso il centro e la Deluxe all'estremità, entrambe con balcone sulla via. Superior e suite non sono visibili da qui: la prima affaccia sul cortile interno, la seconda sta in attico.",
    descrizioneSezione: "Sezione trasversale del palazzo: al piano terra l'androne d'ingresso al 58; al primo piano altre proprietà; al secondo il pianerottolo comune, la camera Standard a sinistra, la Deluxe a destra e, oltre il cortile interno, la Superior; in attico la suite con il terrazzo. Sulla destra la scala che sale per tutti e quattro i livelli.",
    disegnoNonRilievo: "disegno, non rilievo",
    nota: "Prospetto e sezione sono ricalcati dalle fotografie: arcone e portone al 58, lanterna sulla chiave, bifore e balaustra traforata. Il portone divide il palazzo in due: al primo piano stanno altre proprietà, al secondo le camere sulla metà destra — Standard verso il centro, Deluxe all'estremità — e sopra, in attico, la suite col terrazzo, che da via Dione non si vede.",
  },

  camere: {
    titolo: "Le quattro camere",
    occhiello: "metratura reale, affacci diversi",
    prenota: "Prenota",
    daPrezzo: (prezzo: string) => `da ${prezzo}`,
    perNotte: "/ notte",
    perNotteColazione: "/ notte · colazione inclusa",
    spazioDellaCasa: "Spazio della casa",
    tariffaIndicativa: "tariffa indicativa",
    metraturaDaMisurare: "metratura da misurare",
    mqDaMisurare: "m² da misurare",
    fotografiaDaFare: "fotografia da fare",
    notaTariffe:
      "Le tariffe mostrate sono ricavate dalle schede pubbliche: la più bassa rilevata è 95 € a notte. Vanno sostituite con il tariffario per stagione della casa — e la metratura della suite manca del tutto.",
    tariffeIndicative: "tariffe indicative",
  },

  suite: {
    occhiello: "Ultimo piano · terrazzo a uso esclusivo",
    titolo: "La suite ha un terrazzo che non divide con nessuno.",
    testo: "Un piano intero sotto il cielo di Ortigia, e sopra non c'è nessun altro. Il terrazzo ha una pergola di canne per l'ombra, le giare con le agavi, e oltre i tetti si vede il mare. La colazione la porti fuori; la sera il sole se ne va dietro la Maddalena mentre tu sei ancora seduto.",
    prenota: "Prenota la suite",
  },

  palazzo: {
    titolo: "Il palazzo e la strada",
    occhiello: "cinque secoli di via Dione",
    p1: "Via Dione era il decumano maggiore della città greca. Compare integra nel plastico di Ortigia modellato da Giuseppe Costa nel 1773 e ancora in un catastale del 1916: la stessa via ricostruita dopo il terremoto del 1693, rimasta identica per quasi due secoli e mezzo.",
    p2: "Poi, negli anni Trenta, cinque isolati fra via Dione e via Cavour vengono sventrati per aprire la strada celebrativa del regime, cancellando esempi finissimi di architetture del tardo Quattrocento. Questa facciata è fra le sopravvissute.",
    daVerificare: "da verificare",
    p3: "L'arco ribassato, le bifore con traforo e le balaustre raccontano un impianto tardo-gotico catalano, quattro-cinquecentesco. Se Francesco Di Natale è documentato, va capito se firmò l'impianto o un intervento successivo: la differenza fra «palazzo storico» e «palazzo gotico-catalano del Quattrocento» vale molto, ed è tutta nel documento.",
    didascalia: "Le bifore e la balaustra traforata, dal marciapiede di via Dione.",
  },

  aPiedi: {
    titolo: "A piedi da qui",
    occhiello: "nessun trasferimento, nessuna auto",
    min: "min",
    daCronometrare: "da cronometrare",
    nota: "Questi minuti sono stimati, non misurati. Vanno percorsi davvero: è la prima cosa che gli ospiti verificano, ed è anche la più facile da smentire.",
  },

  mappa: {
    titolo: "Ortigia, come la conosciamo noi",
    occhiello: "tocca un punto · minuti a piedi dal portone",
    etichettaSvg:
      "Mappa disegnata di Ortigia con i luoghi consigliati. L'elenco accanto riporta gli stessi luoghi con i minuti a piedi dal portone.",
    categorie: {
      monumenti: "Quello che sei venuto a vedere",
      mare: "Dove ci si bagna",
      mangiare: "Mangiare e bere",
      pratico: "Pratico",
    },
    min: "min",
    circa: "ca.",
    aPiedi: "a piedi",
    puntoEtichetta: (nome: string, minuti: string) => `${nome}, ${minuti} a piedi`,
    minutiDaCronometrare: "minuti da cronometrare",
    nota: "I minuti sono stime, non misure: vanno percorsi davvero, perché è la prima cosa che gli ospiti verificano. E per ora ci sono solo i punti che nessuno può sbagliare. Il valore vero arriva quando aggiungiamo i vostri: la granita giusta con l'orario giusto, la trattoria dove mangiate voi, lo scoglio senza turisti. Quella è la pagina che gli ospiti fotografano.",
  },

  gradini: {
    occhiello: "Onestà preventiva",
    gradini: "gradini",
    daContare: "da contare",
    testo: "Le camere sono al penultimo piano, la suite all'ultimo, e nel palazzo non c'è ascensore. Preferiamo dirlo qui, in home, invece di lasciartelo scoprire con la valigia in mano.",
    fotoDaFare: "foto da fare",
    didascalia: "Al posto della scala, per ora, il pianerottolo del secondo piano.",
  },

  confronto: {
    titolo: "Qui o sul portale",
    occhiello: "stesso letto, condizioni diverse",
    condizione: "Condizione",
    sulPortale: "Sul portale",
    quiDiretto: "Qui, diretto",
    righe: {
      tariffa: "Tariffa a notte (Standard)",
      tariffaPortale: "da 105 €",
      tariffaDiretto: "da 99 €",
      colazione: "Colazione",
      colazionePortale: "a parte",
      checkout: "Check-out",
      checkoutPortale: "11:00 fisso",
      checkoutDiretto: "flessibile, se la camera è libera",
      chiRisponde: "Chi risponde",
      chiRispondePortale: "assistenza del portale",
      chiRispondeDiretto: "noi, su WhatsApp",
      conferma: "Conferma",
      confermaPortale: "immediata, automatica",
      confermaDiretto: (entro: string) => `entro ${entro}, con una persona vera`,
      cancellazione: "Cancellazione",
      cancellazionePortale: "secondo il portale",
      cancellazioneDiretto: "gratuita fino a __ giorni prima",
    },
    nota: "Nessuna clausola ci obbliga più a pareggiare i portali: possiamo dirlo apertamente, ed è la riga che converte chi arriva qui dopo aver guardato Booking.",
  },

  galleria: {
    titolo: "Tutte le foto",
    occhiello: "filtra per ambiente · tocca per ingrandire",
    filtri: "Filtra le fotografie per ambiente",
    tutte: "Tutte",
    ingrandisci: (didascalia: string) => `Ingrandisci: ${didascalia}`,
    fotografiaIngrandita: "Fotografia ingrandita",
    precedente: "Fotografia precedente",
    successiva: "Fotografia successiva",
    inCrescita: "in crescita",
    nota: "Qui confluiscono tutte le fotografie della casa. Mancano ancora il cortile, la scala, l'androne e il terrazzo visto da fuori.",
    ambienti: {
      palazzo: "Il palazzo",
      deluxe: "Deluxe",
      standard: "Standard",
      superior: "Superior",
      suite: "Suite",
      comuni: "Spazi comuni",
    },
  },

  recensioni: {
    titolo: "Quello che dicono gli altri",
    occhiello: "recensioni di ospiti che hanno dormito qui",
    su: "su",
    conta: (n: number) => `${n} recensioni`,
    rilevatoIl: "rilevato il",
    vediTutte: "vedile tutte",
    provenienza: "Una selezione delle recensioni che gli ospiti ci hanno lasciato sulle piattaforme dove hanno prenotato. Le abbiamo scelte noi, e non sono tutte: qui sotto ci sono i collegamenti agli elenchi completi, comprese quelle che qui non trovi.",
    verificate: "Sono scritte da persone che hanno soggiornato davvero: le piattaforme lo verificano prima di pubblicarle.",
    testiMancanti: "testi in arrivo",
    testiMancantiSpiegazione: "Il punteggio qui sopra è reale e verificabile. Le singole recensioni no: quelle esportate dalla scheda sono tagliate a metà e tradotte automaticamente in inglese, e pubblicarle vorrebbe dire attribuire a qualcuno parole che non ha scritto. Arrivano appena avremo gli originali per esteso.",
    punteggioDaConfermare: "punteggio da confermare",
    originale: (l: string) => `scritta in ${l}`,
    tradotta: "tradotta da noi",
    leggiOriginale: (nome: string) => `Leggi la recensione originale di ${nome}`,
    rispostaDellaCasa: "La risposta della casa",
    lingue: {
      it: "italiano",
      en: "inglese",
      fr: "francese",
      de: "tedesco",
      pl: "polacco",
      es: "spagnolo",
      he: "ebraico",
      nl: "olandese",
      pt: "portoghese",
    } as Record<string, string>,
  },

  domande: {
    titolo: "Prima di arrivare",
    occhiello: "le domande vere",
    senzaRisposta: "senza risposta",
    spiegazioneSenzaRisposta:
      "Non l'abbiamo ancora scritta perché non vogliamo scrivere una risposta generica. Serve:",
  },

  dotazioni: {
    "balcone-su-via": "balcone su via Dione",
    "vista-cortile": "vista cortile",
    "vista-mare": "vista mare",
    "terrazzo-privato": "terrazzo privato",
    "bagno-interno": "bagno interno",
    "bagno-sul-pianerottolo": "bagno privato sul pianerottolo",
    "cabina-armadio": "cabina armadio",
    "doccia-a-filo": "doccia a filo pavimento",
    "letto-queen": "letto queen",
    "letto-baldacchino": "letto a baldacchino",
    "terzo-letto": "terzo letto su divano",
    "angolo-colazione": "angolo colazione",
    "pietra-a-vista": "pietra a vista",
    "soffitto-in-travi": "soffitto in travi",
  },

  footer: {
    prenotaDiretto: "Prenota diretto",
    verificaDisponibilita: "Verifica disponibilità",
    scriviciWhatsApp: "Scrivici su WhatsApp",
    laSuite: "La suite con il terrazzo",
    dormireAOrtigia: "Dormire a Ortigia",
    lingue: "Lingue",
    privacy: "Privacy",
    cookie: "Cookie",
    condizioni: "Condizioni",
    cin: "CIN",
    selettoreLingua: "Scegli la lingua",
  },

  traduzione: {
    bozza: "traduzione da rivedere",
    avviso:
      "Questa pagina è tradotta dall'italiano e non è ancora stata riletta da una persona madrelingua. Se qualcosa suona storto, la colpa è nostra, non della casa.",
  },

  nonTrovata: {
    kicker: "Errore 404",
    titolo: "Questo indirizzo non porta da nessuna parte.",
    testo: "Il portone giusto è al 58 di via Dione. Se stavi cercando una camera, le quattro sono tutte in home.",
    torna: "Torna alla home",
    meta: {
      titolo: "Pagina non trovata · Calamùrn",
      descrizione:
        "La pagina cercata non esiste. Torna alla home del Calamùrn, in via Dione 58 a Ortigia.",
    },
  },
};

/** La forma che ogni altra lingua deve avere: TypeScript non perdona una chiave in meno. */
export type Testi = typeof it;
