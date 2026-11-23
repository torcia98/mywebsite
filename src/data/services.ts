/** Service catalogue (Italian). Placeholder copy: refine with real offers and prices. */
export interface Service {
  id: string;
  icon: 'chat' | 'doc' | 'flow';
  title: string;
  short: string;
  description: string;
  examples: string[];
  outcomes: string[];
}

export const services: Service[] = [
  {
    id: 'assistenti',
    icon: 'chat',
    title: 'Assistenti AI e WhatsApp',
    short: 'Rispondete ai clienti 24 ore su 24 su sito, WhatsApp e social, senza perdere il tocco umano.',
    description:
      'Un assistente virtuale addestrato sulle vostre informazioni (listini, orari, FAQ, procedure) che risponde in modo naturale, raccoglie richieste e passa la conversazione a una persona quando serve.',
    examples: [
      'Risposte automatiche su WhatsApp Business a domande su orari, prezzi e disponibilità',
      'Prenotazione di appuntamenti direttamente in chat',
      'Qualificazione dei contatti e invio al commerciale giusto',
      'Chatbot sul sito in italiano, inglese e altre lingue',
    ],
    outcomes: ['Meno telefonate ripetitive', 'Risposte immediate anche fuori orario', 'Più contatti qualificati'],
  },
  {
    id: 'documenti',
    icon: 'doc',
    title: 'Documenti e fatture',
    short: 'Estrazione automatica dei dati da fatture, DDT, ordini e contratti, direttamente nel vostro gestionale.',
    description:
      'Leggiamo i documenti che ricevete ogni giorno (PDF, email, scansioni, fatture elettroniche XML) ed estraiamo i dati che vi servono, controllati e pronti per il gestionale o il commercialista.',
    examples: [
      'Registrazione automatica delle fatture passive e riconciliazione con gli ordini',
      'Lettura di DDT e bolle di consegna',
      'Archiviazione intelligente e ricerca nei documenti aziendali',
      'Riepiloghi automatici di contratti e preventivi',
    ],
    outcomes: ['Ore di data entry risparmiate', 'Meno errori di trascrizione', 'Dati sempre aggiornati'],
  },
  {
    id: 'crm-email',
    icon: 'flow',
    title: 'CRM ed email',
    short: 'Flussi di lavoro che collegano email, CRM e strumenti che già usate, così niente resta indietro.',
    description:
      'Colleghiamo i vostri strumenti (email, CRM, fogli di calcolo, gestionale, calendario) e automatizziamo i passaggi ripetitivi: dallo smistamento delle email ai follow-up con i clienti.',
    examples: [
      'Smistamento e bozza di risposta automatica per le email in arrivo',
      'Aggiornamento automatico del CRM da email, form e telefonate',
      'Promemoria e follow-up ai clienti al momento giusto',
      'Report settimanali generati in automatico',
    ],
    outcomes: ['Nessun contatto dimenticato', 'Team concentrato sul lavoro di valore', 'Processi misurabili'],
  },
];
