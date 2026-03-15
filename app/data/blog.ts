export interface BlogPost {
  date: string;
  dateISO: string;
  title: string;
  description: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    date: "MARCH 14, 2026",
    dateISO: "2026-03-14",
    title: "Building an AI Workflow",
    description: "A journey in patience, code, and why having a non-technical friend nearby is the secret to great success.",
    link: "/blog/ai-workflow",
  },
];
