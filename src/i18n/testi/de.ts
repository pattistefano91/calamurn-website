/**
 * Oberflächen- und Redaktionstexte, auf Deutsch.
 * Aus dem Italienischen übersetzt; wartet noch auf die Durchsicht durch eine
 * Person mit deutscher Muttersprache (spec 009, FR-014).
 */
import type { Testi } from "./it";

export const de: Testi = {
  meta: {
    titolo: "Calamùrn · Palazzo Di Natale — vier Zimmer in Ortigia, Syrakus",
    descrizione:
      "Vier Zimmer in einem katalanisch-gotischen Palazzo, Via Dione 58, hinter der Piazza Archimede in Ortigia. Direkt über WhatsApp buchen, ohne Provision.",
  },

  generale: {
    saltaAlContenuto: "Zum Inhalt springen",
    daConfermare: "noch zu bestätigen",
    daDefinire: "noch festzulegen",
    chiudi: "Schließen",
    ospiti: (n: number) => (n === 1 ? "1 Gast" : `${n} Gäste`),
  },

  nav: {
    etichetta: "Bereiche der Website",
    menu: "Menü",
    prenota: "Buchen",
    voci: {
      camere: "Die Zimmer",
      suite: "Die Suite",
      mappa: "Die Karte",
      palazzo: "Der Palazzo",
      galleria: "Fotos",
      ortigia: "Ortigia",
      domande: "Vor der Anreise",
    },
  },

  hero: {
    titolo: "Das Tor erkennen Sie sofort.",
    lede: "Vier Zimmer in einem katalanisch-gotischen Palazzo, hinter der Piazza Archimede. Der Bogen, die Biforien und die durchbrochene Balustrade sind seit fünf Jahrhunderten dieselben.",
    cursore: "Dieselbe Fassade",
    cursoreEtichetta: "Tageszeit auf der Fassade",
  },

  prenotazione: {
    arrivo: "Anreise",
    partenza: "Abreise",
    ospiti: "Gäste",
    camera: "Zimmer",
    tutte: "Egal",
    invia: "Buchen Sie Ihr Zimmer",
    scriviMail: "schreiben Sie uns eine E-Mail",

    nota: (entro: string, orari: string) =>
      `Der Knopf öffnet WhatsApp mit Ihren Daten bereits im Text: Sie müssen nichts abtippen. Es antwortet ein Mensch, in der Regel innerhalb von ${entro}, von ${orari}. Keine Provision, keine Zahlung online.`,
    notaWhatsApp: "WhatsApp",
    nonUsiWhatsApp: "Kein WhatsApp?",
    tempiDaConfermare: "Antwortzeit noch zu bestätigen",
    contattiDaConfermare: "Kontaktdaten noch zu bestätigen",
    contattiSpiegazione:
      "WhatsApp-Nummer und E-Mail-Adresse sind noch Platzhalter: Vor der Veröffentlichung müssen die echten eingetragen werden.",

    erroreDate: "Die Abreise muss nach der Anreise liegen.",
    erroreCapienza: (camera: string, max: number | string) =>
      `Das Zimmer ${camera} fasst höchstens ${max} Personen: Schreiben Sie uns trotzdem, wir finden eine Lösung.`,

    messaggioApertura: "Guten Tag, ich würde gerne die Verfügbarkeit im Calamùrn erfragen.",
    messaggioArrivo: "Anreise",
    messaggioPartenza: "Abreise",
    messaggioOspiti: "Gäste",
    messaggioCamera: "Zimmer",
    messaggioIndifferente: "egal",
    messaggioDaDefinire: "(noch offen)",
    messaggioSaluto: "Vielen Dank",
    oggettoMail: "Verfügbarkeitsanfrage · Calamùrn",
  },

  disegno: {
    titolo: "Das ganze Haus, gezeichnet",
    occhiello: "einen Raum antippen · Ansicht und Schnitt",
    viste: "Ansichten des Palazzo",
    prospetto: "Ansicht",
    sezione: "Schnitt",
    ridisegna: "↻ neu zeichnen",
    mostra: (ambiente: string) => `${ambiente} anzeigen`,
    esplora: "▸ zum Erkunden darüberfahren, zum Festhalten antippen",
    bloccata: "● Auswahl festgehalten — nochmals antippen zum Lösen",
    descrizioneProspetto: "Ansicht des Palazzo an der Via Dione: vier Ebenen. Im Erdgeschoss das Tor bei Nummer 58, mit gedrücktem Bogen und Laterne. Im ersten Stock andere Eigentümer. Im zweiten, in der rechten Hälfte, das Standard-Zimmer zur Mitte hin und die Deluxe am Ende, beide mit Balkon zur Straße. Superior und Suite sind von hier nicht zu sehen: Die erste geht zum Innenhof, die zweite liegt im Dachgeschoss.",
    descrizioneSezione: "Querschnitt durch den Palazzo: im Erdgeschoss die Durchfahrt bei Nummer 58; im ersten Stock andere Eigentümer; im zweiten der gemeinsame Treppenabsatz, links das Standard-Zimmer, rechts die Deluxe und, jenseits des Innenhofs, die Superior; im Dachgeschoss die Suite mit ihrer Terrasse. Rechts die Treppe, die alle vier Ebenen verbindet.",
    disegnoNonRilievo: "eine Zeichnung, keine Bauaufnahme",
    nota: "Ansicht und Schnitt sind nach Fotografien nachgezeichnet: der große Bogen und das Tor bei Nummer 58, die Laterne am Schlussstein, die Biforien und die durchbrochene Balustrade. Das Tor teilt den Palazzo in zwei Hälften: im ersten Stock liegen andere Eigentümer, im zweiten die Zimmer der rechten Hälfte — Standard zur Mitte hin, Deluxe am Ende — und darüber, im Dachgeschoss, die Suite mit ihrer Terrasse, die von der Via Dione aus nicht zu sehen ist.",
  },

  camere: {
    titolo: "Die vier Zimmer",
    occhiello: "echte Quadratmeter, verschiedene Ausblicke",
    prenota: "Buchen",
    daPrezzo: (prezzo: string) => `ab ${prezzo}`,
    perNotte: "/ Nacht",
    perNotteColazione: "/ Nacht · Frühstück inbegriffen",
    spazioDellaCasa: "Ein Raum des Hauses",
    tariffaIndicativa: "Richtpreis",
    metraturaDaMisurare: "Fläche noch zu messen",
    mqDaMisurare: "m² noch zu messen",
    fotografiaDaFare: "Foto steht noch aus",
    notaTariffe:
      "Die gezeigten Preise stammen aus öffentlichen Inseraten: der niedrigste gefundene liegt bei 95 € pro Nacht. Sie müssen durch die eigene Saisonpreisliste des Hauses ersetzt werden — und die Fläche der Suite fehlt ganz.",
    tariffeIndicative: "Richtpreise",
  },

  suite: {
    occhiello: "Oberstes Geschoss · Terrasse zur alleinigen Nutzung",
    titolo: "Die Suite hat eine Terrasse, die sie mit niemandem teilt.",
    testo: "Ein ganzes Geschoss unter dem Himmel von Ortigia, und über Ihnen niemand mehr. Auf der Terrasse eine Pergola aus Schilfrohr für den Schatten, große Krüge mit Agaven, und über den Dächern das Meer. Das Frühstück trägt man hinaus; abends verschwindet die Sonne hinter der Maddalena, während Sie noch sitzen.",
    prenota: "Die Suite buchen",
  },

  palazzo: {
    titolo: "Der Palazzo und die Straße",
    occhiello: "fünf Jahrhunderte Via Dione",
    p1: "Die Via Dione war der Hauptdecumanus der griechischen Stadt. Sie erscheint unversehrt in dem Modell von Ortigia, das Giuseppe Costa 1773 baute, und noch einmal in einem Katasterplan von 1916: dieselbe Straße, nach dem Erdbeben von 1693 wieder aufgebaut und fast zweieinhalb Jahrhunderte lang unverändert geblieben.",
    p2: "Dann, in den dreißiger Jahren, wurden fünf Häuserblöcke zwischen Via Dione und Via Cavour aufgerissen, um die Prachtstraße des Regimes zu öffnen, und mit ihnen sehr feine Beispiele der Architektur des späten 15. Jahrhunderts ausgelöscht. Diese Fassade gehört zu den Überlebenden.",
    daVerificare: "noch zu prüfen",
    p3: "Der gedrückte Bogen, die durchbrochenen Biforien und die Balustraden sprechen von einem spätgotisch-katalanischen Bau des 15. oder 16. Jahrhunderts. Falls Francesco Di Natale belegt ist, bleibt zu klären, ob er den ursprünglichen Bau verantwortete oder einen späteren Eingriff: der Unterschied zwischen «historischem Palazzo» und «katalanisch-gotischem Palazzo des 15. Jahrhunderts» ist groß, und er liegt ganz in diesem Dokument.",
    didascalia: "Die Biforien und die durchbrochene Balustrade, vom Gehsteig der Via Dione aus.",
  },

  aPiedi: {
    titolo: "Zu Fuß von hier",
    occhiello: "kein Transfer, kein Auto",
    min: "Min.",
    daCronometrare: "noch zu stoppen",
    nota: "Diese Minuten sind geschätzt, nicht gemessen. Sie müssen wirklich abgegangen werden: Es ist das Erste, was Gäste überprüfen, und das am leichtesten zu Widerlegende.",
  },

  mappa: {
    titolo: "Ortigia, wie wir es kennen",
    occhiello: "einen Punkt antippen · Gehminuten vom Tor",
    etichettaSvg:
      "Gezeichnete Karte von Ortigia mit den Orten, die wir empfehlen. Die Liste daneben führt dieselben Orte mit der Gehzeit vom Tor auf.",
    categorie: {
      monumenti: "Wofür Sie gekommen sind",
      mare: "Wo man ins Wasser geht",
      mangiare: "Essen und Trinken",
      pratico: "Praktisches",
    },
    min: "Min.",
    circa: "ca.",
    aPiedi: "zu Fuß",
    puntoEtichetta: (nome: string, minuti: string) => `${nome}, ${minuti} zu Fuß`,
    minutiDaCronometrare: "Gehzeiten noch zu messen",
    nota: "Diese Minuten sind Schätzungen, keine Messungen: Sie müssen abgegangen werden, denn es ist das Erste, was Gäste überprüfen. Und vorerst stehen auf der Karte nur die Orte, die niemand verfehlen kann. Der eigentliche Wert kommt, wenn wir Ihre hinzufügen: die richtige Granita zur richtigen Stunde, die Trattoria, in der Sie selbst essen, der Felsen ohne Touristen. Das ist die Seite, die Gäste fotografieren.",
  },

  gradini: {
    occhiello: "Vorher gesagt",
    gradini: "Stufen",
    daContare: "noch zu zählen",
    testo: "Die Zimmer liegen im vorletzten Geschoss, die Suite im obersten, und einen Aufzug gibt es im Haus nicht. Wir sagen es lieber hier, auf der Startseite, als Sie es mit dem Koffer in der Hand herausfinden zu lassen.",
    fotoDaFare: "Foto steht noch aus",
    didascalia: "Statt der Treppe vorerst der Treppenabsatz im zweiten Stock.",
  },

  confronto: {
    titolo: "Hier oder über das Portal",
    occhiello: "dasselbe Bett, andere Bedingungen",
    condizione: "Bedingung",
    sulPortale: "Über das Portal",
    quiDiretto: "Hier, direkt",
    righe: {
      tariffa: "Preis pro Nacht (Standard)",
      tariffaPortale: "ab 105 €",
      tariffaDiretto: "ab 99 €",
      colazione: "Frühstück",
      colazionePortale: "kostet extra",
      checkout: "Abreise",
      checkoutPortale: "11:00 Uhr, fest",
      checkoutDiretto: "flexibel, wenn das Zimmer frei ist",
      chiRisponde: "Wer antwortet",
      chiRispondePortale: "der Kundendienst des Portals",
      chiRispondeDiretto: "wir, über WhatsApp",
      conferma: "Bestätigung",
      confermaPortale: "sofort, automatisch",
      confermaDiretto: (entro: string) => `innerhalb von ${entro}, von einem Menschen`,
      cancellazione: "Stornierung",
      cancellazionePortale: "nach den Regeln des Portals",
      cancellazioneDiretto: "kostenlos bis __ Tage vorher",
    },
    nota: "Keine Klausel zwingt uns mehr, die Preise der Portale zu spiegeln: Wir dürfen das offen sagen, und es ist die Zeile, die jene überzeugt, die nach einem Blick auf Booking hier landen.",
  },

  galleria: {
    titolo: "Alle Fotos",
    occhiello: "nach Bereich filtern · zum Vergrößern antippen",
    filtri: "Fotografien nach Bereich filtern",
    tutte: "Alle",
    ingrandisci: (didascalia: string) => `Vergrößern: ${didascalia}`,
    fotografiaIngrandita: "Vergrößerte Fotografie",
    precedente: "Vorheriges Foto",
    successiva: "Nächstes Foto",
    inCrescita: "wächst noch",
    nota: "Hier laufen alle Fotografien des Hauses zusammen. Es fehlen noch der Innenhof, die Treppe, die Durchfahrt und die Terrasse von außen.",
    ambienti: {
      palazzo: "Der Palazzo",
      deluxe: "Deluxe",
      standard: "Standard",
      superior: "Superior",
      suite: "Suite",
      comuni: "Gemeinschaftsräume",
    },
  },

  recensioni: {
    titolo: "Was andere sagen",
    occhiello: "Bewertungen von Gästen, die wirklich hier geschlafen haben",
    su: "von",
    conta: (n: number) => `${n} Bewertungen`,
    rilevatoIl: "gelesen am",
    vediTutte: "alle ansehen",
    provenienza: "Eine Auswahl der Bewertungen, die Gäste uns auf den Plattformen hinterlassen haben, über die sie gebucht haben. Wir haben sie ausgewählt, und es sind nicht alle: unten stehen die Links zu den vollständigen Listen, auch zu den Bewertungen, die Sie hier nicht finden.",
    verificate: "Sie stammen von Menschen, die tatsächlich hier übernachtet haben: die Plattformen prüfen das, bevor sie sie veröffentlichen.",
    testiMancanti: "Texte folgen",
    testiMancantiSpiegazione: "Die Bewertung oben ist echt und nachprüfbar. Die einzelnen Bewertungen noch nicht: die aus dem Eintrag exportierten sind in der Mitte abgeschnitten und maschinell ins Englische übersetzt, und sie zu veröffentlichen hieße, jemandem Worte in den Mund zu legen. Sie kommen, sobald wir die vollständigen Originale haben.",
    punteggioDaConfermare: "Bewertung noch zu bestätigen",
    originale: (l: string) => `geschrieben auf ${l}`,
    tradotta: "von uns übersetzt",
    leggiOriginale: (nome: string) => `Original der Bewertung von ${nome} lesen`,
    rispostaDellaCasa: "Die Antwort des Hauses",
    lingue: {
      it: "Italienisch",
      en: "Englisch",
      fr: "Französisch",
      de: "Deutsch",
      pl: "Polnisch",
      es: "Spanisch",
      he: "Hebräisch",
      nl: "Niederländisch",
      pt: "Portugiesisch",
    } as Record<string, string>,
  },

  domande: {
    titolo: "Vor der Anreise",
    occhiello: "die Fragen, die wirklich gestellt werden",
    senzaRisposta: "noch ohne Antwort",
    spiegazioneSenzaRisposta:
      "Wir haben sie noch nicht geschrieben, weil wir keine allgemeine Antwort geben wollen. Dafür fehlt:",
  },

  dotazioni: {
    "balcone-su-via": "Balkon zur Via Dione",
    "vista-cortile": "Blick in den Innenhof",
    "vista-mare": "Meerblick",
    "terrazzo-privato": "eigene Terrasse",
    "bagno-interno": "Bad im Zimmer",
    "bagno-sul-pianerottolo": "eigenes Bad auf dem Treppenabsatz",
    "cabina-armadio": "begehbarer Kleiderschrank",
    "doccia-a-filo": "bodengleiche Dusche",
    "letto-queen": "Queensize-Bett",
    "letto-baldacchino": "Himmelbett",
    "terzo-letto": "drittes Bett auf dem Sofa",
    "angolo-colazione": "Frühstücksecke",
    "pietra-a-vista": "Sichtmauerwerk",
    "soffitto-in-travi": "Balkendecke",
  },

  footer: {
    prenotaDiretto: "Direkt buchen",
    verificaDisponibilita: "Verfügbarkeit anfragen",
    scriviciWhatsApp: "Schreiben Sie uns über WhatsApp",
    laSuite: "Die Suite mit der Terrasse",
    dormireAOrtigia: "Übernachten in Ortigia",
    lingue: "Sprachen",
    privacy: "Datenschutz",
    cookie: "Cookies",
    condizioni: "Bedingungen",
    cin: "CIN",
    selettoreLingua: "Sprache wählen",
  },

  traduzione: {
    bozza: "Übersetzung in Durchsicht",
    avviso:
      "Diese Seite ist aus dem Italienischen übersetzt und wurde noch nicht von einer Person mit deutscher Muttersprache gegengelesen. Wenn etwas schief klingt, liegt das an uns und nicht am Haus.",
  },

  nonTrovata: {
    kicker: "Fehler 404",
    titolo: "Diese Adresse führt nirgendwohin.",
    testo: "Das richtige Tor ist Nummer 58 in der Via Dione. Wenn Sie ein Zimmer gesucht haben: alle vier stehen auf der Startseite.",
    torna: "Zurück zur Startseite",
    meta: {
      titolo: "Seite nicht gefunden · Calamùrn",
      descrizione:
        "Die gesuchte Seite gibt es nicht. Zurück zur Startseite des Calamùrn, Via Dione 58, Ortigia.",
    },
  },
};
