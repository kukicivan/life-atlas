# Life Atlas 🌐

**A minimal, functional hub for tools, AI journeys, and hidden opportunities.**

Live at [lifeatlas.site](https://lifeatlas.site) — built with Next.js, deployed on Vercel.

## 🚀 Quick Start

```bash
git clone git@github.com:kukicivan/life-atlas.git
cd life-atlas
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in.

## 📦 What's Inside

### 🛠️ **Practical Utilities**
- **Ubuntu Automation Script** — One-liner setup for fresh Ubuntu systems
- **Instagram Photo Downloader** — Archive IG photos with captions and sorting
- **IG Screenshot Extractor** — Pull media and metadata from screenshots
- **MD2Docx Converter** — Markdown to professional Word documents

### 📝 **Blog**
Personal workflow experiences, AI tool breakdowns, and actionable guides. Written from real experience, not filler.

### 📰 **News**
High-signal opportunities — free credits, developer programs, tools worth knowing about. Every post has a direct link to claim the benefit.

## 📁 Project Structure

```
life-atlas/
├── app/                    # Next.js pages & components
│   ├── blog/[slug]/        # Dynamic blog routes
│   ├── news/[slug]/        # Dynamic news routes
│   ├── tools/              # Tools listing
│   ├── about/              # About page
│   ├── components/         # NavBar, UtilityCard, etc.
│   └── lib/content.ts      # Content reading library
├── content/                # ← CMS content lives here
│   ├── blog/*.md           # Blog posts (Markdown + frontmatter)
│   ├── news/*.md           # News items (Markdown + frontmatter)
│   └── tools.json          # Tools data
└── public/bin/             # Downloadable scripts & tools
```

## ✍️ Adding Content

No code changes needed. See [UPUTSTVO.md](UPUTSTVO.md) for full instructions.

### New blog post
```bash
# Create content/blog/my-new-post.md with frontmatter:
---
title: "Post Title"
date: "2026-04-01"
description: "Short description for listings and SEO."
author: "Ivan Kukić"
---

Your markdown content here...
```

### New news item
Same format in `content/news/my-news.md` — add optional `cta: "BUTTON TEXT"` to frontmatter.

### New tool
Add an object to `content/tools.json`, put script files in `public/bin/tool-name/`.

### Deploy
```bash
git add .
git commit -m "add: new post"
git push
```
Vercel auto-deploys. Live in ~1 minute.

## ⚡ Tech Stack

- **Next.js 16** — App Router, static generation
- **gray-matter + marked** — Markdown CMS
- **Vercel** — Hosting & CDN
- **Google Analytics** — Traffic tracking
- **JSON-LD** — Structured data for SEO
- **Open Graph** — Social media previews

## 🔧 Requirements

- **Node.js 18+**
- **npm**

## � SEO

All built-in, auto-updates when you add content:

- **JSON-LD Structured Data** — `WebSite` + `Person` on homepage, `Article` on every post
- **Open Graph + Twitter Cards** — Generated from frontmatter (title, description, date)
- **Dynamic Sitemap** — `sitemap.xml` auto-discovers all posts from `content/`
- **Canonical URLs** — Declared on every page via `alternates`
- **robots.txt** — Sitemap reference + host declaration
- **Semantic HTML** — Proper `<article>`, `<time>`, `<nav>`, `<main>` structure

## �📄 License

MIT License — use freely.

---

**Made with ❤️ by [Ivan Kukić](https://linkedin.com/in/ivan-kukic)**
