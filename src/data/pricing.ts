/**
 * Plans from the "Catalogo servizi Automa" doc. Monthly price range depends on volumes.
 * Keep in sync with the catalog when prices change.
 */
export interface Plan {
  id: string;
  name: string;
  forWho: string;
  priceFrom: number;
  priceTo: number;
  setup: number;
  featured?: boolean;
  badge?: string;
  packages: { name: string; text: string }[];
}

export const plans: Plan[] = [
  {
    id: 'accoglienza',
    name: 'Accoglienza',
    forWho: 'Turismo e ospitalità: tour operator, agriturismi, B&B, ristoranti',
    priceFrom: 199,
    priceTo: 349,
    setup: 790,
    featured: true,
    badge: 'Il più scelto dal turismo',
    packages: [
      { name: 'Assistente virtuale', text: 'Risponde 24 ore su 24 su sito e WhatsApp a orari, prezzi e disponibilità.' },
      { name: 'Risposta lampo', text: 'Ogni nuova richiesta riceve una risposta personalizzata entro 2 minuti.' },
      { name: 'Recensioni', text: 'Risposte pronte a ogni recensione, in italiano e in inglese, entro un giorno.' },
    ],
  },
  {
    id: 'ufficio',
    name: 'Ufficio in Ordine',
    forWho: 'Studi professionali, artigiani, PMI che lavorano con altre aziende',
    priceFrom: 149,
    priceTo: 249,
    setup: 590,
    packages: [
      { name: 'Segretaria della posta', text: 'Ogni mattina trovate solo le email che hanno davvero bisogno di voi.' },
      { name: 'Incasso gentile', text: 'Solleciti con il tono giusto per ogni cliente, senza telefonate imbarazzanti.' },
      { name: 'Report del lunedì', text: 'Una pagina con incassi, fatture aperte e priorità della settimana.' },
    ],
  },
  {
    id: 'crescita',
    name: 'Crescita',
    forWho: 'Chi vende su appuntamento: immobiliari, installatori, consulenti',
    priceFrom: 199,
    priceTo: 329,
    setup: 890,
    packages: [
      { name: 'Risposta lampo', text: 'Chi risponde per primo prende il cliente: da oggi siete sempre voi.' },
      { name: 'CRM pilota automatico', text: 'Contatti e trattative sempre aggiornati, con i follow-up già scritti.' },
      { name: 'Riattiva clienti', text: 'Due campagne all’anno per riportare i clienti che non tornano da un po’.' },
    ],
  },
];
