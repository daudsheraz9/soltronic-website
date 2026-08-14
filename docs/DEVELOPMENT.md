# Soltronic Energy Development Guide

## Setup & Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Copy `.env.example` to `.env.local` and configure Supabase keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Type Check & Build**:
   ```bash
   npx tsc --noEmit
   npm run build
   ```
