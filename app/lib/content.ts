import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content');

// ----- Types -----

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  cta?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export interface Tool {
  title: string;
  description: string;
  command: string;
  sourceUrl: string;
  prerequisites: string;
  readmeUrl: string;
}

// ----- Markdown posts (blog / news) -----

function getPostsDir(section: 'blog' | 'news') {
  return path.join(contentDir, section);
}

export function getAllPosts(section: 'blog' | 'news'): PostMeta[] {
  const dir = getPostsDir(section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        author: data.author,
        cta: data.cta,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(section: 'blog' | 'news', slug: string): Post | null {
  const filePath = path.join(getPostsDir(section), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content) as string;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    author: data.author,
    cta: data.cta,
    contentHtml,
  };
}

export function getAllSlugs(section: 'blog' | 'news'): string[] {
  const dir = getPostsDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

// ----- Tools (JSON) -----

export function getTools(): Tool[] {
  const filePath = path.join(contentDir, 'tools.json');
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
