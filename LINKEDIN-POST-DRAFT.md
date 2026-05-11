# LinkedIn post — kratka i duga verzija

> Copy-paste u LinkedIn box. Slika koja prati: screenshot /dictate stranice
> ili kratka video snimka tebe kako pričaš i text se piše sam.

---

## Verzija A — kratko (najbolja za feed)

Tri sata. Nisam dodirnuo tastaturu.

Sjedio sam za stolom, pričao naglas, kompjuter je radio.

Otvorio projekat → glasom. Pisao kod → glasom. Pokrenuo testove → glasom. Pisao komitove → glasom. Napisao tri poruke kolegama → glasom. Generirao dokumentaciju → glasom.

I sad pišem ovaj post glasom.

Napravio sam glasovnog asistenta koji:

→ Sluša cijeli dan, ne tražim dozvolu
→ Zna razliku između kad pričam njemu i kad pričam ženi ili TV-u
→ Razgovor teče prirodno — ne moram ponavljati ime u svakoj rečenici
→ Spaja se na Claude Opus 4.7 i radi u Claude Code terminalu

Tehnologija je već tu (Whisper, Claude, Azure Speech). Trik je u **klasifikatoru** koji odlučuje da li je iskaz upućen sistemu ili je samo razgovor pored.

Beta sa ~10 prijatelja. Feedback je nedvosmislen: poslije dva dana, niko se ne želi vratiti tastaturi.

Tražim još 5-10 testera koji žele da probaju. Programer ili ne — svejedno. Pošalji DM ako te zanima.

Detaljnije na blogu (link u komentaru).

#voiceFirst #ai #productivity #claude

---

## Verzija B — duga (za priču)

Tri sata. Nisam dodirnuo tastaturu.

Sjedim za stolom. Sin trči okolo, žena viče kafa je gotova, TV u dnevnoj. Ja pričam naglas: *"Klod, otvori projekat compliance-monitoring."* Klod otvori. *"Pokreni testove."* Pokrenu se. Tri su pala. *"Popravi onaj sa null pointer-om."* Popravlja.

Žena: *"Bok, sin gladi."* Ja kažem djetetu nešto. Klod nije reagovao — čuo je, ali je znao da nije za njega. Vidim u logu sivim slovima: "overheard: sin gladi". To je dobro.

---

Ovo nije Siri. Nije Alexa. To su **igračke** za kratke komande.

Ono što sam napravio je drugačije:

**1. Mikrofon je stalno upaljen.**
Ne pritiskam ništa. Ne čekam wake-word. Sluša sve, vrijeme se ne troši na ritual.

**2. Klasifikator zna kad mu pričam, a kad ne.**
Algoritam koji procjenjuje da li je iskaz upućen mašini ili je razgovor pored. Wake-word *na početku* rečenice + sliding follow-up window + filter za halucinacije Whisper modela. Detalje sam dokumentovao u repu.

**3. Razgovor teče prirodno.**
Kažem *"Klod, koje je vrijeme u Tokiju?"* — odgovori — *"a u Sidneju?"* — razumije da nastavljam razgovor. Bez ponavljanja imena.

**4. Radi pravi posao.**
Pisanje koda. Pokretanje testova. Git komitovi. Pretrage. Pisanje email-ova. Pisanje ovog posta. Sve glasom.

---

**Tehnička osnova** (ako vas zanima):

- **Glas → Tekst:** Groq Whisper Large v3 (10× brže od OpenAI Whisper-a)
- **Razmišljanje:** Claude Opus 4.7 sa max thinking effort, preko CLI (nema dodatnih API troškova)
- **Tekst → Glas:** Azure Speech Neural Voices, hrvatski glas
- **Klasifikator:** Python servis u Docker kontejneru
- **Sve u jednoj WSL2 instalaciji** koja se sama pokreće

99% line coverage, TDD od početka. Repo postaje javan kad sklonim ono što ne smije biti javno.

---

**Beta sa prijateljima.**

Trenutno radi na mom setup-u, testiram sa ~10 ljudi. Programeri, ne-programeri, jedan učenik srednje škole, jedan slikar. Feedback je nedvosmislen — niko se nakon dva dana ne želi vratiti tastaturi.

Tražim još 5-10 testera. **Šta dobijate:**
- 60-min poziv da vas postavim
- Direktan WhatsApp kontakt na mene
- Besplatno do kraja beta perioda

**Šta tražim:** pošteno mišljenje.

DM ako vas zanima.

Detaljniji blog post: [link]

---

## Idje za follow-up komentar (post u komentar ispod posta)

> Tehničkih pitanja se ne bojite — pošaljite. Klasifikator je iznenadno
> hard problem, mogli bismo otvoriti research razgovor.

---

## Šta uz post

**Slika 1 (preporuka):** screenshot /dictate stranice sa upaljenim 🎧
always-on indikatorom + log koji pokazuje 3-4 razmjene addressed/overheard.

**Slika 2 (alternativa):** kratka GIF/video snimka tebe kako pričaš i
text se kuca sam.

**Tag-uj:** ljude koji su ti pomagali, ako neko od beta testera već piše.
