# Lessons Learned — Beck-Publishing

## Google Fonts + static export build

**What happened:** `next/font/google` failed during `npm run build` when Google Fonts was unreachable (sandbox/network).

**Fix:** Use `<link>` tags in `layout.tsx` for Inter and Space Grotesk instead of `next/font` at build time. Fonts load at runtime from the CDN; static export builds without a network dependency.

## Next.js workspace root warning

**What happened:** Multiple `package-lock.json` files caused Next.js to infer the wrong workspace root, slowing TypeScript checks.

**Fix:** Set `turbopack.root: process.cwd()` in `next.config.ts`.

## Static export + redirects

**What happened:** `redirects` in `next.config.ts` do not apply to pure static export on all hosts.

**Fix:** Dedicated `/projects/silent-bones/` page with client-side redirect to `/books/silent-bones/`, plus Firebase Hosting redirect in `firebase.json`.
