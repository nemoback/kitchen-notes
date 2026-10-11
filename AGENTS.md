# KitchenNotes project workflow

Use the connected private GitHub repository as the source of version history for this website. Preserve the current Czech default, English and Russian translations, and Lavender & Charcoal design unless the user requests changes.

For future features and fixes, use a descriptive Git branch, commit the changes, and push the branch to the configured GitHub remote. Prefer a pull request for review. Do not merge or deploy unless the user authorizes it.

Keep local backups, version snapshots, generated output, dependencies, preview captures, and credentials out of Git. Recipes live in Markdown under `src/content/recipes/cs`, `en`, and `ru`; preserve matching translation keys across languages.

Do not add or run tests unless the user requests testing or verification. Use project build or type diagnostics when needed to finish implementation.
