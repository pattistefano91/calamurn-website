/**
 * Composizione della richiesta di disponibilità (spec 003).
 *
 * Nessun dato lascia il browser: qui si costruiscono solo due indirizzi, uno
 * per WhatsApp e uno per la posta. Il messaggio è nella lingua della pagina,
 * con le date scritte per esteso perché «12/06» non significa la stessa cosa
 * ovunque (spec 009, FR-010).
 */
import { casa } from "./casa";
import { t, dataLunga, type Lingua } from "../i18n";

export interface Richiesta {
  arrivo: string; // ISO, oppure "" se non scelta
  partenza: string;
  ospiti: string;
  camera: string; // nome pubblico della camera, oppure "" per indifferente
}

export function dataLeggibile(lingua: Lingua, iso: string): string {
  return dataLunga(lingua, iso) ?? t(lingua).prenotazione.messaggioDaDefinire;
}

export function messaggio(lingua: Lingua, r: Richiesta): string {
  const p = t(lingua).prenotazione;
  return [
    p.messaggioApertura,
    `${p.messaggioArrivo}: ${dataLeggibile(lingua, r.arrivo)}`,
    `${p.messaggioPartenza}: ${dataLeggibile(lingua, r.partenza)}`,
    `${p.messaggioOspiti}: ${r.ospiti}`,
    `${p.messaggioCamera}: ${r.camera || p.messaggioIndifferente}`,
  ].join("\n");
}

export function linkWhatsApp(lingua: Lingua, r: Richiesta): string {
  const numero = casa.contatti.whatsapp.valore;
  return `https://wa.me/${numero}?text=${encodeURIComponent(messaggio(lingua, r))}`;
}

export function linkPosta(lingua: Lingua, r: Richiesta): string {
  const p = t(lingua).prenotazione;
  const indirizzo = casa.contatti.email.valore;
  const corpo = `${messaggio(lingua, r)}\n\n${p.messaggioSaluto}`;
  return `mailto:${indirizzo}?subject=${encodeURIComponent(
    p.oggettoMail,
  )}&body=${encodeURIComponent(corpo)}`;
}

export function richiestaVuota(lingua: Lingua): Richiesta {
  return {
    arrivo: "",
    partenza: "",
    ospiti: t(lingua).generale.ospiti(2),
    camera: "",
  };
}

/**
 * Spec 003, FR-007 chiede che la costruzione fallisca finché i contatti sono
 * segnaposto. Finché il numero reale non arriva il sito resta un'anteprima:
 * qui si avvisa in modo rumoroso e in pagina compare un segnaposto dichiarato.
 */
export function contattiConfermati(): boolean {
  return casa.contatti.whatsapp.confermato && casa.contatti.email.confermato;
}
