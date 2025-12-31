# 🏴‍☠️ The Grand Line Archives

### The Definitive Open-Source Hub for One Piece Theories & Lore

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Discord](https://img.shields.io/badge/Discord-Join%20the%20Crew-5865F2?logo=discord)](https://discord.gg/your-link-here)

**The Grand Line Archives** is a community-driven, open-source platform designed to document the vast world of _One Piece_. Unlike a standard wiki, this platform focuses on **interconnected evidence chains**, allowing fans to bridge the gap between confirmed facts and deep-sea theories.

---

## 🗺️ Project Vision

Our goal is to create a "Digital Poneglyph"—a permanent, searchable, and highly interactive record of Oda's world-building.

- **Evidence-First:** Every theory must be backed by "Evidence Tags" (Chapters, SBS, Cover Stories).
- **Anti-Spoiler:** A robust "Knowledge Level" system that hides content based on where you are in the story.
- **Collaborative:** Anyone can submit a theory via a Pull Request or our integrated CMS.

## 🛠️ The Tech Stack

Built with the modern "Grand Line" stack for speed, SEO, and scalability:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router + Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Custom Shadcn/UI Components
  - 🎨 One Piece-themed design system (Ocean Blue, Pirate Purple, Treasure Gold)
  - 🌓 Seamless dark mode with CSS variables
  - ✨ Smooth animations and micro-interactions
  - 📦 Rich component library (Button, Card, Badge, Tabs, Avatar, Input, Separator)
  - 📱 Responsive mobile-first design
- **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Content:** [Velite](https://velite.js.org/) (Type-safe MDX processing)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features

- **🛡️ Spoiler Guard:** Global toggle for "Anime Only," "Manga Only," and "Latest Leaks."
- **📊 Bounty System:** Earn "Bounty Points" for contributing verified facts or highly-rated theories.
- **🔗 The Evidence Chain:** Click a chapter tag in a theory to see a summary of the referenced panel.
- **🌍 Multi-language Support:** Built-in i18n to support the global One Piece fanbase.

---

## 🚀 Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
