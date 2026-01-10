# Portfolio Website Plan - Tigor Hutasuhut

## Overview
Portfolio website untuk Senior Backend Engineer dengan 5-8 tahun pengalaman. Desain monochrome dengan code syntax style aesthetic.

---

## Tech Stack
- **Framework:** Svelte 5 (non-kit, standalone)
- **Build Tool:** Vite + Bun
- **Styling:** CSS dengan custom properties (no framework)
- **Hosting:** GitHub Pages (static build)
- **Language:** TypeScript

---

## Struktur Project

```
portfolio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── About.svelte
│   │   │   ├── Experience.svelte
│   │   │   ├── Skills.svelte
│   │   │   ├── Contact.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── CodeBlock.svelte      # Reusable code-style component
│   │   ├── data/
│   │   │   └── content.ts            # Semua konten (experience, skills, dll)
│   │   └── styles/
│   │       ├── global.css
│   │       └── variables.css         # CSS custom properties
│   ├── App.svelte                    # Main app component
│   ├── main.ts                       # Entry point
│   └── vite-env.d.ts
├── public/
│   └── favicon.ico
├── index.html
├── package.json
├── vite.config.ts
├── svelte.config.js
├── tsconfig.json
└── bunfig.toml                       # Bun configuration
```

---

## Sections & Fitur

### 1. Header/Navigation
- Nama: "Tigor Hutasuhut"
- Navigation links ke setiap section
- Sticky header dengan blur effect

### 2. Hero Section
- Nama + Tagline dalam format "code comment"
- Social links (GitHub, LinkedIn, Email)
- Animasi typing atau syntax highlight effect
- Contoh style:
  ```
  // Tigor Hutasuhut
  const role = "Senior Backend Engineer";
  ```

### 3. About Section
- Bio singkat dalam format code block
- Highlight years of experience
- Philosophy/approach sebagai engineer

### 4. Experience Section
- Timeline work experience
- Setiap entry dalam format "code block" style:
  ```typescript
  const experience = {
    company: "Company Name",
    role: "Backend Engineer",
    period: "2020 - 2023",
    highlights: ["Built microservices", "Scaled to 1M users"]
  };
  ```

### 5. Skills Section
- Grid layout dengan tech stack
- Categories:
  - **Languages:** Go, TypeScript/Node.js, Lua, Nix
  - **Databases:** PostgreSQL, MySQL, Redis, MongoDB
  - **Infrastructure:** Docker, Kubernetes, AWS/GCP/Azure
  - **Systems:** NixOS, Podman, SystemD, Self-hosting

### 6. Contact Section
- Direct email link (mailto:)
- LinkedIn profile link (sebagai CV/Resume)
- Social links recap (GitHub, LinkedIn)

### 7. Footer
- Copyright
- "Built with Svelte" badge

---

## Design System

### Color Palette (Monochrome)
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-tertiary: #1e1e1e;
  --text-primary: #e0e0e0;
  --text-secondary: #888888;
  --text-muted: #555555;
  --accent: #4ade80;           /* Green untuk highlight (terminal vibe) */
  --accent-secondary: #60a5fa; /* Blue untuk links */
  --border: #2a2a2a;
}
```

### Typography
- Monospace font untuk code elements: `JetBrains Mono` atau `Fira Code`
- Sans-serif untuk body text: `Inter` atau system fonts

### Code Syntax Style Elements
- Line numbers di sisi kiri
- Syntax highlighting colors
- Comment style untuk headings (`// Section Name`)
- Bracket/brace decorations

---

## Implementasi Steps

### Step 1: Project Setup
- Initialize dengan Vite + Svelte template
- Setup Bun sebagai package manager
- Configure TypeScript
- Setup GitHub Pages deployment workflow

### Step 2: Base Styles & Components
- Create CSS variables dan global styles
- Build reusable CodeBlock component
- Setup font loading (JetBrains Mono)

### Step 3: Layout Components
- Header dengan navigation
- Main layout structure
- Footer

### Step 4: Content Sections
- Hero section dengan typing effect
- About section
- Experience timeline
- Skills grid
- Contact form

### Step 5: Interactivity & Polish
- Scroll animations (subtle)
- Form submission handler
- Mobile responsiveness
- Accessibility improvements

### Step 6: Deployment
- Build configuration untuk static output
- GitHub Actions workflow untuk auto-deploy
- Custom domain setup (optional)

---

## Contact Solution
- **Email:** Direct mailto: link (no form needed)
- **Resume:** Link ke LinkedIn profile (no PDF upload)

---

## GitHub Pages Config
- Build output ke `/dist`
- GitHub Actions workflow untuk auto-deploy on push
- Base URL configuration di vite.config.ts

---

## Files to Create (in order)

1. `package.json` - Dependencies
2. `vite.config.ts` - Vite configuration
3. `svelte.config.js` - Svelte configuration
4. `tsconfig.json` - TypeScript config
5. `index.html` - Entry HTML
6. `src/main.ts` - App entry
7. `src/App.svelte` - Root component
8. `src/lib/styles/variables.css` - Design tokens
9. `src/lib/styles/global.css` - Global styles
10. `src/lib/data/content.ts` - Content data
11. `src/lib/components/*.svelte` - All components
12. `.github/workflows/deploy.yml` - CI/CD
