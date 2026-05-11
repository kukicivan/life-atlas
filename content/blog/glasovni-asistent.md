---
title: "Programiramo glasom. I sve ostalo."
date: "2026-05-11"
description: "Sjedim za stolom, pričam, kompjuter radi. Ne dodirujem tastaturu. I to nije više demo — to je radni dan."
author: "Ivan Kukić"
---

> Pritisnem mic. Kažem: *"Klod, napiši testove za onu novu skripta-funkciju, pa commit-uj."*
> Gledam ga kako radi. Tri minute kasnije, glas u zvučniku: *"Gotovo. Sedam testova, svi prolaze, commit push-ovan."*

## Šta sam upravo napravio

Glasovni interfejs za Claude Code. Pritisnem dugme, kažem šta hoću da uradi, gledam ga kako radi uživo, i on mi se javlja glasom kad završi.

Nije *"hej Siri, koliko je sati"*. To je *"Klod, otvori projekat, napiši testove za novu funkciju, commit-uj na granu."* — i on to odradi. Ja ne dodirujem tastaturu.

## Kako izgleda u praksi

1. **Pritisnem mic** — bez ritual-a, bez parsing-a komandi
2. **Kažem šta hoću** — slobodno, prirodnim jezikom, koliko god treba
3. **Pustim dugme** — transkript ide u Claude Code sesiju
4. **Gledam uživo kako radi** — svaki korak je vidljiv na panelu, kao da gledam preko ramena
5. **Čujem rezultat** — kad završi, javi se glasom: *"Gotovo. Tri testa popravljena, commit push-ovan."*

Bez dvosmislenosti. Bez čekanja da pogodi šta sam mislio. Bez šest poruka da se sklopi jedna komanda.

## Tehnička osnova

- Glas → tekst: **Groq Whisper Large v3**
- Razmišljanje: **Claude Opus 4.7** preko CLI
- Tekst → glas: **Azure Speech**, hrvatski glas Gabrijela
- Server-sent events stream između Claude Code sesije i web stranice — vidim svaki korak uživo
- Sve u Docker kontejneru koji se sam pokrene

## Šta sam ukapirao jutros

Sa ovim alatom **djeca mogu da programiraju**. Ne moraju da znaju kod. Ne moraju da nauče jezik. Sjede, pričaju kompjuteru šta žele da naprave — i on napravi.

Djeca imaju sjajne ideje. Sada nemaju barijeru između ideje i realizacije.

## Trenutno stanje

Testiram sa tri kolege. Radi.

Ovo nije proizvod koji prodajem. Informativno — ako neko želi da napravi isto za sebe, javite se, rado ću objasniti kako.

---

*Ovaj post je 80% pisao glas. Editovao sam ga tastaturom — htio sam da iznesem misli precizno. Sljedeći put, kompletan post bez ijednog dodira tastature. Vidjet ćete.*
