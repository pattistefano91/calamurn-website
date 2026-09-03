/**
 * I punteggi complessivi delle piattaforme (spec 012).
 *
 * Non sono calcolati dal sito: sono citazioni, e come ogni citazione portano la
 * fonte e la data del rilevamento. Senza la data diventano falsi da soli, col
 * passare del tempo (FR-009).
 */

export type Piattaforma = "google" | "booking";

export interface Punteggio {
  /** Come si chiama la piattaforma per il visitatore. */
  nome: string;
  /** Il voto come lo pubblica la piattaforma. */
  valore: number;
  /** Su quanto: Google va su 5, Booking su 10. */
  scala: number;
  /** Quante recensioni lo compongono; null finché il numero non è confermato. */
  recensioni: number | null;
  /** Quando è stato letto, in ISO. */
  rilevato: string;
  /** L'elenco pubblico completo, dove chiunque può verificare. */
  url: string;
  /** Se il dato viene dal pannello della casa o solo da fonti pubbliche. */
  confermato: boolean;
}

export const PIATTAFORME: Record<Piattaforma, Punteggio> = {
  google: {
    nome: "Google",
    valore: 4.8,
    scala: 5,
    recensioni: 68,
    rilevato: "2026-09-03",
    url: "https://maps.app.goo.gl/HJqeGzgmouQAmmg16",
    // Letto dall'esportazione della scheda, fornita dal proprietario.
    confermato: true,
  },
  booking: {
    nome: "Booking.com",
    valore: 9.2,
    scala: 10,
    // Le fonti pubbliche si contraddicono: 477, 461, 108 secondo l'aggregatore.
    // Il numero vero sta nella Extranet, ancora da esportare.
    recensioni: null,
    rilevato: "2026-09-02",
    url: "https://www.booking.com/reviews/it/hotel/calamurn-ortigia.html",
    confermato: false,
  },
};

/** Solo le piattaforme di cui possiamo dire qualcosa di vero. */
export const punteggiConfermati = (): Punteggio[] =>
  Object.values(PIATTAFORME).filter((p) => p.confermato);

export const punteggiDaConfermare = (): Punteggio[] =>
  Object.values(PIATTAFORME).filter((p) => !p.confermato);
