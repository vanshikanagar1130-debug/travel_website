# PRD — Shree Sawriya Seth Tour & Travels Website

## Original Problem Statement
Build a complete, modern, high-converting, mobile-responsive travel agency website from 4 uploaded promotional posters. Extract all data (packages, fleet, prices, contacts) with zero data loss; premium royal-blue/gold travel aesthetic; WhatsApp booking integration (wa.me/916262890096); booking enquiry form; fleet showcase with clean car visuals (no poster text); testimonials; footer.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lucide-react, single-page landing (`/app/frontend/src/App.js` + components/*). Fonts: Playfair Display + IBM Plex Sans. Theme: royal #0F2B5C / gold #D97706 / cream #FDFBF7.
- Backend: FastAPI (`/app/backend/server.py`) — POST/GET `/api/enquiries`.
- DB: MongoDB via MONGO_URL/DB_NAME, `enquiries` collection.

## User Personas
- Pilgrims/families in Indore booking one-day darshan trips (Ujjain, Omkareshwar, Sanwariya Seth).
- Group/VIP travellers choosing Ertiga/Innova Crysta.

## Core Data (extracted from posters — static)
- Brand: Shree Sawriya Seth Tour & Travels (aka Shree Shyam Tour and Travels); Owner: Harsh Thakur; Address: Scheme No 51, Near Mari Mata Square, Indore, MP; Phones: 6262890096, 9329245586; Email: shreesawriyasethtoortravels@gmail.com.
- Packages: Omkareshwar & Mamleshwar (₹3500/4000/5000), Ujjain 5 Sacred Sites (₹3000/3500/4500), Sanwariya Seth Yatra (₹8500 Dzire; other cars on request).
- Fleet: Maruti Dzire (4 seats), Ertiga (6-7), Innova Crysta (6-7). Inclusions: toll & parking, experienced driver, sanitized cars, Indore pickup/drop.

## Implemented (2026-09-25)
- Hero with trust badges (3+ yrs, 24/7, verified drivers, best price) + dual CTAs.
- Package cards with per-car price toggle + pre-filled WhatsApp book buttons.
- Fleet section with clean studio car visuals + spec cards + reserve buttons.
- Why Choose Us (6 reasons), enquiry form with live price estimate (saves to MongoDB + WhatsApp send option), testimonials, contact section, footer.
- Floating sticky WhatsApp button (exact mandated URL), mailto email everywhere, tel: links, full mobile responsiveness, data-testids throughout.

## Implemented (2026-09-25, iteration 2)
- Emergent-managed Google sign-in: navbar "Sign in" button → auth.emergentagent.com → AuthCallback exchanges session_id via POST /api/auth/session (httpx), user upserted in `users` (custom user_id UUID), 7-day session in `user_sessions`, httpOnly cookie (secure, samesite=none).
- GET /api/auth/me (cookie-first, Bearer fallback), POST /api/auth/logout (deletes session + clears cookie). AuthContext with OAuth-callback race-condition guards; navbar shows avatar + name + logout when signed in.
- Testing playbook saved at /app/auth_testing.md; test identities tracked in /app/memory/test_credentials.md.

## Backlog
- P1: Admin view for enquiries (or email notification via Resend).
- P1: Real photos of the agency's own cars/temples from the owner.
- P2: Google Maps embed for the Indore office; more packages (Khajuraho, Maheshwar); Hindi language toggle.
- P2: SEO meta/OG tags, Google reviews widget.

## Next Tasks
1. Collect real fleet photos from owner and swap curated stock images.
2. Add enquiry email notifications.
3. Add more routes/packages as the owner shares them.
