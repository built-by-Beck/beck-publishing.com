# Silent Bones Audiobook Setup

When you're ready to sell the audiobook, update **`src/data/site.ts`** — no component changes needed.

## 1. Public sample clip

The site includes an approximately three-minute opening excerpt from Chapter 1,
“The Silence Between Bones,” taken from David's supplied ElevenLabs MP3.
Only this excerpt is included in the website; the original chapter stays outside
the repository. The sample section displays the front and back covers together.

Place a short preview file at:

```
public/media/books/silent-bones/audiobook-sample.mp3
```

The current sample preserves the original MP3 frames without re-encoding and
is approximately 2.9 MB. If replacing it, keep the excerpt short and update the
player's duration label if needed.

The audiobook player displays a **Download Free Preview (MP3)** button once
the file's metadata loads. If the file is missing or cannot be played,
visitors see a temporary-unavailability message instead. Rebuild and deploy
after replacing the sample file.

**Do not** put the full audiobook in `public/`. Only the sample clip belongs here.
The full ebook also belongs with its paid retailer or fulfillment provider,
never in the public website export. The ebook currently links to Amazon;
audiobook checkout still needs a real purchase URL before it can be enabled.

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
