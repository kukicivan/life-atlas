export interface NewsItem {
  date: string;
  dateISO: string;
  title: string;
  description: string;
  link: string;
  cta: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "MARCH 15, 2026",
    dateISO: "2026-03-15",
    title: "Hidden Opportunity: Mistral AI Experimental Credits",
    description: "Mistral AI is now offering experimental API access with €150 monthly credit to developers working on their 2026 models. No credit card needed.",
    link: "/news/mistral-credits",
    cta: "READ MORE",
  },
];
