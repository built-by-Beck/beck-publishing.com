# Free Contact Form Setup (Google or Microsoft)

Web3Forms is **not** used. The site embeds a **free Google Form** or **Microsoft Form** on the Contact page, homepage, and Hire Me page.

## Option A — Google Forms (recommended)

1. Go to [Google Forms](https://forms.google.com) and sign in with your Google account.
2. Create a new form. Suggested fields:
   - **Name** (short answer)
   - **Email** (short answer)
   - **Inquiry type** (dropdown): Hiring / Recruiting, Freelance Project, Website / App Work, Book / Audiobook Question, Technical Help, Other
   - **Message** (paragraph)
3. Click **Send** → **<>** (embed HTML).
4. Copy the URL from `src="..."` in the embed code. It looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLS.../viewform
   ```
5. Open **`src/data/site.ts`** and set:
   ```ts
   contactForm: {
     provider: "google",
     googleFormEmbedUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
     // ...
   }
   ```
6. Optional: In Google Forms → **Responses** → link to **Google Sheets** to track submissions.
7. Turn on email notifications: Form → **Responses** tab → three dots → **Get email notifications for new responses**.

## Option B — Microsoft Forms

1. Go to [Microsoft Forms](https://forms.office.com) and sign in with your Microsoft account.
2. Create a form with the same fields as above.
3. Click **Collect responses** → **Embed** → copy the iframe `src` URL.
4. In **`src/data/site.ts`**:
   ```ts
   contactForm: {
     provider: "microsoft",
     microsoftFormEmbedUrl: "https://forms.office.com/Pages/ResponsePage.aspx?id=...",
   }
   ```

## Rebuild after config change

```bash
pnpm run build
```

No API keys or `.env` variables needed.

## Fallback

If both embed URLs are empty, the site shows a **mailto** link to `david@beck-publishing.com`.

## Note on styling

Google and Microsoft embeds use a light form inside the iframe. That is normal for free forms. Your site chrome stays dark; only the form area is white.
