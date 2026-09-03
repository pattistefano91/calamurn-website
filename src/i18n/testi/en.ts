/**
 * Interface and editorial copy, in English.
 * Translated from the Italian source; awaiting a native reader (spec 009, FR-014).
 */
import type { Testi } from "./it";

export const en: Testi = {
  meta: {
    titolo: "Calamùrn · Palazzo Di Natale — four rooms in Ortigia, Syracuse",
    descrizione:
      "Four rooms inside a Catalan Gothic palazzo at via Dione 58, just behind Piazza Archimede, in Ortigia. Book directly on WhatsApp, no commission.",
  },

  generale: {
    saltaAlContenuto: "Skip to content",
    daConfermare: "to be confirmed",
    daDefinire: "to be decided",
    chiudi: "Close",
    ospiti: (n: number) => (n === 1 ? "1 guest" : `${n} guests`),
  },

  nav: {
    etichetta: "Site sections",
    menu: "Menu",
    prenota: "Book",
    voci: {
      camere: "The rooms",
      suite: "The suite",
      mappa: "The map",
      palazzo: "The palazzo",
      galleria: "Photos",
      ortigia: "Ortigia",
      domande: "Before you arrive",
    },
  },

  hero: {
    titolo: "You'll know the door when you see it.",
    lede: "Four rooms inside a Catalan Gothic palazzo, just behind Piazza Archimede. The arch, the mullioned windows and the pierced balustrade have been the same for five centuries.",
    cursore: "The same façade",
    cursoreEtichetta: "Time of day on the façade",
  },

  prenotazione: {
    arrivo: "Arrival",
    partenza: "Departure",
    ospiti: "Guests",
    camera: "Room",
    tutte: "Any",
    invia: "Book your room",
    scriviMail: "send us an email",

    nota: (entro: string, orari: string) =>
      `The button opens WhatsApp with your dates already written in: you don't have to retype anything. A real person answers, usually within ${entro}, from ${orari}. No commission, no online payment.`,
    notaWhatsApp: "WhatsApp",
    nonUsiWhatsApp: "Don't use WhatsApp?",
    tempiDaConfermare: "response time to be confirmed",
    contattiDaConfermare: "contact details to be confirmed",
    contattiSpiegazione:
      "The WhatsApp number and the email address are still placeholders: they must be replaced with the real ones before going live.",

    erroreDate: "Departure must come after arrival.",
    erroreCapienza: (camera: string, max: number | string) =>
      `The ${camera} sleeps at most ${max}: write to us anyway, we'll find a way.`,

    messaggioApertura: "Hello, I'd like to check availability at Calamùrn.",
    messaggioArrivo: "Arrival",
    messaggioPartenza: "Departure",
    messaggioOspiti: "Guests",
    messaggioCamera: "Room",
    messaggioIndifferente: "no preference",
    messaggioDaDefinire: "(to be decided)",
    messaggioSaluto: "Thank you",
    oggettoMail: "Availability request · Calamùrn",
  },

  disegno: {
    titolo: "The whole house, drawn",
    occhiello: "tap a space · elevation and section",
    viste: "Views of the palazzo",
    prospetto: "Elevation",
    sezione: "Section",
    ridisegna: "↻ draw again",
    mostra: (ambiente: string) => `Show ${ambiente}`,
    esplora: "▸ hover to explore, tap to lock",
    bloccata: "● selection locked — tap again to unlock",
    descrizioneProspetto: "Elevation of the palazzo on via Dione: four levels. On the ground floor, the door at number 58, with its depressed arch and lantern. On the first floor, other owners. On the second, in the right-hand half, the Standard room towards the centre and the Deluxe at the far end, both with a balcony over the street. Superior and suite cannot be seen from here: the first looks onto the inner courtyard, the second is up in the attic.",
    descrizioneSezione: "Cross section of the palazzo: on the ground floor the entrance hall at number 58; on the first floor other owners; on the second the shared landing, the Standard room on the left, the Deluxe on the right and, beyond the inner courtyard, the Superior; in the attic the suite with its terrace. On the right, the staircase climbing all four levels.",
    disegnoNonRilievo: "a drawing, not a survey",
    nota: "Elevation and section are traced from photographs: the great arch and the door at number 58, the lantern on the keystone, the mullioned windows and the pierced balustrade. The door splits the palazzo in two: the first floor belongs to others, the second holds the rooms on the right-hand half — Standard towards the centre, Deluxe at the far end — and above, in the attic, the suite with its terrace, which cannot be seen from via Dione.",
  },

  camere: {
    titolo: "The four rooms",
    occhiello: "real floor area, different outlooks",
    prenota: "Book",
    daPrezzo: (prezzo: string) => `from ${prezzo}`,
    perNotte: "/ night",
    perNotteColazione: "/ night · breakfast included",
    spazioDellaCasa: "A space of the house",
    tariffaIndicativa: "indicative rate",
    metraturaDaMisurare: "floor area to be measured",
    mqDaMisurare: "m² to be measured",
    fotografiaDaFare: "photograph still to be taken",
    notaTariffe:
      "The rates shown are taken from public listings: the lowest found is €95 a night. They must be replaced with the house's own seasonal rates — and the suite's floor area is missing altogether.",
    tariffeIndicative: "indicative rates",
  },

  suite: {
    occhiello: "Top floor · terrace for your use alone",
    titolo: "The suite has a terrace it shares with no one.",
    testo: "A whole floor under the sky of Ortigia, with nobody above you. The terrace has a cane pergola for shade, great jars planted with agaves, and beyond the rooftops, the sea. You carry breakfast outside; in the evening the sun goes down behind the Maddalena while you are still sitting there.",
    prenota: "Book the suite",
  },

  palazzo: {
    titolo: "The palazzo and the street",
    occhiello: "five centuries of via Dione",
    p1: "Via Dione was the main decumanus of the Greek city. It appears intact in the model of Ortigia built by Giuseppe Costa in 1773, and again in a land registry map of 1916: the same street rebuilt after the earthquake of 1693, unchanged for nearly two and a half centuries.",
    p2: "Then, in the nineteen-thirties, five blocks between via Dione and via Cavour were gutted to open the regime's ceremonial avenue, erasing very fine examples of late fifteenth-century architecture. This façade is one of the survivors.",
    daVerificare: "to be verified",
    p3: "The depressed arch, the pierced mullioned windows and the balustrades speak of a late Catalan Gothic building, fifteenth or sixteenth century. If Francesco Di Natale is documented, we still need to know whether he signed the original building or a later intervention: the difference between «a historic palazzo» and «a fifteenth-century Catalan Gothic palazzo» is a large one, and it lies entirely in that document.",
    didascalia: "The mullioned windows and the pierced balustrade, from the pavement of via Dione.",
  },

  aPiedi: {
    titolo: "On foot from here",
    occhiello: "no transfer, no car",
    min: "min",
    daCronometrare: "to be timed",
    nota: "These minutes are estimates, not measurements. They need to be walked for real: it is the first thing guests check, and the easiest thing to be caught out on.",
  },

  mappa: {
    titolo: "Ortigia, the way we know it",
    occhiello: "tap a point · minutes on foot from the door",
    etichettaSvg:
      "A drawn map of Ortigia with the places we recommend. The list beside it gives the same places with the walking time from the door.",
    categorie: {
      monumenti: "What you came to see",
      mare: "Where to swim",
      mangiare: "Eating and drinking",
      pratico: "Practical",
    },
    min: "min",
    circa: "approx.",
    aPiedi: "on foot",
    puntoEtichetta: (nome: string, minuti: string) => `${nome}, ${minuti} on foot`,
    minutiDaCronometrare: "walking times to be measured",
    nota: "These minutes are estimates, not measurements: they need to be walked, because it is the first thing guests check. And for now the map holds only the places nobody could get wrong. The real value comes when we add yours: the right granita at the right hour, the trattoria where you eat, the rock with no tourists on it. That is the page guests photograph.",
  },

  gradini: {
    occhiello: "Said in advance",
    gradini: "steps",
    daContare: "to be counted",
    testo: "The rooms are on the second floor, the suite on the top one, and there is no lift in the building. We would rather say so here, on the home page, than let you find out with a suitcase in your hand.",
    fotoDaFare: "photograph still to be taken",
    didascalia: "In place of the staircase, for now, the second-floor landing.",
  },

  confronto: {
    titolo: "Here or on the portal",
    occhiello: "same bed, different terms",
    condizione: "Condition",
    sulPortale: "On the portal",
    quiDiretto: "Here, direct",
    righe: {
      tariffa: "Rate per night (Standard)",
      tariffaPortale: "from €105",
      tariffaDiretto: "from €99",
      colazione: "Breakfast",
      colazionePortale: "charged separately",
      checkout: "Check-out",
      checkoutPortale: "11:00, fixed",
      checkoutDiretto: "flexible, if the room is free",
      chiRisponde: "Who answers",
      chiRispondePortale: "the portal's support desk",
      chiRispondeDiretto: "us, on WhatsApp",
      conferma: "Confirmation",
      confermaPortale: "instant, automatic",
      confermaDiretto: (entro: string) => `within ${entro}, from a real person`,
      cancellazione: "Cancellation",
      cancellazionePortale: "as the portal decides",
      cancellazioneDiretto: "free until __ days before",
    },
    nota: "No clause obliges us to match the portals any more: we can say so openly, and it is the line that convinces people who arrive here after looking at Booking.",
  },

  galleria: {
    titolo: "All the photographs",
    occhiello: "filter by space · tap to enlarge",
    filtri: "Filter the photographs by space",
    tutte: "All",
    ingrandisci: (didascalia: string) => `Enlarge: ${didascalia}`,
    fotografiaIngrandita: "Enlarged photograph",
    precedente: "Previous photograph",
    successiva: "Next photograph",
    inCrescita: "still growing",
    nota: "Every photograph of the house ends up here. Still missing: the courtyard, the staircase, the entrance hall and the terrace seen from outside.",
    ambienti: {
      palazzo: "The palazzo",
      deluxe: "Deluxe",
      standard: "Standard",
      superior: "Superior",
      suite: "Suite",
      comuni: "Shared spaces",
    },
  },

  recensioni: {
    titolo: "What other people say",
    occhiello: "reviews from guests who actually slept here",
    su: "out of",
    conta: (n: number) => `${n} reviews`,
    rilevatoIl: "read on",
    vediTutte: "see them all",
    provenienza: "A selection of the reviews guests have left us on the platforms where they booked. We chose them, and they are not all of them: below are the links to the full lists, including the ones you won't find here.",
    verificate: "They are written by people who really stayed: the platforms verify that before publishing them.",
    testiMancanti: "texts on their way",
    testiMancantiSpiegazione: "The score above is real and can be checked. The individual reviews are not there yet: the ones exported from the listing are cut in half and machine-translated into English, and publishing them would mean putting words in someone's mouth. They will appear as soon as we have the full originals.",
    punteggioDaConfermare: "score to be confirmed",
    originale: (l: string) => `written in ${l}`,
    tradotta: "translated by us",
    leggiOriginale: (nome: string) => `Read ${nome}'s original review`,
    rispostaDellaCasa: "The house replied",
    lingue: {
      it: "Italian",
      en: "English",
      fr: "French",
      de: "German",
      pl: "Polish",
      es: "Spanish",
      he: "Hebrew",
      nl: "Dutch",
      pt: "Portuguese",
    } as Record<string, string>,
  },

  domande: {
    titolo: "Before you arrive",
    occhiello: "the questions people actually ask",
    senzaRisposta: "not answered yet",
    spiegazioneSenzaRisposta:
      "We haven't written it yet because we don't want to write a generic answer. What's needed:",
  },

  dotazioni: {
    "balcone-su-via": "balcony over via Dione",
    "vista-cortile": "courtyard view",
    "vista-mare": "sea view",
    "terrazzo-privato": "private terrace",
    "bagno-interno": "en-suite bathroom",
    "bagno-sul-pianerottolo": "private bathroom on the landing",
    "cabina-armadio": "walk-in wardrobe",
    "doccia-a-filo": "walk-in shower",
    "letto-queen": "queen bed",
    "letto-baldacchino": "four-poster bed",
    "terzo-letto": "third bed on the sofa",
    "angolo-colazione": "breakfast corner",
    "pietra-a-vista": "exposed stone",
    "soffitto-in-travi": "beamed ceiling",
  },

  footer: {
    prenotaDiretto: "Book direct",
    verificaDisponibilita: "Check availability",
    scriviciWhatsApp: "Write to us on WhatsApp",
    laSuite: "The suite with the terrace",
    dormireAOrtigia: "Sleeping in Ortigia",
    lingue: "Languages",
    privacy: "Privacy",
    cookie: "Cookies",
    condizioni: "Terms",
    cin: "CIN",
    selettoreLingua: "Choose your language",
  },

  traduzione: {
    bozza: "translation under review",
    avviso:
      "This page is translated from Italian and has not yet been read by a native speaker. If something sounds off, that's on us, not on the house.",
  },

  nonTrovata: {
    kicker: "Error 404",
    titolo: "This address leads nowhere.",
    testo: "The right door is number 58 on via Dione. If you were looking for a room, all four are on the home page.",
    torna: "Back to the home page",
    meta: {
      titolo: "Page not found · Calamùrn",
      descrizione:
        "The page you're looking for doesn't exist. Back to the Calamùrn home page, via Dione 58, Ortigia.",
    },
  },
};
