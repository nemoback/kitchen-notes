# KitchenNotes — project handover

Last updated: 2026-10-11. Read this together with `AGENTS.md` before working on the project. This is a maintained summary of project decisions, not a verbatim chat transcript. Check the actual code and Git history for exact implementation details.

## Project and user intent

KitchenNotes is a polished recipe discovery website with an editorial food magazine feel. The user wants easy recipe authoring in Markdown and a professional, responsive design. Markdown stores content; Astro, HTML, CSS, and small browser scripts provide the website. No backend, accounts, database, or external runtime services are currently needed.

The source repository is https://github.com/nemoback/kitchen-notes. The user authorized making it public on 2026-10-11 to use free GitHub Pages. GitHub is the source of version history. Use descriptive branches, commits, and preferably pull requests. Do not merge or deploy without authorization. Do not recreate local backup folders: the user explicitly requested their removal after GitHub onboarding.

## Design decisions and history

- The original brand was SupperNotes. The user renamed it KitchenNotes.
- The user disliked green palettes and requested ten design alternatives. They chose **Lavender & Charcoal** and requested removal of the other variants. Preserve this theme.
- Preserve the circular lowercase `k` logo and existing wordmark styling. A decorative dot underneath the circle was removed at the user's request.
- Use generous page gutters; the footer previously touched the screen edges and was corrected.
- Recipe photos and ingredient/tip panels have rounded corners. Preserve that visual consistency.
- The home page's “IN SEASON AND ON THE TABLE” label was removed at the user's request; do not restore it.
- “Our Kitchen” has a local image showing a family of four cooking together, plus localized introductory text, family story, and cooking values. The copy is sample editorial content; do not assume it is independently verified biography.
- Main colors live in `src/styles/global.css`: paper `#f6f2fa`, charcoal `#29242f`, lavender brand `#5c4b70`, dark footer `#2c2637`, accent `#764660`.
- Lora is the serif and Work Sans the Latin sans serif. Russian uses locally hosted Lora Cyrillic and Source Sans 3 Cyrillic (Work Sans has no Cyrillic subset). Font licenses are in `public/fonts/`. No external font requests are needed at runtime.
- The user called an earlier accepted version “0.01”. This was a conversational milestone, not the current package version or a guaranteed Git tag. Do not invent a release/tag mapping.

## Final feature decisions — preserve these

### Search

There is exactly one search field, in the header. English placeholder: “Find a recipe or ingredient”; Czech and Russian equivalents are in `src/i18n.ts`.

The user requested that desktop search sit close to the language buttons. Keep these controls together with the header's normal gap; mobile search occupies its own full-width row.

The user initially requested live results, then explicitly reversed that decision. **Search runs only on Enter/form submission.** Do not restore live filtering while typing, a suggestions dropdown, a second search field in the collection, or navigation triggered by deleting text.

The header uses a GET form to the current language's home page with `q`. Home page JavaScript filters the recipe cards and scrolls to the collection after a submitted nonempty query. Category filters combine with submitted search. Language buttons preserve the query/hash and equivalent page.

As of the October 11 review fixes, each recipe card has search aliases from all three translations (titles, ingredients, localized tags). Queries therefore continue to match when switching language. Search ignores case and Czech accents. Results display in the selected language. Search is a substring match, not a semantic search or automatic query translation.

A scroll-position workaround remains in `BaseLayout.astro` for an earlier issue where typing or repeated Backspace/Delete in an empty search field moved the page upward. Treat this area carefully; verify both editing and intentional scrolling when changing it.

### Recipes

The user removed servings controls and automatic ingredient scaling everywhere. **Do not add servings buttons or scaling back.** Ingredient quantities are static.

Recipe pages show a photo, description, preparation/cooking/total times, ingredients, numbered instructions, optional step photos, and editorial Markdown body. Content schema is `src/content.config.ts`.

There are currently five recipes in each of three languages (15 Markdown files):

- `creamy-tomato-pasta`
- `apple-lattice-pie`
- `chickpea-coconut-curry`
- `herb-roasted-salmon`
- `lemony-green-salad`

The user explicitly removed these recipes from all languages: slow-roasted tomato soup, crispy mushroom toast, Sunday buttermilk pancakes, pear and almond tart. Some unused image assets may remain; do not recreate the recipes simply because their images exist.

The apple lattice pie was imported from https://delo-vcusa.ru/recept/yablochnyj-pirog-s-reshetkoj/. After an incomplete initial import, the user requested the original Russian language, all instructions, and step photos. Preserve the complete 12-step recipe and its 12 local step photographs in all three translations, along with source attribution where present. Do not replace it with a shortened sample recipe.

Available category buttons are drawn from canonical category/tag keys and hidden when no recipes match. Currently Breakfast is hidden because the breakfast recipe was removed. If a breakfast recipe is added it should appear automatically.

## Languages and routing

Czech is the default:

- Home: `/`, `/en/`, `/ru/`
- Our Kitchen: `/our-kitchen/`, `/en/our-kitchen/`, `/ru/our-kitchen/`
- Recipes: `/recipes/{translationKey}/` and the corresponding `/en/` and `/ru/` routes.

UI translations: `src/i18n.ts`. Recipe translations: `src/content/recipes/cs`, `en`, `ru`. Every translation of the same recipe needs the same `translationKey`. Keep category/tag keys in English in YAML, translating display labels centrally. Each entry has its own language, title, description, alt text, ingredient names, instructions, and Markdown note; shared photos and quantities remain consistent.

Header CS/EN/RU links open the equivalent page. The mobile menu has localized open/close labels, `aria-expanded`, `aria-controls`, and Escape closes it and returns focus to the toggle.

