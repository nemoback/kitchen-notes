# KitchenNotes

Source repository: [nemoback/kitchen-notes](https://github.com/nemoback/kitchen-notes).

A responsive recipe discovery site built with Astro. Recipe entries live in `src/content/recipes/` as Markdown files with validated YAML frontmatter.

## Run locally

```sh
pnpm install
pnpm dev
```

Run the Astro and TypeScript diagnostics with `pnpm check`. Run the recipe search and filter regression tests with `pnpm test`.

## Build

```sh
pnpm build
pnpm preview
```

## Add a recipe

Create matching `.md` files in `src/content/recipes/cs/`, `src/content/recipes/en/`, and `src/content/recipes/ru/`. Each entry needs its `language` (`cs`, `en`, or `ru`) and the same `translationKey` (for example, `apple-lattice-pie`) across all three translations. Follow the schema in `src/content.config.ts`: include the title, description, image and alt text, category, tags, prep and cook times, ingredient data, and numbered instructions in YAML frontmatter. Add a short editorial note as the Markdown body. The collection schema validates each entry during the build.

Recipe photographs and the Lora and Work Sans fonts are hosted locally in `public/`, so the site does not need third-party image or font requests at runtime. Font license files are included alongside the font files.

The site uses the Lavender & Charcoal visual theme throughout. Recipe text, search, and filters are independent of the presentation.

## Languages

Czech is the default at `/`. English uses `/en/` and Russian uses `/ru/`. The header language buttons open the equivalent page or recipe, preserving submitted search parameters. Navigation, editorial text, metadata, image descriptions, and every recipe are translated. Search runs when the form is submitted with Enter. It searches recipe titles, ingredients, and tags across all three translations, so changing language preserves matching results; Czech accents are optional in queries.

Interface translations live in `src/i18n.ts`. Recipe translations remain separate Markdown files with identical ingredient quantities and shared local photographs. Keep category and tag keys in English in frontmatter; their display labels are translated centrally, so category filtering stays consistent. The original Russian apple recipe retains all 12 steps and photos in every language.

Version history is kept in Git and the private GitHub repository. Local backup folders have been removed.

For project history, user preferences, implementation details, and future development guidance, read [PROJECT_HANDOVER.md](PROJECT_HANDOVER.md).

## GitHub Pages

Deployment target: https://nemoback.github.io/kitchen-notes/. The user authorized making the repository public to use free GitHub Pages. In repository Settings → Pages, use **GitHub Actions** as the source. The workflow in `.github/workflows/deploy.yml` checks, builds, and deploys changes pushed to `main`; it can also be started manually.

Local development stays at `/`. To build the Pages version locally:

```sh
SITE_BASE_PATH=/kitchen-notes/ pnpm build
SITE_BASE_PATH=/kitchen-notes/ pnpm preview
```

Preview it at `http://localhost:4321/kitchen-notes/` (or the port printed by Astro). `SITE_URL` can override the production origin; `SITE_BASE_PATH` controls the deployment prefix. Shared path helpers prefix internal links and recipe images, and Vite bundles/rebases font URLs. Markdown photo paths stay `/images/...`.

New recipes publish after their Markdown files are committed and pushed directly to `main`. The user has authorized this routine workflow without pull-request approvals. Deployment status is visible in GitHub Actions.
