# Agent Info — Beck-Publishing Site

## PBRD Status

| Stage | Status |
|-------|--------|
| Plan | Approved |
| Build | Complete (v1) |
| Review | ACCEPTED — build + lint pass |
| Document | README, media README, AUDIOBOOK-SETUP.md, lessons_learned.md |

## Git

Repo initialized by create-next-app. All site files ready to commit. Initial commit deferred until user requests.

## Project

Greenfield Next.js 16 static export site for beck-publishing.com.

## Key paths

- Config: `src/data/site.ts` (purchase URLs, audiobook settings, contact)
- Books: `src/data/books.ts`
- Projects: `src/data/projects.ts`
- Services: `src/data/services.ts`
- Build output: `out/`

## Handoff notes

- Hero CTAs: See My Work, More from Built By Beck, Buy Silent Bones
- Contact form embeds **free Google or Microsoft Form** — configure in `src/data/site.ts` (see `docs/CONTACT-FORM-SETUP.md`)
- Audiobook purchase: configure in `siteConfig.silentBones.audiobook` — see `docs/AUDIOBOOK-SETUP.md`
- `/projects/silent-bones/` client-redirects to `/books/silent-bones/`
- Media placeholders work when images missing — drop assets in `public/media/`

## Last updated

2026-06-30 — Initial v1 build
