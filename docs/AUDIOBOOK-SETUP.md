# Silent Bones Audiobook Setup

When you're ready to sell the audiobook, update **`src/data/site.ts`** — no component changes needed.

## 1. Add a sample clip (optional)

Place a short preview file at:

```
public/media/books/silent-bones/audiobook-sample.mp3
```

Recommended sample: 3–5 minutes, exported as an MP3 at 128 kbps
(approximately 3–5 MB; five minutes is about 4.8 MB). Choose an excerpt
that introduces the story without revealing major spoilers.

The audiobook player displays a **Download Audio Sample (MP3)** button once
the file's metadata loads. If the file is missing or cannot be played,
visitors see “Audio sample coming soon” instead. Add the actual narrated
clip at the path above, then rebuild and deploy to enable the download.

**Do not** put the full audiobook in `public/`. Only the sample clip belongs here.

## 2. Configure purchase in site.ts

```ts
audiobook: {
  purchaseUrl: "https://your-checkout-url.com/...",  // Stripe, Gumroad, Payhip, etc.
  label: "Buy Audiobook",
  provider: "Stripe Checkout",  // or "Gumroad", "Payhip", "Lemon Squeezy"
  status: "Available",          // change from "Coming Soon"
  format: "MP3 download",         // or "M4B", "ZIP bundle", etc.
  priceDisplay: "$9.99",          // optional
  sampleUrl: "/media/books/silent-bones/audiobook-sample.mp3",
  deliveryNote: "Full audiobook delivered through secure checkout — not hosted on this site.",
},
```

After saving, run `npm run build` and redeploy. All purchase buttons and cards update automatically.

## Provider examples

### Gumroad

```ts
purchaseUrl: "https://yourname.gumroad.com/l/silent-bones-audiobook",
provider: "Gumroad",
format: "MP3 + M4B download",
```

### Stripe Payment Link

```ts
purchaseUrl: "https://buy.stripe.com/...",
provider: "Stripe Checkout",
format: "Secure download link after purchase",
```

### Payhip

```ts
purchaseUrl: "https://payhip.com/b/...",
provider: "Payhip",
format: "Digital download",
```

## Security reminder

- Full audiobook files → deliver through your checkout provider
- Public folder → sample clip only
- Never commit full audiobook files to git
