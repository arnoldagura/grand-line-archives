# Grand Line Archives - Setup Guide

## Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- A Supabase account (free tier available at [supabase.com](https://supabase.com))
- Git (optional, for version control)

## Installation Steps

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

To get these credentials:
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy the Project URL and anon/public key

### 3. Set Up Database

1. Open your Supabase project dashboard
2. Go to the SQL Editor
3. Copy the contents of `supabase-schema.sql`
4. Paste and run it in the SQL Editor

This will create all necessary tables, indexes, and security policies.

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
grand-line-archives/
├── app/                      # Next.js 15 App Router
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Landing page
│   └── theories/            # Theories pages
│       ├── page.tsx         # Theories list
│       └── [slug]/          # Individual theory pages
│           └── page.tsx
├── components/              # React components
│   ├── ui/                  # UI components (Button, Card, Badge)
│   ├── navigation.tsx       # Main navigation
│   ├── spoiler-guard.tsx    # Spoiler protection system
│   └── evidence-tag.tsx     # Evidence chain components
├── content/                 # MDX content
│   └── theories/            # Theory MDX files
├── lib/                     # Utility functions
│   ├── utils.ts            # General utilities
│   └── supabase.ts         # Supabase client
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/                  # Static assets
└── velite.config.ts        # MDX processing configuration
```

## Key Features Implemented

### 1. Spoiler Guard System
- Three knowledge levels: Anime Only, Manga Current, Latest Leaks
- Global toggle in the UI
- Context provider for app-wide state management

### 2. Evidence Chain
- Chapter references with colored badges
- SBS (Question Corner) references
- Cover story references
- Clickable tags for future evidence preview

### 3. Bounty System (Database Ready)
- User bounty points tracking
- Theory ratings and votes
- Transaction history

### 4. MDX Content Support
- Write theories in Markdown with frontmatter
- Syntax highlighting with Shiki
- Auto-generated table of contents
- Type-safe content with Velite

## Creating Your First Theory

1. Create a new `.mdx` file in `content/theories/`
2. Add frontmatter:

```mdx
---
title: Your Theory Title
slug: your-theory-slug
summary: A brief summary of your theory
author: YourUsername
knowledgeLevel: manga-current
verified: false
chapters: [100, 200, 300]
sbs: ["Volume 50"]
createdAt: 2024-01-15
updatedAt: 2024-01-15
---

# Your Theory Content

Write your theory here using Markdown...
```

3. The theory will automatically appear on the theories page

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel settings
5. Deploy!

Vercel will automatically detect Next.js and configure everything.

## Next Steps

- [ ] Enable Supabase Authentication for user accounts
- [ ] Implement voting system
- [ ] Add comment functionality
- [ ] Create admin panel for verifying theories
- [ ] Implement search functionality
- [ ] Add more theories to the content directory
- [ ] Configure internationalization (i18n)
- [ ] Add bounty leaderboard page

## Contributing

This is an open-source project! Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

- GitHub Issues: Report bugs or request features
- Discord: Join the crew (link in README)
- Docs: [Next.js](https://nextjs.org/docs) | [Supabase](https://supabase.com/docs) | [Velite](https://velite.js.org)
