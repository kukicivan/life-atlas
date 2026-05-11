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

Nije *"hej Siri, koliko je sati"*. To je *"Klod, otvori projekat compliance-monitoring, napiši testove za novu skripta-funkciju, pa onda commit-uj na granu feature-validation."* — i on to odradi. Otkuca kod, pokrene testove, push-uje na repo. Ja ne dodirujem tastaturu.

## Zašto je ovo drugačije

Sve postojeće "voice assistants" zahtijevaju ritual:

1. Kliknu dugme ili kažu "wake word"
2. Pričaš kratku komandu
3. Završe sa odgovorom
4. Kreneš iznova za sljedeću stvar

To je **prekid** workflow-a. Stalno se prebacuješ između razgovora i tastature.

Ono što sam napravio drži se tri pravila:

**Prvo:** Mikrofon je **stalno upaljen**. Ne tražim dozvolu da pričam.

**Drugo:** Asistent zna razliku između **mene koji pričam njemu** i **mene koji pričam nekom drugom**. Kad kažem *"Klod, popravi onaj bug"* — radi. Kad kažem ženi *"ima li još kafe?"* — ćuti. Vidi to dolje na ekranu sivim slovima sa oznakom *overheard* — čuo je ali zna da nije za njega.

**Treće:** Razgovor **teče prirodno**. Kažem *"Klod, koje je vrijeme u Tokiju?"* — odgovori — odmah pitam *"a u Sidneju?"* — razumije da i dalje pričam s njim. Bez ponavljanja imena u svakoj rečenici.

## Tehnička osnova (na brzinu, ne moraš čitati)

- **Glas u tekst** — Groq Whisper Large v3, kvalitet kao OpenAI Whisper ali deset puta brže.
- **Razmišljanje** — Claude Opus 4.7 sa maksimalnim *thinking effort*-om, pristupljen preko CLI (ne API). Spaja se na moj postojeći Claude Code račun pa nema dodatnih troškova po pozivu.
- **Tekst u glas** — Azure Speech Neural Voices, hrvatski glas Gabrijela. Zvuči kao prava osoba, ne kao robot.
- **Klasifikator** — moj kod koji odlučuje da li je iskaz upućen meni ili nekom drugom. Wake-word + sliding follow-up window + filter za halucinacije i šum iz pozadine.
- **Sve u Docker kontejneru** koji se sam pokrene kad otvorim računar. Nema "instalacije" — samo radi.

Detaljnu arhitekturu sam dokumentovao u repu (private za sad, otvaram pristup beta testerima — vidi dolje).

## Šta sada mogu glasom

Ovog jutra sam, **bez tastature**:

- Otvorio projekat, čitao kod, predložio promjene
- Pokretao testove, čitao output, popravljao failures
- Pisao git commit poruke i push-ovao na repo
- Pretražio fajl-sistem i očistio nepotrebne fajlove
- Napisao tri poruke kolegama
- Generisao dokumentaciju (uključujući ovaj blog post)

Tastatura mi sad služi samo za jednu stvar: kad treba precizno da iskucam putanju fajla ili regex pattern. Sve ostalo **ide brže glasom** nego kucanjem.

## Zašto je ovo važno

Ja sam za godinu-dvije neće biti pitanje *"da li ti programer kuca kod"*. Pitanje će biti *"kako objašnjavaš mašini šta hoćeš da uradi"*.

A objašnjavati nešto **glasom**, sa intonacijom, pauzama, ispravljanjima u hodu — to je **prirodnije** nego sintaktički ispravan jezik za bilo koji medij.

Mali brat može da programira. Otac od osamdeset godina može da napiše email klijentu. **Pričaš sa kompjuterom kao sa živim čovjekom — radi.**

Ne moram da budem programer da bih napravio software. Ja sam *prevoditelj* između onoga što hoću i onoga što kompjuter razumije. Glas je taj prevoditelj.

## Trenutno stanje

**Beta sa prijateljima.** Trenutno radi na mom WSL setup-u, testiram sa ~10 ljudi (programeri, ne-programeri, jedan učenik srednje škole, jedan slikar). Feedback je nedvosmislen — ljudi posle dva dana ne žele nazad na tastaturu.

Otvoreni problemi:
- Whisper transkripcija na bosanskom/srpskom ima ~95% tačnosti, ali zaribava na imenima i akronimima
- Klasifikator za "addressed vs overheard" radi 9/10 puta, ali ponekad pogriješi kad neko pored kaže "Klod" u rečenici
- Treba mi server-side hosting da to ne mora svako da pokreće lokalno

Radim na tome.

## Hoćeš da probaš?

Ako si voljan da budeš tester:

- Šta dobijaš: pristup beta verziji, lično te onbordujem, tvoj feedback direktno utiče na šta gradim sljedeće
- Šta dajem: 60-min poziv da te postavim, WhatsApp/Telegram kontakt direktno na mene, free do kraja beta perioda
- Šta tražim: pošteno mišljenje. Šta radi, šta ne radi, šta ti fali, šta te nervira.

Pošalji mi poruku — kontakt na sajtu, ili direktno preko LinkedIn-a.

---

*Ovaj post je napisan glasom. Sjedio sam na stolici, pričao naglas, gledao kako se tekst piše sam. Editovao sam ga klasično (tastatura) — ali to je zato što sam htio da iznesem misli precizno. 80% rada je bilo glasom.*

*Sljedeći put — kompletan post bez ijednog dodira tastature. Vidjet ćete.*
