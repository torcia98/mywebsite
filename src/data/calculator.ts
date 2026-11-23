/**
 * ROI calculator model. All figures are INDICATIVE ASSUMPTIONS, shown to the visitor
 * next to the result. Tune them with real project data as it becomes available.
 */
import type { ServiceId } from './services';

export interface Slider {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  unit?: string;
  prefix?: string;
}

export interface CalcModel {
  /** Share of the time spent on the task that the automation removes. */
  automationRate: number;
  /** Label for the time-related slider, specific to the service. */
  hoursLabel: string;
  /** Extra lever: revenue gained or costs avoided, per year. */
  extra: Slider;
  extraLabel: string;
  extraKind: 'revenue' | 'cost';
  extraNote: string;
  /** Yearly € value of the extra lever. avgValue = average value of a new customer. */
  computeExtra: (v: number, avgValue: number) => number;
  /** Show the "average customer value" slider. */
  usesAvgValue?: boolean;
}

export const calcModels: Record<ServiceId, CalcModel> = {
  assistente: {
    automationRate: 0.6,
    hoursLabel: 'Ore a settimana passate a rispondere a clienti (per persona)',
    extra: { key: 'extra', label: 'Richieste clienti al mese', min: 50, max: 3000, step: 50, value: 400 },
    extraLabel: 'Ricavi dai clienti recuperati',
    usesAvgValue: true,
    extraKind: 'revenue',
    // Assumption: 6% of requests are lost today (late/no reply), the assistant recovers 60%, 30% become customers.
    extraNote: 'Ipotesi: il 6% delle richieste oggi va perso per risposte lente o fuori orario; l’assistente ne recupera il 60% e un terzo diventa cliente.',
    computeExtra: (requests, avgValue) => requests * 0.06 * 0.6 * 0.3 * 12 * avgValue,
  },
  ufficio: {
    automationRate: 0.7,
    hoursLabel: 'Ore a settimana di inserimento dati e passaggi manuali (per persona)',
    extra: { key: 'extra', label: 'Ordini o pratiche gestite al mese', min: 20, max: 5000, step: 20, value: 300 },
    extraLabel: 'Costo degli errori evitati',
    extraKind: 'cost',
    extraNote: 'Ipotesi: il 2% delle pratiche manuali contiene un errore che costa in media 35 € da correggere; l’automazione ne evita l’80%.',
    computeExtra: (n) => n * 0.02 * 35 * 0.8 * 12,
  },
  documenti: {
    automationRate: 0.75,
    hoursLabel: 'Ore a settimana su fatture, documenti e archiviazione (per persona)',
    extra: { key: 'extra', label: 'Documenti ricevuti al mese', min: 20, max: 5000, step: 20, value: 500 },
    extraLabel: 'Costo degli errori e dei ritardi evitati',
    extraKind: 'cost',
    extraNote: 'Ipotesi: il 3% dei documenti registrati a mano ha un errore o una scadenza mancata dal costo medio di 25 €; il controllo automatico ne evita il 70%.',
    computeExtra: (n) => n * 0.03 * 25 * 0.7 * 12,
  },
  marketing: {
    automationRate: 0.5,
    hoursLabel: 'Ore a settimana su post, newsletter e schede prodotto (per persona)',
    extra: { key: 'extra', label: 'Fatturato online o da marketing al mese', min: 0, max: 200000, step: 1000, value: 15000, prefix: '€ ' },
    extraLabel: 'Ricavi in più dalla comunicazione costante',
    extraKind: 'revenue',
    extraNote: 'Ipotesi: contenuti più frequenti e schede prodotto complete portano un +4% di vendite online.',
    computeExtra: (revenue) => revenue * 0.04 * 12,
  },
};

/** Sector presets: change the default values of the sliders. */
export const sectors = {
  generico: { label: 'Qualsiasi settore', hourlyCost: 28, avgValue: 300 },
  turismo: { label: 'Turismo e ristorazione', hourlyCost: 22, avgValue: 450 },
  commercio: { label: 'Commercio e e-commerce', hourlyCost: 24, avgValue: 120 },
  studi: { label: 'Studi professionali', hourlyCost: 38, avgValue: 900 },
  manifattura: { label: 'Manifattura e distribuzione', hourlyCost: 30, avgValue: 2500 },
} as const;

export type SectorId = keyof typeof sectors;

/** Working weeks per year used to annualise weekly hours. */
export const WEEKS_PER_YEAR = 46;
