# Silent Bones Audiobook Setup

When you're ready to sell the audiobook, update **`src/data/site.ts`** — no component changes needed.

## 1. Add a sample clip (optional)

Place a short preview file at:

```
public/media/books/silent-bones/audiobook-sample.mp3
```

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
