# TransportVibe

Trust-driven shipping intelligence platform for the auto transport industry.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Build for production

```bash
npm run build
```

## Deploy to Vercel (Free)

### Option A — GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" → Import your GitHub repo
4. Vercel auto-detects Next.js — click "Deploy"
5. Your site will be live at `your-project.vercel.app`

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site will be live in ~60 seconds.

## Project Structure

```
transportvibe/
├── app/
│   ├── layout.js          # Root layout (metadata, fonts)
│   ├── globals.css         # Global styles
│   ├── page.js             # Homepage
│   └── companies/
│       └── page.js         # Company Directory
├── components/
│   ├── icons.js            # All SVG icons
│   ├── shared.js           # Shared UI components (Stars, Badge, Button, etc.)
│   ├── nav.js              # Navigation
│   └── footer.js           # Footer
├── lib/
│   ├── tokens.js           # Design tokens (colors, fonts, spacing)
│   └── data.js             # Sample data (companies, reviews, stories)
└── public/                 # Static assets
```

## Adding New Pages

Each new page goes in `app/` following Next.js App Router conventions:

- `app/compare/page.js` → `/compare`
- `app/advisor/page.js` → `/advisor`
- `app/full-service/page.js` → `/full-service`
- `app/companies/[id]/page.js` → `/companies/prestige-auto-transport`

Import shared components from `@/components/shared` and tokens from `@/lib/tokens`.

## Pages Built

- [x] Homepage (`/`)
- [x] Company Directory (`/companies`)
- [ ] Company Profile (`/companies/[id]`)
- [ ] Compare Page (`/compare`)
- [ ] Advisor Intake (`/advisor`)
- [ ] Advisor Results (`/advisor/results`)
- [ ] Full Service (`/full-service`)
- [ ] Leave a Review (`/review`)
- [ ] Customer Stories (`/stories`)
- [ ] Story Detail (`/stories/[id]`)
- [ ] How It Works (`/how-it-works`)
- [ ] Why Trust TransportVibe (`/trust`)
- [ ] About Us (`/about`)
- [ ] Contact Us (`/contact`)
- [ ] FAQ (`/faq`)
- [ ] Resources Hub (`/resources`)
- [ ] Blog/Guides (`/resources/guides`)
- [ ] Industry News (`/resources/news`)
- [ ] Route Guides (`/resources/routes`)
- [ ] State Pages (`/resources/states`)
- [ ] For Brokers (`/for-companies`)
- [ ] Get Verified (`/for-companies/verified`)
- [ ] Claim Your Company (`/for-companies/claim`)
- [ ] Featured Listings (`/for-companies/featured`)
- [ ] Shipping Checklist (`/tools/checklist`)
- [ ] Red Flag Checker (`/tools/red-flag-checker`)
- [ ] Price Estimator (`/tools/price-estimator`)
- [ ] Community Q&A (`/community`)
- [ ] Post-Shipment Debrief (`/debrief`)
- [ ] Glossary (`/glossary`)
