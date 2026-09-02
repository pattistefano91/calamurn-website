// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// [NEEDS CLARIFICATION — spec 010/011] il dominio di produzione non è confermato.
// Finché non lo è, il sito resta su un indirizzo Vercel non indicizzabile e questo
// valore serve solo a generare indirizzi canonici e mappa del sito coerenti.
const SITO = process.env.SITE_URL ?? "https://calamurn.it";

export default defineConfig({
  site: SITO,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],

  security: {
    // La politica di sicurezza dei contenuti la scrive Astro, perché è l'unico
    // a conoscere l'impronta degli script che genera in pagina: una regola
    // fissa scritta a mano in vercel.json li bloccherebbe tutti
    // (spec 011, FR-009).
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src https://fonts.gstatic.com",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", "https://fonts.googleapis.com"],
      },
      scriptDirective: {
        resources: ["'self'"],
      },
    },
  },

  build: {
    inlineStylesheets: "auto",
  },
  image: {
    // Le sorgenti in src/assets/photos/ arrivano già a 2400 px dal manifesto;
    // qui si producono soltanto le varianti responsive. Il dimensionamento lo
    // fa il foglio di stile «Ombra», quindi Astro non deve iniettare il proprio.
    layout: "none",
    responsiveStyles: false,
  },
});
