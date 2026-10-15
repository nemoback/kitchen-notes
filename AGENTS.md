# KitchenNotes project workflow

Read `PROJECT_HANDOVER.md` before making changes. It records the project history, user decisions, architecture, and current behavior. Update it when features or decisions change.

Use the connected GitHub repository as the source of version history for this website. Preserve the current Czech default, English and Russian translations, and Lavender & Charcoal design unless the user requests changes.

For user-requested features, fixes, and content updates, work directly on the existing `main` branch, commit completed changes, and push to `origin/main`. The user explicitly authorized this workflow on 2026-10-15 and does not want recurring PR, merge, or deployment approval requests. A push to `main` automatically deploys through GitHub Pages; this routine deployment is authorized. Do not create a `master` branch, feature branch, or pull request unless the user specifically requests one. Preserve unrelated changes and synchronize with the remote before committing.

Keep local backups, version snapshots, generated output, dependencies, preview captures, and credentials out of Git. Recipes live in Markdown under `src/content/recipes/cs`, `en`, and `ru`; preserve matching translation keys across languages.

Do not add or run tests unless the user requests testing or verification. Use project build or type diagnostics when needed to finish implementation.
