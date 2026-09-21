# Dr. Aimee Jenkin — Plastic & Reconstructive Surgeon

A single-page practice website for **Dr. Aimee Jenkin**, Specialist Plastic & Reconstructive Surgeon practicing at Alchimia Clinic, 99 Kloof Street, Gardens, Cape Town. Built with a clean, Doctolib-inspired medical aesthetic — white surfaces, a single refined medical-blue accent, and Inter typography throughout.

## Highlights

- **Sticky header** with brand mark, primary nav, and a persistent "Book appointment" CTA
- **Hero** with status badge, dual CTAs, trust row (HPCSA · FCS Plast Surg · Wits Alum · Charlotte Maxeke), and a practice-stats card
- **About** — tabbed practitioner profile (Journey & Philosophy · Clinical Focus · Life in the City Bowl) with a sticky credentials sidebar
- **Specialties** — 9 procedures across 3 categories (Cosmetic & Aesthetic, YourBreast, Reconstructive Microsurgery) with filter pills and a detailed modal for each (overview, procedures, recovery timeline, ideal-candidate criteria)
- **Facility** — Alchimia Clinic stats row, feature cards (private day-surgery, 2 theatres, 100 kVA backup power, boutique care), and a 4-step patient journey
- **Booking & Location** — interactive consultation request form with validation and personalized confirmation state, contact card, map placeholder, and a 3-tab Practical Details panel (Parking & Access · Consultation Prep · PA & Workflow)
- **Footer** — quick nav, contact, affiliations, HPCSA & medical disclaimer, practice hours

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5
- **Styling**: Tailwind CSS 4 with a custom medical-aesthetic token palette
- **UI**: shadcn/ui (New York style) + Lucide icons
- **Fonts**: Inter via `next/font/google`
- **Forms**: React state with field-level validation (no external form library required)

## Local Development

```bash
# Install dependencies
bun install

# Start dev server on http://localhost:3000
bun run dev

# Lint
bun run lint
```

> Requires Node.js 18+ and either `bun`, `npm`, `pnpm`, or `yarn`. The repo was authored with `bun` so `bun.lock` is committed.

## Deployment to Vercel

The app is fully client-side and requires no environment variables or database for the demo.

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

The site will be live at `https://<your-project>.vercel.app` within ~60 seconds.

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: Inter font, SEO metadata
│   │   ├── globals.css         # Medical blue/white/slate token palette
│   │   └── page.tsx            # Single-page composition (all 7 sections)
│   ├── components/ui/          # shadcn/ui component library
│   ├── hooks/                  # use-toast, use-mobile
│   └── lib/
│       ├── site-data.ts        # Strongly-typed content model (specialties, profile tabs, facility)
│       ├── utils.ts            # cn() helper
│       └── db.ts               # Prisma client (unused in demo)
├── public/                     # Static assets
├── prisma/schema.prisma        # Prisma schema (unused in demo)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customisation

All site copy and procedure data live in **`src/lib/site-data.ts`** — specialties, recovery timelines, ideal-candidate criteria, profile tab content, facility features, and trust badges. Edit that file to update clinical content without touching layout code.

The design token palette is in **`src/app/globals.css`** — change `--color-medic-blue` to recolour the entire site.

## Regulatory Notice

Dr. Aimee Jenkin is registered with the Health Professions Council of South Africa (HPCSA) as a Specialist Plastic & Reconstructive Surgeon, and holds the Fellowship of the College of Plastic Surgeons of South Africa (FC Plast Surg SA). All surgical procedures referenced on this site are performed at Alchimia Clinic, a licensed day-surgery facility at 99 Kloof Street, Gardens, Cape Town.

The information on this website is provided for general educational purposes only and is not a substitute for an individualised medical consultation.

## License

Proprietary — © Dr. Aimee Jenkin. All rights reserved.
