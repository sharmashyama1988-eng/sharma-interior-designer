# Sharma Interior Designer - Project Standards & SEO Invariants

## 1. TrailingSlash URL Consistency
- `trailingSlash: true` is configured in `next.config.mjs`.
- All URLs in `metadata.alternates.canonical`, `metadata.openGraph.url`, schema `@id`/`url`, and `sitemap.ts` MUST include a trailing slash to prevent 308 redirect penalties.

## 2. Typography & Zero-CLS Standard
- Google Fonts (`Playfair_Display`, `Plus_Jakarta_Sans`) are loaded via `next/font/google` in `src/app/layout.tsx`.
- Never use `@import` in `globals.css` for web fonts.

## 3. Deep Schema & Structured Data
- Root Layout maintains `HomeAndConstructionBusiness`, `AggregateRating`, `FAQPage`, and `BreadcrumbList`.
- Catalog (`/catloug/`) maintains `ItemList` of `Product` schemas with INR pricing and availability.
- Booking (`/booking/`) maintains booking breadcrumbs and action schemas.
- `sitemap.ts` includes image arrays for luxury portfolio discovery.
