# Beck-Publishing.com

Modern React/TypeScript website for **Beck-Publishing** and **Built By Beck** — David Beck's books, software projects, SaaS apps, and technical services.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS
- Lucide React icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deployment

Pushes to `main` are built and deployed to Firebase Hosting automatically by GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`). Pull requests get a preview channel (`firebase-hosting-pull-request.yml`), and `deploy.yml` runs lint and build checks.

To deploy manually:

```bash
npm run build && firebase deploy --only hosting
```

## Configuration

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Site identity, Silent Bones URLs, Google/Microsoft Form embed URL |
| `docs/CONTACT-FORM-SETUP.md` | Free contact form setup (Google or Microsoft) |
| `src/data/books.ts` | Book catalog |
| `src/data/projects.ts` | Project portfolio |
| `src/data/services.ts` | Service offerings |

### Audiobook setup

See [docs/AUDIOBOOK-SETUP.md](docs/AUDIOBOOK-SETUP.md) for configuring audiobook purchase URL, format, and provider.

### Media assets

Drop images into `public/media/` — see [public/media/README.md](public/media/README.md).

## Pages

- `/` — Homepage
- `/books/` — Books catalog
- `/books/silent-bones/` — Silent Bones sales page
- `/projects/` — Project portfolio
- `/projects/[slug]/` — Project detail
- `/services/` — Services
- `/about/` — About David Beck
- `/hire-me/` — Hire Me / resume-style page
- `/contact/` — Contact form

## GitHub

Repository: [github.com/built-by-Beck/beck-publishing.com](https://github.com/built-by-Beck/beck-publishing.com)
