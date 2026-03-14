# md2docx

Mali alat za konverziju Markdown fajlova u DOCX format, optimizovan za monografije i knjige.

## Upotreba

```bash
node md2docx.js ulaz.md izlaz.docx [format]
```

Primer:
```bash
node md2docx.js monografija.md output.docx a5
```

### Opcije
- **ulaz.md**: Putanja do izvornog Markdown fajla.
- **izlaz.docx**: Naziv generisanog Word dokumenta.
- **format**: (Opciono) `a4` ili `a5`. Podrazumevano je `a4`.

## Konfiguracija
Podešavanja fontova, margina i stilova nalaze se u `md2docx.config.json`.

---
Made with ❤️ by Ivan Kukić