## Architecture and important files

- `src/layouts/BaseLayout.astro`: document head, shared header/search/language switch, navigation, footer, menu and search scroll scripts.
- `src/components/HomePage.astro`: hero, category availability, translated search aliases, recipe cards, results filtering and editorial sections.
- `src/components/RecipePage.astro`: recipe details, structured data, ingredient list and photographed instructions.
- `src/components/KitchenPage.astro`: family image and editorial page.
- `src/pages/`: Astro entry points and translated route generation. Consult the directory for exact dynamic route filenames.
- `src/content.config.ts`: recipe collection loader/schema, ingredient structures and instruction image validation.
- `src/scripts/recipe-filter.js`: case/accent normalization and combined search/category matching.
- `src/styles/global.css`: local font declarations, theme variables, shared styles and responsive header/footer.
- `public/images/`: local food and kitchen photos; `public/fonts/`: local licensed font assets.
- `README.md`: run/build instructions and recipe authoring overview.

Astro is configured for static output. New or edited Markdown is picked up by the development server, but production requires a rebuild and redeployment. There is currently no Docker setup; Docker was discussed, not implemented. Static production output can be served from `dist/` by an ordinary HTTP server; do not mistake Astro's development server for the required production architecture.

## Running and checking

The repository uses pnpm and its lockfile. Keep the existing package manager convention unless the user requests a migration. `pnpm install`, `pnpm dev` (usual URL `http://localhost:4321/`), `pnpm check`, `pnpm build`, `pnpm preview`. `pnpm test` runs existing Node search/filter tests. See `package.json` for exact commands.

In this Codex host, PATH may not include Node/pnpm. A bundled Node currently exists at `/Users/vryzkov/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`; do not hardcode that host path into application code. Astro can be invoked with Node and `node_modules/astro/astro.js` when needed. Avoid installing another runtime unnecessarily.

Per `AGENTS.md`, do not add or run tests without a user request to test or verify. Build/type diagnostics can be used when needed to finish implementation. When a user requests verification, check search submission, editing/deleting without scrolling regressions, filters, language switching, recipe links and step images, mobile menu keyboard behavior, and mobile/tablet/desktop layouts across all languages.

## Review and fixes on 2026-10-11

The review found:

1. At tablet width the vertical hero caption overlapped the introductory paragraph. It is now a normal horizontal caption below the photo at widths up to 950px.
2. A Czech search such as `jabl` stopped matching after switching to English. Search now includes aliases from equivalent translated entries.
3. Cyrillic fell back to system fonts. Local Cyrillic Lora and Source Sans 3 subsets were added.
4. Breakfast remained as an empty category. Category availability now follows actual content.
5. Escape did not close the mobile menu and its accessible label stayed “Open”. Both were corrected in all languages.
6. README referred to a removed local backup. The stale reference was replaced with Git/GitHub version-history guidance.

The prior review passed Astro type diagnostics, all four existing search/filter tests, a 21-page static build, and local link/image target validation. The fixes also passed Astro diagnostics (zero errors/warnings/hints), the 21-page production build, and browser checks for tablet caption placement, absence of Breakfast, Escape/menu labels, preserved Czech search results in English/Russian, and Russian mobile layout. Do not treat a prior successful build as proof that future changes are correct.

## Git and recovery notes

GitHub onboarding established `main` at commit `910205e98d5c61cc4ac34d5106e53e79434ffdcf`; earlier connected-GitHub commit `2effb3d28c29604811c0c0d4b0f9e05df28b32b9` is its parent. An older local import was preserved under `local-import-snapshot`. Verify these refs before relying on them. Restore changes using Git history, not deleted backup directories.

Connected GitHub tools work in this environment, while terminal HTTPS Git may lack credentials and SSH may lack a trusted host key. Prefer the connected tools when needed; do not read credentials, weaken SSH/certificate checks, or invent authentication. If local commit SHAs differ from a connector-created commit, be explicit about remote branch tracking rather than silently claiming they are identical.

Ignore generated build output, `.astro`, `node_modules`, backups, version snapshots, preview captures, credentials, and local environment files. Keep source, content, assets, documentation, configuration and lockfiles in Git. Do not delete or overwrite unrelated user changes.

## GitHub Pages hosting (2026-10-11)

The user requested free hosting and explicitly chose a public repository. Target: https://nemoback.github.io/kitchen-notes/. GitHub Actions deployment is configured in `.github/workflows/deploy.yml` for pushes to `main` or manual runs; repository Pages source must be GitHub Actions. See the hosting task/Actions run for the actual publication status.

Astro's `SITE_URL` defaults to `https://nemoback.github.io`; `SITE_BASE_PATH` defaults to `/` for local development and is `/kitchen-notes/` in the deploy workflow. `src/paths.ts` supplies base-aware image/link helpers and base removal for language switching. Public font references are bundled and rebased by Vite. Recipe Markdown remains portable with `/images/...` paths. Production recipe JSON-LD and alternate language metadata use absolute URLs.

Future commits to `main` deploy automatically. This authorization applies to the requested first publication; follow the user's instructions for later merges/deployments. Do not switch visibility back or change the hosting address without discussing it.

GitHub repository visibility was changed to public and Pages source set to GitHub Actions on 2026-10-11. PR #2 was merged for the first deployment. The first Actions build revealed an invalid pre-existing pnpm workspace template (missing packages and placeholder build approvals); `pnpm-workspace.yaml` now declares the root package and the esbuild/sharp build dependencies. Check Actions for final deployment status.
