# CampusKart — Your Campus. Your Marketplace.

A frontend-only student marketplace prototype built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS and Lucide icons. All data is local sample data; user changes persist in `localStorage`.

## Requirements
- Node.js 18.17 or newer
- npm 9 or newer

## Setup
Open a terminal **inside the folder that contains `package.json`**, then:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Windows tip: run `dir package.json` first. If it isn't found, you are in the wrong folder (the zip extracts into a nested `campuskart` folder). npm searches parent folders for a `package.json`, so running it in the wrong place can install a different project's dependencies.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repo at vercel.com. The Next.js preset is detected automatically.
3. Deploy. No environment variables are needed.

## Structure
```
src/
  app/          layout, home, explore, product/[id], sell, wishlist, not-found
  components/   Navbar, Footer, ProductCard
  data/         products.ts (16 sample listings, categories)
  lib/          storage.tsx (localStorage store + toast), utils.ts
  types/        shared TypeScript types
```

## Working features
- Sticky navbar, mobile menu, search
- Home: hero search, clickable categories, recent listings, How It Works, Why CampusKart
- Explore: search, category / condition / price filters, sorting, grid/list toggle, clear filters, empty state
- Product pages with similar items and a demo Make an Offer
- Sell form with validation and image preview; new listings appear in Explore
- Wishlist with live counter, persisted locally
- Custom 404

## Simulated (frontend demo only)
- Contact Seller shows a toast; no messages are sent
- Offers are not stored
- Seller profiles are demo labels
- Uploaded image is previewed but not saved with the listing

## Not built yet
Student dashboard, buyer-seller chat, verification screen, loading skeletons, real product photos.
