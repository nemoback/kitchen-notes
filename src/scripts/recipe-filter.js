export function matchesRecipe(recipe, term, filter) {
  const normalize = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const normalizedTerm = normalize(term.trim());
  const normalizedFilter = filter.trim().toLowerCase();
  const title = recipe.title ?? "";
  const ingredients = recipe.ingredients ?? "";
  const tagText = recipe.tags ?? "";
  const searchable = normalize(`${title} ${ingredients} ${recipe.searchTags ?? tagText}`);
  const tags = tagText
    .split(/\s+/)
    .map((tag) => tag.toLowerCase())
    .filter(Boolean);
  const category = (recipe.category ?? "").toLowerCase();
  const matchesText = !normalizedTerm || searchable.includes(normalizedTerm);
  const matchesCategory =
    normalizedFilter === "all recipes" ||
    category === normalizedFilter ||
    tags.includes(normalizedFilter);

  return matchesText && matchesCategory;
}
