/**
 * Composizione della richiesta di disponibilità (spec 003).
 *
 * Nessun dato lascia il browser: qui si costruiscono solo due indirizzi,
 * uno per WhatsApp e uno per la posta.
 */
import { casa } from "./casa";

export interface Richiesta {
  arrivo: string; // ISO, oppure "" se non scelta
  partenza: string;
  ospiti: string;
  camera: string; // nome pubblico della camera, oppure "" per indifferente
}

const SEGNAPOSTO_DATA = "(da definire)";

/** Data non ambigua in tutte le lingue: 12 giugno 2026, non 12/06. */
export function dataLeggibile(iso: string): string {
  if (!iso) return SEGNAPOSTO_DATA;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return SEGNAPOSTO_DATA;
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function messaggio(r: Richiesta): string {
  return [
    `Buongiorno, vorrei verificare la disponibilità al ${casa.nome}.`,
    `Arrivo: ${dataLeggibile(r.arrivo)}`,
    `Partenza: ${dataLeggibile(r.partenza)}`,
    `Ospiti: ${r.ospiti || "2 ospiti"}`,
    `Camera: ${r.camera || "indifferente"}`,
  ].join("\n");
}

export function linkWhatsApp(r: Richiesta): string {
  const numero = casa.contatti.whatsapp.valore;
  return `https://wa.me/${numero}?text=${encodeURIComponent(messaggio(r))}`;
}

export function linkPosta(r: Richiesta): string {
  const indirizzo = casa.contatti.email.valore;
  const oggetto = `Richiesta disponibilità ${casa.nome}`;
  const corpo = `${messaggio(r)}\n\nGrazie`;
  return `mailto:${indirizzo}?subject=${encodeURIComponent(
    oggetto,
  )}&body=${encodeURIComponent(corpo)}`;
}

export const richiestaVuota: Richiesta = {
  arrivo: "",
  partenza: "",
  ospiti: "2 ospiti",
  camera: "",
};

/**
 * Spec 003, FR-007 chiede che la costruzione fallisca finché i contatti sono
 * segnaposto. Finché il numero reale non arriva il sito resta un'anteprima:
 * qui si avvisa in modo rumoroso e in pagina compare un segnaposto dichiarato.
 */
export function contattiConfermati(): boolean {
  return casa.contatti.whatsapp.confermato && casa.contatti.email.confermato;
}
