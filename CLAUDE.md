# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (runs on port 8080)
- **Build**: `npm run build` (production)
- **Lint**: `npm run lint`
- **Run all tests**: `npm run test`
- **Run tests in watch mode**: `npm run test:watch`
- **Run a single test**: `npx vitest run src/path/to/file.test.ts`
- **Playwright E2E**: `npx playwright test`

## Architecture

This is a **Coruña travel guide** app built with Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, and shadcn/ui.

### Routing (Next.js App Router)

File-based routing in `app/`. All paths use Spanish names:
- `/` → `app/page.tsx` (HomePage), `/itinerario` → `app/itinerario/page.tsx`
- `/explorar` → `app/explorar/page.tsx`, `/excursion` → `app/excursion/page.tsx`
- `/mapa` → `app/mapa/page.tsx` (Leaflet, dynamic import with ssr: false)
- `/tips` → `app/tips/page.tsx`

Root layout in `app/layout.tsx` includes providers and a persistent `BottomNav` component for mobile navigation.

### Data Layer

Static data files in `src/data/` (`places.ts`, `itinerary.ts`, `excursion.ts`, `tips.ts`) — no backend or API. The `Place` type includes geocoordinates for map display via `react-leaflet`.

### UI Components

- `src/components/ui/` — shadcn/ui primitives (do not edit manually; use `npx shadcn-ui@latest add <component>`)
- `src/components/` — app-specific components (PlaceCard, PlaceDetailDrawer, BottomNav, Providers, MapClient)

### Path Alias

`@/` maps to `src/` (configured in tsconfig and vitest.config).

### Styling

Tailwind CSS with CSS variables for theming (defined in `app/globals.css`). Custom color tokens: `ocean`, `sand`, `moss`, `sunset`, `wave`. Custom fonts: Playfair Display (serif headings), Source Sans 3 (body).

### Testing

Vitest with jsdom environment and `@testing-library/react`. Setup file: `src/test/setup.ts`. Test files go in `src/**/*.{test,spec}.{ts,tsx}` or `app/**/*.{test,spec}.{ts,tsx}`.

### TypeScript

Strict null checks and noImplicitAny are **disabled** (`tsconfig.json`). Unused vars/params are allowed.

### Key Patterns

- All page components use `"use client"` (framer-motion animations and localStorage)
- Leaflet map is loaded via `next/dynamic` with `ssr: false` in `app/mapa/page.tsx`, actual logic in `src/components/MapClient.tsx`
- `useSearchParams` from `next/navigation` requires `<Suspense>` boundary (see ItineraryPage and MapClient)
