# Soltronic Energy Architecture Guide

## Overview
This codebase follows a **thin routes + feature-based business logic** architecture in Next.js App Router.

## Directory Structure

```text
src/
├── app/                  # Next.js App Router (thin routes, metadata, composition layer)
│   ├── (marketing)/      # Public content routes (about, services, epc, news, etc.)
│   ├── (catalog)/        # Product & brand presentation routes (/products, /brands)
│   ├── (account)/        # User authentication & user-specific pages (/signin, /favourite)
│   ├── pv/               # Solar PV calculator route (/pv)
│   └── auth/callback/    # OAuth/Supabase auth callback handler
│
├── components/           # Reusable UI & presentation components across the app
│   ├── layout/           # Header, Navbar, Footer, MobileMenu
│   ├── ui/               # Generic primitive UI elements (sliders, buttons, cards, modals)
│   ├── product/          # Generic product presentation widgets
│   └── seo/              # Schema markup & structured data generators
│
├── features/             # Business features with colocated logic
│   ├── catalog/          # Catalog browser, detail view, product schemas & queries
│   ├── auth/             # Authentication context, signin/signup forms & actions
│   ├── favourites/       # Favourites state, drawer, toast, and store
│   └── calculator/       # Solar PV calculation formulas, form & results
│
├── lib/                  # External service integrations & infrastructure
│   └── supabase/         # Supabase client (client.ts), server (server.ts), proxy (proxy.ts)
│
├── config/               # Static site configuration, navigation, brand definitions
├── data/                 # Application datasets & generated catalog data
└── types/                # Core domain TypeScript interfaces (product, brand, auth)
```

## Architectural Rules
1. **Thin Routes**: `src/app/` page files should only handle route params, page metadata, and compose top-level feature components.
2. **Feature Boundaries**: Put feature-specific logic, queries, and state inside `src/features/<feature>/`.
3. **Global Reusability**: Only put components in `src/components/` if they are reused across multiple features or layout boundaries.
4. **Supabase Client Separation**: Use `@/lib/supabase/client` for Client Components and `@/lib/supabase/server` for Server Components / Server Actions.
