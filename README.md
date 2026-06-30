# Beck-Publishing.com

Modern React/TypeScript website for **Beck-Publishing** and **Built By Beck** — David Beck's books, software projects, SaaS apps, and technical services.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS
- Lucide React icons

## Local development

```bash
pnpm install
pnpm run dev
```

Configure the free contact form in `src/data/site.ts` — see [docs/CONTACT-FORM-SETUP.md](docs/CONTACT-FORM-SETUP.md).

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
pnpm run build
```

Static output is written to `out/` — deploy that folder to any static host.

## Deploy options

### Hostinger

1. Run `npm run build`
2. Upload contents of `out/` to `public_html` via hPanel File Manager or FTP

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Update `.firebaserc` with your Firebase project ID
3. Run `npm run build && firebase deploy --only hosting`

### GitHub Pages

Enable the deploy job in `.github/workflows/deploy.yml` (commented instructions inside).

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

```bash
git remote add origin https://github.com/built-by-Beck/beck-publishing.com.git
git push -u origin main
```
