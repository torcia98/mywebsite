/**
 * Service catalogue (Italian). Copy adapted from the doc "Testi del sito: offerta servizi".
 * Examples are illustrative placeholders until real case studies are available.
 */
export type ServiceId = 'assistente' | 'ufficio' | 'documenti' | 'marketing';
export type IconName = 'chat' | 'flow' | 'doc' | 'spark';

export interface Service {
  id: ServiceId;
  icon: IconName;
  title: string;
  shortTitle: string;
  hook: string;
  description: string;
  benefits: string[];
  example: string;
}

export const services: Service[] = [
  {
    id: 'assistente',
    icon: 'chat',
    title: 'Assistente virtuale per i clienti',
    shortTitle: 'Assistente virtuale',
    hook: 'Rispondete ai clienti 24 ore su 24, anche quando l’ufficio è chiuso.',
    description:
      'Un assistente intelligente sul vostro sito, su WhatsApp o via email risponde alle domande più frequenti, raccoglie richieste e prende appuntamenti. Quando serve una persona, passa la conversazione al vostro team con tutte le informazioni già pronte.',
    benefits: [
      'Nessun cliente lasciato senza risposta, nemmeno la sera o nel weekend',
      'Meno telefonate ripetitive per il vostro personale',
      'Parla italiano e inglese, così seguite anche i clienti stranieri',
    ],
    example:
      'Un agriturismo con 10 camere in Val d’Orcia riceve ogni giorno 30-40 messaggi tra WhatsApp ed email, spesso in inglese, per chiedere disponibilità, prezzi e orari del ristorante. L’assistente risponde subito, propone le date libere e inoltra al titolare solo le prenotazioni da confermare.',
  },
  {
    id: 'ufficio',
    icon: 'flow',
    title: 'Automazione delle attività d’ufficio',
    shortTitle: 'Automazione d’ufficio',
    hook: 'Basta copiare dati da un foglio all’altro.',
    description:
      'Colleghiamo gli strumenti che usate già (email, Excel, gestionale, fatturazione) e facciamo in modo che i passaggi ripetitivi avvengano da soli. Voi controllate il risultato, il resto lo fa il sistema.',
    benefits: [
      'Ore di lavoro manuale recuperate ogni settimana',
      'Meno errori di battitura e dati mancanti',
      'Processi più veloci, dall’ordine alla fattura',
    ],
    example:
      'Un distributore di ricambi auto in Brianza riceve ogni giorno decine di ordini dalle officine via email, in PDF, in Excel o scritti direttamente nel testo del messaggio. Il sistema legge ogni ordine, lo inserisce nel gestionale e avvisa il magazzino, senza che nessuno debba ricopiarlo.',
  },
  {
    id: 'documenti',
    icon: 'doc',
    title: 'Gestione intelligente dei documenti',
    shortTitle: 'Documenti intelligenti',
    hook: 'Fatture, contratti e moduli letti e archiviati in automatico.',
    description:
      'L’intelligenza artificiale legge i documenti che ricevete, ne estrae le informazioni importanti (importi, scadenze, nomi, codici) e le mette dove servono. Trovare un documento diventa questione di secondi.',
    benefits: ['Archivio ordinato e ricercabile', 'Scadenze sempre sotto controllo', 'Meno tempo speso in attività amministrative'],
    example:
      'Uno studio di commercialisti a Bologna con 80 clienti, tra artigiani e piccole imprese, riceve ogni mese centinaia di ricevute e note spese in foto o PDF. Il sistema le legge, controlla i dati principali e le prepara per la registrazione, segnalando solo quelle con anomalie.',
  },
  {
    id: 'marketing',
    icon: 'spark',
    title: 'Contenuti e marketing con l’IA',
    shortTitle: 'Contenuti e marketing',
    hook: 'Comunicate con costanza, anche senza un ufficio marketing.',
    description:
      'Vi aiutiamo a usare l’intelligenza artificiale per preparare post, newsletter, descrizioni di prodotto e risposte alle recensioni, sempre con il vostro tono di voce. Voi approvate, noi impostiamo il metodo.',
    benefits: ['Presenza online costante con meno fatica', 'Testi coerenti con il vostro marchio', 'Più tempo per curare i rapporti con i clienti'],
    example:
      'Un’azienda di arredamento pugliese con un e-commerce di 300 prodotti aveva molte schede vuote o copiate dal catalogo del fornitore. In poche settimane tutte le schede hanno descrizioni chiare, pronte anche in inglese per la vendita all’estero.',
  },
];

export const serviceById = Object.fromEntries(services.map((s) => [s.id, s])) as Record<ServiceId, Service>;
