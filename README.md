# Automa – sito web (placeholder)

Sito marketing statico per un'agenzia di AI e automazione rivolta alle PMI italiane.
Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statico in dist/
npm run preview
```

## Struttura

| Path | Contenuto |
| --- | --- |
| `src/config/site.ts` | Nome, dati legali, contatti, link di prenotazione e endpoint del form (**tutti segnaposto**) |
| `src/data/services.ts` | Catalogo dei quattro servizi (testi dal documento "Testi del sito") |
| `src/data/calculator.ts` | Modello del calcolatore: percentuali di automazione e ipotesi per servizio, preset per settore |
| `src/components/demos/` | Demo interattive: chat WhatsApp, flusso ordini prima/dopo, lettura fatture, schede prodotto |
| `src/i18n/ui.ts` | Stringhe UI, rotte localizzate, interruttore lingua |
| `src/pages/` | Pagine italiane: home, servizi, calcolatore, come-lavoriamo, chi-siamo, contatti, privacy, cookie, 404 |
| `src/styles/global.css` | Tema Tailwind (palette brand, font) |

## Demo e calcolatore

Le demo sono simulazioni scriptate che girano nel browser: nessuna chiamata a servizi di IA e nessun dato inviato.
Gli esempi sono scenari verosimili, non clienti reali. Le ipotesi del calcolatore sono in `src/data/calculator.ts`
e vengono mostrate al visitatore: aggiornatele con i dati dei primi progetti.

## Form di contatto

Il sito è statico, quindi il form invia a un servizio esterno. Imposta `formEndpoint`
in `src/config/site.ts` (Formspree, Basin, Netlify Forms, endpoint custom…).
Finché è vuoto il form resta in **modalità demo** e non invia dati.
Per un calendario di prenotazione (Calendly, Cal.com…) imposta `bookingUrl`.

## Aggiungere l'inglese

1. Crea le pagine in `src/pages/en/` usando gli slug in `routes.en` di `src/i18n/ui.ts`.
2. Completa le stringhe `ui.en`.
3. Imposta `showLanguageSwitcher = true`.

Astro i18n è già configurato (`it` di default senza prefisso, `en` sotto `/en/`), anche per la sitemap.

## Privacy e cookie

I font sono self-hosted (`@fontsource`), nessun servizio di terze parti e nessun cookie
di profilazione: per questo non c'è banner cookie. Se aggiungi analytics, mappe, video
incorporati o pixel, serve un banner di consenso e va aggiornata la cookie policy.
I testi legali sono segnaposto da far verificare a un consulente.

## Prima della pubblicazione

- [ ] Dominio reale in `astro.config.mjs` e `public/robots.txt`
- [ ] Nome, logo, palette e dati legali in `src/config/site.ts`
- [ ] Testi, numeri e testimonianze reali
- [ ] `formEndpoint` (ed eventualmente `bookingUrl`)
- [ ] Revisione legale di privacy e cookie policy
