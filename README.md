# cosminpopa.ro

Personal academic website for **Cosmin-Gabriel Popa**, Senior Lecturer (Șef de Lucrări) at the Department of Anatomy and Embryology, University of Medicine and Pharmacy "Gr. T. Popa" Iași, Romania.

## About

A minimalist, text-first academic portfolio inspired by [Pascal Michaillat's](https://pascalmichaillat.org/) approach to faculty websites. Built with Next.js 14 and deployed on Vercel, the site serves as a professional hub for teaching, research, digital projects, and academic blogging — fully bilingual (Romanian/English) with a single-click language toggle.

The design philosophy prioritizes content over decoration: serif typography (Crimson Pro), monospaced accents (JetBrains Mono), generous whitespace, and zero unnecessary imagery. Every page is server-rendered static HTML, ensuring fast load times, excellent SEO performance, and full accessibility for both traditional search engines and AI crawlers.

## Features

- **Bilingual RO/EN** — complete content in both languages with instant toggle
- **SEO optimized** — meta tags, Open Graph, Twitter Cards, canonical URLs, auto-generated sitemap.xml
- **AGEO optimized** — Schema.org structured data (Person + WebSite), `/llms.txt` for AI crawlers (GPTBot, Claude-Web, PerplexityBot), semantic HTML, explicit robot permissions
- **GDPR compliant** — cookie consent banner (bilingual), Google Analytics loads only after explicit user consent, IP anonymization enabled, dedicated `/privacy` page with full GDPR disclosure in both languages
- **Google Analytics** — integrated via environment variable, conditional on cookie consent
- **Medical Research Toolkit** — embedded student tool for unified search across PubMed, Google Scholar, Semantic Scholar, and Consensus
- **NASCORA project showcase** — teratology prevention platform (nascora.health)
- **Academic blog** — expandable posts with tag filtering, ready for MDX migration
- **CV download** — PDF served from `/cv.pdf`
- **Mobile responsive** — hamburger menu, fluid typography, touch-optimized interactions
- **Security headers** — X-Content-Type-Options, X-Frame-Options, XSS protection, strict referrer policy

## Tech Stack

Next.js 14 · React 18 · Vercel · Google Analytics 4 · Schema.org · Static rendering

## Getting Started

```bash
npm install
cp .env.example .env.local  # add your GA Measurement ID
npm run dev
```

## License

Content © 2026 Cosmin-Gabriel Popa. All rights reserved.
