export interface Source {
  title: string;
  publisher?: string;
  url?: string;
  note?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface DataTable {
  caption: string;
  head: string[];
  rows: string[][];
}

export interface Section {
  id: string;
  heading: string;
  body: string[];
  table?: DataTable;
}

export interface View {
  holder: string;
  text: string;
}

export interface Perspectives {
  heading: string;
  intro?: string;
  views: View[];
}

export interface Chapter {
  slug: string;
  title: string;
  titleSr: string; // Cyrillic
  era: string;
  summary: string;
  lead: string;
  facts: Fact[];
  sections: Section[];
  perspectives?: Perspectives;
  sources: Source[];
}

export type Theme = 'war' | 'kosovo' | 'politics' | 'crime' | 'world';

export interface TimelineEvent {
  year: number;
  date: string;
  title: string;
  text: string;
  themes: Theme[];
  chapter?: string;
}
