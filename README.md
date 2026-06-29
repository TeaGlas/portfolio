# Portfolio – Tessel Glas

Persoonlijke portfoliowebsite gebouwd met **Next.js** en **React**. De site is meertalig (Nederlands en Engels) en bevat secties voor een introductie, tech stack, projecten, CV-download en contactgegevens.

## Inhoud

- [Aan de slag](#aan-de-slag)
- [Scripts](#scripts)
- [Projectstructuur](#projectstructuur)
- [Aanpassen](#aanpassen)
- [Tech stack](#tech-stack)

## Aan de slag

**Vereisten:** Node.js 18 of hoger.

```bash
# Installeer afhankelijkheden
npm install

# Start de ontwikkelserver
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000) in je browser.

## Scripts

| Commando | Beschrijving |
|---|---|
| `npm run dev` | Start de ontwikkelserver met hot-reload |
| `npm run build` | Bouwt de productieversie |
| `npm run start` | Start de productieserver (na `build`) |
| `npm run lint` | Voert ESLint uit |

## Projectstructuur

```
portfolio/
├── app/
│   ├── layout.jsx      # Root layout (metadata, html/body)
│   └── page.jsx        # Entrypoint → verwijst naar /page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── CvSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── SectionLabel.jsx
│   ├── PillButton.jsx
│   └── Tag.jsx
├── data/
│   └── portfolio.js    # Alle content, skills en contactlinks
├── page.jsx            # Hoofd-component met taalstate en scroll-navigatie
└── page.module.css     # Alle stijlen
```

## Aanpassen

Alle tekst, projecten, skills en contactgegevens staan in [`data/portfolio.js`](data/portfolio.js):

- **Profiel & teksten** – pas `CONTENT.nl` en `CONTENT.en` aan
- **Skills** – pas het `SKILLS`-object aan (Frontend / Backend / Tools)
- **Projecten** – voeg toe of wijzig entries in `CONTENT[taal].work.projects`
- **Contactlinks** – pas `CONTACT_LINKS` aan (e-mail, LinkedIn, GitHub)
- **CV** – vervang `public/cv.pdf` door je eigen CV

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- CSS Modules

---
---

# Portfolio – Tessel Glas

Personal portfolio website built with **Next.js** and **React**. The site is bilingual (Dutch and English) and includes sections for an introduction, tech stack, projects, CV download, and contact details.

## Contents

- [Getting started](#getting-started)
- [Scripts](#scripts-1)
- [Project structure](#project-structure)
- [Customising](#customising)
- [Tech stack](#tech-stack-1)

## Getting started

**Requirements:** Node.js 18 or higher.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with hot-reload |
| `npm run build` | Build for production |
| `npm run start` | Start the production server (after `build`) |
| `npm run lint` | Run ESLint |

## Project structure

```
portfolio/
├── app/
│   ├── layout.jsx      # Root layout (metadata, html/body)
│   └── page.jsx        # Entrypoint → delegates to /page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── CvSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── SectionLabel.jsx
│   ├── PillButton.jsx
│   └── Tag.jsx
├── data/
│   └── portfolio.js    # All content, skills, and contact links
├── page.jsx            # Main component with language state and scroll navigation
└── page.module.css     # All styles
```

## Customising

All text, projects, skills, and contact details live in [`data/portfolio.js`](data/portfolio.js):

- **Profile & copy** – edit `CONTENT.nl` and `CONTENT.en`
- **Skills** – update the `SKILLS` object (Frontend / Backend / Tools)
- **Projects** – add or edit entries in `CONTENT[lang].work.projects`
- **Contact links** – update `CONTACT_LINKS` (email, LinkedIn, GitHub)
- **CV** – replace `public/cv.pdf` with your own file

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- CSS Modules
