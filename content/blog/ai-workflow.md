---
title: "Building an AI Workflow"
date: "2026-03-14"
description: "A journey in patience, code, and why having a non-technical friend nearby is the secret to great success."
author: "Ivan Kukić"
---

> "Nothing wasn't built in isolation."

## Chapter 1: Beyond the Myth of the "Silent Room"

There is a common belief that technical work requires total isolation. For three days, I proved the opposite. I didn't lock myself away to build this AI email workflow. Instead, I spent that time with a dear friend—a man of 76 years who has significantly more life experience than I do.

The productivity didn't come from a "grind." It came from the calm, steady presence of someone who understands what actually matters. Sitting there, talking about real life, provided a mental clarity that made the most complex Docker configurations feel manageable.

## Chapter 2: Experience as a Productivity Multiplier

My friend doesn't open a terminal, but his company provided the perfect environment for deep work. When you are with someone who has seen it all, the "noise" of technical frustration disappears. You aren't rushing to finish; you are just working while enjoying the quality of the time spent.

I've realized that I reached the finish line because I wasn't doing it in a vacuum. Fixing an SMTP relay at 2 AM becomes a simple task when you are in a headspace shaped by respect and good conversation. The project became a byproduct of a great weekend.

## Chapter 3: The Technical Outcome

In the periods between our conversations, I managed to finalize a system that now runs autonomously:

- **OpenClaw** — Free and open-source engine running in Docker.
- **OpenRouter & Mistral AI** — Tapping into high-tier models via free tiers and experimental credits.
- **Cloud Infrastructure** — Azure or AWS free tier virtual machines for 24/7 uptime.
- **Docker** — The cleanest way to containerize the entire setup.

## Chapter 4: Patience Over Speed

Because the time I was spending was inherently valuable, I didn't feel the urge to "hack" a quick solution. I had the patience to solve every error properly. Every bug was addressed with a permanent fix because I was in the right headspace. Now, the workflow reads, summarizes, and reports via Telegram without a single intervention.

## Architecture Deep-Dive

The system follows a simple pipeline: incoming emails are fetched via IMAP, processed through an AI summarization layer, and delivered as Telegram notifications.

```
# Data Flow
IMAP Inbox → OpenClaw Engine → OpenRouter API → Mistral AI → Summary → Telegram Bot

# Infrastructure
Docker Compose: openclaw + postfix (SMTP relay)
Host: Azure/AWS free tier VM (Ubuntu 22.04)
Cron: systemd timer, every 15 min
```

Key environment variables that wire it together:

```bash
# .env (example)
OPENROUTER_API_KEY=sk-or-...
OPENROUTER_MODEL=mistralai/mistral-large-latest
IMAP_HOST=imap.example.com
IMAP_USER=your@email.com
TELEGRAM_BOT_TOKEN=123456:ABC-...
TELEGRAM_CHAT_ID=your_chat_id
```

### References & Inspiration by Peter Steinberger

- [Just Talk To It](https://steipete.me/posts/just-talk-to-it)
- [Optimal AI Development Workflow](https://steipete.me/posts/2025/optimal-ai-development-workflow)
- [Shipping at Inference Speed](https://steipete.me/posts/2025/shipping-at-inference-speed)

---

## Chapter 5: The Takeaway

Don't underestimate the power of a mature, calm environment. Technical breakthroughs don't only happen in labs—they happen where life is being lived and shared with people who truly have more experience than we do.
