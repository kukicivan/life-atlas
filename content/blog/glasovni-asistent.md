---
title: "Programiramo glasom. I sve ostalo."
date: "2026-05-11"
description: "Sjedim za stolom, pričam, kompjuter radi. Ne dodirujem tastaturu. I to nije više demo — to je radni dan."
author: "Ivan Kukić"
---

> *"Klod, prikaži mi koliko imam slobodnog prostora na disku."*
>
> Mikrofon je upaljen tri sata. Nisam dodirnuo tastaturu od jutra.

## Šta sam upravo napravio

Glasovni asistent koji **sluša cijeli dan**, razumije kad pričam **njemu** a kad pričam **ženi** ili **TV-u**, i radi posao u Claude Code terminalu.

Nije *"hej Siri, koliko je sati"*. To je *"Klod, otvori projekat, napiši testove za novu funkciju, commit-uj na granu."* — i on to odradi. Ja ne dodirujem tastaturu.

## Zašto je drugačije

Tri pravila:

**1. Mikrofon je stalno upaljen.** Bez wake-word ritual-a, bez klikova.

**2. Razlikuje kome pričam.** Kad kažem *"Klod, popravi onaj bug"* — radi. Kad kažem ženi *"ima li kafe?"* — ćuti. Klasifikator zna razliku.

**3. Razgovor teče prirodno.** Kažem *"Klod, koje je vrijeme u Tokiju?"* — odgovori — odmah pitam *"a u Sidneju?"* — razumije da i dalje pričam s njim. Bez ponavljanja imena.

## Tehnička osnova

- Glas → tekst: **Groq Whisper Large v3**
- Razmišljanje: **Claude Opus 4.7** preko CLI
- Tekst → glas: **Azure Speech**, hrvatski glas Gabrijela
- Klasifikator: moj kod koji odlučuje da li je iskaz upućen meni ili nekom drugom — wake-word + sliding follow-up window + filter za halucinacije i šum
- Sve u Docker kontejneru koji se sam pokrene

## Trenutno stanje

Trenutno testiram sa tri kolege. Radi.

Ovo nije proizvod koji prodajem. Informativno — ako neko želi da napravi isto za sebe, javite se, rado ću objasniti kako.

---

*Ovaj post je 80% pisao glas. Editovao sam ga tastaturom — htio sam da iznesem misli precizno. Sljedeći put, kompletan post bez ijednog dodira tastature. Vidjet ćete.*
