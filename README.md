# Gold Nexus Starter (Next.js)

A minimal Next.js site with:
- Live gold price (XAU/USD) every 15s
- Server-side API route that fetches GoldAPI
- Black & gold landing UI

## 1) Add your API key on Vercel
Project → Settings → Environment Variables → Add:

- **Name:** `NEXT_PUBLIC_GOLD_API_KEY`
- **Value:** `goldapi-...` (your key from goldapi.io)

Redeploy after saving.

## 2) Deploy on Vercel
- Import Project → Upload → select this folder/zip
- Or push to GitHub and import from repository

## 3) Local dev (optional)
```bash
npm install
npm run dev
# open http://localhost:3000
```
