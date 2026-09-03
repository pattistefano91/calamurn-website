/**
 * Textes d'interface et de rédaction, en français.
 * Traduits de l'italien ; en attente d'une relecture par une personne
 * de langue maternelle (spec 009, FR-014).
 */
import type { Testi } from "./it";

export const fr: Testi = {
  meta: {
    titolo: "Calamùrn · Palazzo Di Natale — quatre chambres à Ortygie, Syracuse",
    descrizione:
      "Quatre chambres dans un palais gothique catalan, via Dione 58, derrière la Piazza Archimede, à Ortygie. Réservation directe sur WhatsApp, sans commission.",
  },

  generale: {
    saltaAlContenuto: "Aller au contenu",
    daConfermare: "à confirmer",
    daDefinire: "à définir",
    chiudi: "Fermer",
    ospiti: (n: number) => (n === 1 ? "1 personne" : `${n} personnes`),
  },

  nav: {
    etichetta: "Sections du site",
    menu: "Menu",
    prenota: "Réserver",
    voci: {
      camere: "Les chambres",
      suite: "La suite",
      mappa: "La carte",
      palazzo: "Le palais",
      galleria: "Photos",
      ortigia: "Ortygie",
      domande: "Avant d'arriver",
    },
  },

  hero: {
    titolo: "Vous reconnaîtrez la porte.",
    lede: "Quatre chambres dans un palais gothique catalan, derrière la Piazza Archimede. L'arc, les fenêtres géminées et la balustrade ajourée sont les mêmes depuis cinq siècles.",
    cursore: "La même façade",
    cursoreEtichetta: "Heure du jour sur la façade",
  },

  prenotazione: {
    arrivo: "Arrivée",
    partenza: "Départ",
    ospiti: "Personnes",
    camera: "Chambre",
    tutte: "Indifférent",
    invia: "Réservez votre chambre",
    scriviMail: "écrivez-nous un e-mail",

    nota: (entro: string, orari: string) =>
      `Le bouton ouvre WhatsApp avec vos dates déjà écrites : vous n'avez rien à recopier. C'est une personne qui répond, en général sous ${entro}, de ${orari}. Aucune commission, aucun paiement en ligne.`,
    notaWhatsApp: "WhatsApp",
    nonUsiWhatsApp: "Vous n'utilisez pas WhatsApp ?",
    tempiDaConfermare: "délai de réponse à confirmer",
    contattiDaConfermare: "coordonnées à confirmer",
    contattiSpiegazione:
      "Le numéro WhatsApp et l'adresse e-mail sont encore provisoires : il faut les remplacer par les vrais avant la mise en ligne.",

    erroreDate: "Le départ doit suivre l'arrivée.",
    erroreCapienza: (camera: string, max: number | string) =>
      `La ${camera} accueille ${max} personnes au maximum : écrivez-nous quand même, nous chercherons une solution.`,

    messaggioApertura: "Bonjour, je souhaiterais vérifier les disponibilités au Calamùrn.",
    messaggioArrivo: "Arrivée",
    messaggioPartenza: "Départ",
    messaggioOspiti: "Personnes",
    messaggioCamera: "Chambre",
    messaggioIndifferente: "indifférent",
    messaggioDaDefinire: "(à définir)",
    messaggioSaluto: "Merci",
    oggettoMail: "Demande de disponibilité · Calamùrn",
  },

  disegno: {
    titolo: "Toute la maison, dessinée",
    occhiello: "touchez un espace · élévation et coupe",
    viste: "Vues du palais",
    prospetto: "Élévation",
    sezione: "Coupe",
    ridisegna: "↻ redessiner",
    mostra: (ambiente: string) => `Afficher ${ambiente}`,
    esplora: "▸ survolez pour explorer, touchez pour figer",
    bloccata: "● sélection figée — touchez de nouveau pour libérer",
    descrizioneProspetto: "Élévation du palais sur la via Dione : quatre niveaux. Au rez-de-chaussée, la porte au numéro 58, avec son arc surbaissé et sa lanterne. Au premier étage, d'autres propriétaires. Au deuxième, dans la moitié droite, la chambre Standard vers le centre et la Deluxe à l'extrémité, toutes deux avec balcon sur la rue. La Superior et la suite ne sont pas visibles d'ici : la première donne sur la cour intérieure, la seconde est sous les combles.",
    descrizioneSezione: "Coupe transversale du palais : au rez-de-chaussée le hall d'entrée au 58 ; au premier étage d'autres propriétaires ; au deuxième le palier commun, la chambre Standard à gauche, la Deluxe à droite et, au-delà de la cour intérieure, la Superior ; sous les combles la suite et sa terrasse. À droite, l'escalier qui dessert les quatre niveaux.",
    disegnoNonRilievo: "un dessin, pas un relevé",
    nota: "L'élévation et la coupe sont relevées d'après les photographies : le grand arc et la porte au 58, la lanterne sur la clé de voûte, les fenêtres géminées et la balustrade ajourée. La porte partage le palais en deux : au premier étage se trouvent d'autres propriétés, au deuxième les chambres sur la moitié droite — la Standard vers le centre, la Deluxe à l'extrémité — et au-dessus, dans les combles, la suite et sa terrasse, invisible depuis la via Dione.",
  },

  camere: {
    titolo: "Les quatre chambres",
    occhiello: "surfaces réelles, expositions différentes",
    prenota: "Réserver",
    daPrezzo: (prezzo: string) => `à partir de ${prezzo}`,
    perNotte: "/ nuit",
    perNotteColazione: "/ nuit · petit-déjeuner compris",
    spazioDellaCasa: "Un espace de la maison",
    tariffaIndicativa: "tarif indicatif",
    metraturaDaMisurare: "surface à mesurer",
    mqDaMisurare: "m² à mesurer",
    fotografiaDaFare: "photographie encore à faire",
    notaTariffe:
      "Les tarifs affichés proviennent des annonces publiques : le plus bas relevé est de 95 € la nuit. Ils doivent être remplacés par la grille saisonnière de la maison — et la surface de la suite manque entièrement.",
    tariffeIndicative: "tarifs indicatifs",
  },

  suite: {
    occhiello: "Dernier étage · terrasse à usage exclusif",
    titolo: "La suite a une terrasse qu'elle ne partage avec personne.",
    testo: "Un étage entier sous le ciel d'Ortygie, et personne au-dessus de vous. La terrasse a une pergola de roseaux pour l'ombre, des jarres plantées d'agaves, et par-dessus les toits, la mer. On y porte son petit-déjeuner ; le soir, le soleil disparaît derrière la Maddalena pendant que vous êtes encore assis.",
    prenota: "Réserver la suite",
  },

  palazzo: {
    titolo: "Le palais et la rue",
    occhiello: "cinq siècles de via Dione",
    p1: "La via Dione était le decumanus principal de la cité grecque. Elle apparaît intacte dans la maquette d'Ortygie réalisée par Giuseppe Costa en 1773, puis encore sur un cadastre de 1916 : la même rue reconstruite après le tremblement de terre de 1693, restée identique pendant près de deux siècles et demi.",
    p2: "Puis, dans les années trente, cinq îlots entre la via Dione et la via Cavour sont éventrés pour ouvrir l'avenue célébrant le régime, effaçant des exemples très fins d'architecture de la fin du XVe siècle. Cette façade fait partie des survivantes.",
    daVerificare: "à vérifier",
    p3: "L'arc surbaissé, les fenêtres géminées ajourées et les balustrades racontent une construction gothique catalane tardive, des XVe-XVIe siècles. Si Francesco Di Natale est documenté, il reste à savoir s'il a signé la construction d'origine ou une intervention postérieure : la différence entre « palais historique » et « palais gothique catalan du XVe siècle » est considérable, et elle tient tout entière dans ce document.",
    didascalia: "Les fenêtres géminées et la balustrade ajourée, depuis le trottoir de la via Dione.",
  },

  aPiedi: {
    titolo: "À pied d'ici",
    occhiello: "aucun transfert, aucune voiture",
    min: "min",
    daCronometrare: "à chronométrer",
    nota: "Ces minutes sont estimées, non mesurées. Il faut les parcourir vraiment : c'est la première chose que les hôtes vérifient, et la plus facile à démentir.",
  },

  mappa: {
    titolo: "Ortygie, telle que nous la connaissons",
    occhiello: "touchez un point · minutes à pied depuis la porte",
    etichettaSvg:
      "Carte dessinée d'Ortygie avec les lieux que nous conseillons. La liste à côté reprend les mêmes lieux avec le temps de marche depuis la porte.",
    categorie: {
      monumenti: "Ce que vous êtes venu voir",
      mare: "Où se baigner",
      mangiare: "Manger et boire",
      pratico: "Pratique",
    },
    min: "min",
    circa: "env.",
    aPiedi: "à pied",
    puntoEtichetta: (nome: string, minuti: string) => `${nome}, ${minuti} à pied`,
    minutiDaCronometrare: "temps de marche à mesurer",
    nota: "Ces minutes sont des estimations, pas des mesures : il faut les parcourir, car c'est la première chose que les hôtes vérifient. Et pour l'instant la carte ne porte que les lieux que personne ne peut manquer. La vraie valeur viendra quand nous y ajouterons les vôtres : la bonne granita à la bonne heure, la trattoria où vous mangez, le rocher sans touristes. C'est cette page-là que les hôtes photographient.",
  },

  gradini: {
    occhiello: "Dit à l'avance",
    gradini: "marches",
    daContare: "à compter",
    testo: "Les chambres sont à l'avant-dernier étage, la suite au dernier, et il n'y a pas d'ascenseur dans l'immeuble. Nous préférons le dire ici, en page d'accueil, plutôt que de vous le laisser découvrir la valise à la main.",
    fotoDaFare: "photographie encore à faire",
    didascalia: "À la place de l'escalier, pour l'instant, le palier du deuxième étage.",
  },

  confronto: {
    titolo: "Ici ou sur le portail",
    occhiello: "même lit, conditions différentes",
    condizione: "Condition",
    sulPortale: "Sur le portail",
    quiDiretto: "Ici, en direct",
    righe: {
      tariffa: "Tarif par nuit (Standard)",
      tariffaPortale: "à partir de 105 €",
      tariffaDiretto: "à partir de 99 €",
      colazione: "Petit-déjeuner",
      colazionePortale: "en supplément",
      checkout: "Départ",
      checkoutPortale: "11h00, fixe",
      checkoutDiretto: "souple, si la chambre est libre",
      chiRisponde: "Qui répond",
      chiRispondePortale: "le service d'assistance du portail",
      chiRispondeDiretto: "nous, sur WhatsApp",
      conferma: "Confirmation",
      confermaPortale: "immédiate, automatique",
      confermaDiretto: (entro: string) => `sous ${entro}, par une vraie personne`,
      cancellazione: "Annulation",
      cancellazionePortale: "selon le portail",
      cancellazioneDiretto: "gratuite jusqu'à __ jours avant",
    },
    nota: "Aucune clause ne nous oblige plus à nous aligner sur les portails : nous pouvons le dire ouvertement, et c'est la ligne qui convainc ceux qui arrivent ici après avoir regardé Booking.",
  },

  galleria: {
    titolo: "Toutes les photos",
    occhiello: "filtrez par espace · touchez pour agrandir",
    filtri: "Filtrer les photographies par espace",
    tutte: "Toutes",
    ingrandisci: (didascalia: string) => `Agrandir : ${didascalia}`,
    fotografiaIngrandita: "Photographie agrandie",
    precedente: "Photographie précédente",
    successiva: "Photographie suivante",
    inCrescita: "en cours",
    nota: "Toutes les photographies de la maison se retrouvent ici. Manquent encore la cour, l'escalier, le hall d'entrée et la terrasse vue de l'extérieur.",
    ambienti: {
      palazzo: "Le palais",
      deluxe: "Deluxe",
      standard: "Standard",
      superior: "Superior",
      suite: "Suite",
      comuni: "Espaces communs",
    },
  },

  recensioni: {
    titolo: "Ce qu'en disent les autres",
    occhiello: "avis d'hôtes qui ont vraiment dormi ici",
    su: "sur",
    conta: (n: number) => `${n} avis`,
    rilevatoIl: "relevé le",
    vediTutte: "les voir tous",
    provenienza: "Une sélection des avis que les hôtes nous ont laissés sur les plateformes où ils ont réservé. C'est nous qui les avons choisis, et ce ne sont pas tous : ci-dessous les liens vers les listes complètes, y compris ceux que vous ne trouverez pas ici.",
    verificate: "Ils sont écrits par des personnes qui ont réellement séjourné : les plateformes le vérifient avant de les publier.",
    testiMancanti: "textes à venir",
    testiMancantiSpiegazione: "La note ci-dessus est réelle et vérifiable. Les avis eux-mêmes ne le sont pas encore : ceux exportés de la fiche sont coupés en deux et traduits automatiquement en anglais, et les publier reviendrait à prêter à quelqu'un des mots qu'il n'a pas écrits. Ils arriveront dès que nous aurons les originaux complets.",
    punteggioDaConfermare: "note à confirmer",
    originale: (l: string) => `écrit en ${l}`,
    tradotta: "traduit par nous",
    leggiOriginale: (nome: string) => `Lire l'avis original de ${nome}`,
    rispostaDellaCasa: "La réponse de la maison",
    lingue: {
      it: "italien",
      en: "anglais",
      fr: "français",
      de: "allemand",
      pl: "polonais",
      es: "espagnol",
      he: "hébreu",
      nl: "néerlandais",
      pt: "portugais",
    } as Record<string, string>,
  },

  domande: {
    titolo: "Avant d'arriver",
    occhiello: "les vraies questions",
    senzaRisposta: "sans réponse",
    spiegazioneSenzaRisposta:
      "Nous ne l'avons pas encore écrite parce que nous ne voulons pas d'une réponse passe-partout. Il faut :",
  },

  dotazioni: {
    "balcone-su-via": "balcon sur la via Dione",
    "vista-cortile": "vue sur la cour",
    "vista-mare": "vue sur la mer",
    "terrazzo-privato": "terrasse privée",
    "bagno-interno": "salle de bains dans la chambre",
    "bagno-sul-pianerottolo": "salle de bains privée sur le palier",
    "cabina-armadio": "dressing",
    "doccia-a-filo": "douche à l'italienne",
    "letto-queen": "lit queen",
    "letto-baldacchino": "lit à baldaquin",
    "terzo-letto": "troisième couchage sur le canapé",
    "angolo-colazione": "coin petit-déjeuner",
    "pietra-a-vista": "pierre apparente",
    "soffitto-in-travi": "plafond à poutres",
  },

  footer: {
    prenotaDiretto: "Réserver en direct",
    verificaDisponibilita: "Vérifier les disponibilités",
    scriviciWhatsApp: "Écrivez-nous sur WhatsApp",
    laSuite: "La suite avec terrasse",
    dormireAOrtigia: "Dormir à Ortygie",
    lingue: "Langues",
    privacy: "Confidentialité",
    cookie: "Cookies",
    condizioni: "Conditions",
    cin: "CIN",
    selettoreLingua: "Choisissez votre langue",
  },

  traduzione: {
    bozza: "traduction à relire",
    avviso:
      "Cette page est traduite de l'italien et n'a pas encore été relue par une personne de langue maternelle. Si quelque chose sonne faux, c'est de notre fait, pas de celui de la maison.",
  },

  nonTrovata: {
    kicker: "Erreur 404",
    titolo: "Cette adresse ne mène nulle part.",
    testo: "La bonne porte est au 58 de la via Dione. Si vous cherchiez une chambre, les quatre sont sur la page d'accueil.",
    torna: "Retour à l'accueil",
    meta: {
      titolo: "Page introuvable · Calamùrn",
      descrizione:
        "La page recherchée n'existe pas. Retour à l'accueil du Calamùrn, via Dione 58, à Ortygie.",
    },
  },
};
