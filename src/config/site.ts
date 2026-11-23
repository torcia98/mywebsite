/**
 * Central place for brand and business details.
 * Everything here is PLACEHOLDER content: replace before publishing.
 */
export const site = {
  name: 'Automa',
  tagline: 'Intelligenza artificiale semplice per le PMI italiane',
  description:
    'Automazioni e assistenti AI su misura per piccole e medie imprese: chatbot e WhatsApp, documenti e fatture, CRM ed email. Risultati concreti, senza complicazioni.',
  legal: {
    companyName: 'Automa S.r.l.', // placeholder
    vat: 'P.IVA 00000000000', // placeholder
    address: 'Via Esempio 1, 20100 Milano (MI)', // placeholder
    rea: 'REA MI-0000000', // placeholder
    pec: 'automa@pec.example.it', // placeholder
  },
  contact: {
    email: 'ciao@example.it', // placeholder
    phone: '+39 02 0000 0000', // placeholder
    whatsapp: 'https://wa.me/390000000000', // placeholder
  },
  /**
   * Booking: link to a scheduling tool (Calendly, Cal.com, TidyCal…).
   * Leave empty to hide the "book a call" button on the contact page.
   */
  bookingUrl: '',
  /**
   * Where the contact form posts to. Any form backend works on a static site
   * (Formspree, Basin, Netlify Forms, a custom endpoint…).
   * Leave empty to keep the form in demo mode (no data is sent).
   */
  formEndpoint: '',
  social: {
    linkedin: 'https://www.linkedin.com/', // placeholder
  },
} as const;
