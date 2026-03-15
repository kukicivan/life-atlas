# Kako dodati sadržaj na Life Atlas

Sav sadržaj sajta živi u `content/` folderu. Ne trebaš dirati kod — samo edituj ili dodaj fajlove ovdje.

---

## 1. Novi blog post

1. Kreiraj fajl: `content/blog/moj-novi-post.md`  
   (ime fajla = URL slug → `lifeatlas.site/blog/moj-novi-post`)

2. Na vrhu fajla stavi frontmatter (obavezno):
   ```
   ---
   title: "Naslov posta"
   date: "2026-04-01"
   description: "Kratak opis koji se vidi na listingu i u Google rezultatima."
   author: "Ivan Kukić"
   ---
   ```

3. Ispod frontmattera piši sadržaj u Markdownu:
   ```markdown
   ## Podnaslov

   Tekst paragrafa. **Bold**, *italic*, `kod`.

   - Stavka 1
   - Stavka 2

   > Citat

   [Link tekst](https://example.com)

   ---

   ## Drugi podnaslov

   Još teksta...
   ```

4. Commitaj i pushaj — Vercel se automatski rebuilda.

---

## 2. Nova vijest (news)

Isti postupak, ali fajl ide u `content/news/`:

1. Kreiraj: `content/news/moja-vijest.md`

2. Frontmatter:
   ```
   ---
   title: "Naslov vijesti"
   date: "2026-04-01"
   description: "Kratak opis."
   author: "Ivan Kukić"
   cta: "SAZNAJ VIŠE"
   ---
   ```
   `cta` je tekst dugmeta na listingu (default: "READ MORE").

3. Sadržaj u Markdownu ispod.

4. Commitaj i pushaj.

---

## 3. Novi tool

Edituj `content/tools.json` — dodaj novi objekat u niz:

```json
{
  "title": "Ime Alata",
  "description": "Kratak opis šta radi.",
  "command": "komanda za pokretanje",
  "sourceUrl": "https://github.com/kukicivan/life-atlas/tree/main/public/bin/naziv",
  "prerequisites": "Python 3.8+, pip",
  "readmeUrl": "/bin/naziv/README.md"
}
```

Fajlove alata stavi u `public/bin/naziv-alata/`.

---

## Pravila za ime fajla (slug)

- Samo mala slova, brojevi i crtice: `moj-post-123`
- BEZ razmaka, BEZ dijakritika (č, ć, š, ž, đ)
- BEZ velikih slova
- Primjer: `ai-workflow`, `mistral-credits`, `novi-alat`

## Markdown cheat sheet

| Syntax | Rezultat |
|---|---|
| `## Naslov` | Podnaslov |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `` `kod` `` | `kod` |
| `[tekst](url)` | Link |
| `> citat` | Blok citat |
| `---` | Horizontalna linija |
| `- stavka` | Lista |

## Workflow (commit + push)

```bash
git add .
git commit -m "dodaj: novi blog post xyz"
git push
```

Vercel automatski rebuilda sajt nakon pusha. Promjena je live za ~1 minutu.
