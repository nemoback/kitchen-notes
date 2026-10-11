export interface RecipeSearchData {
  title?: string;
  ingredients?: string;
  category?: string;
  tags?: string;
  searchTags?: string;
}

export function matchesRecipe(
  recipe: RecipeSearchData,
  term: string,
  filter: string,
): boolean;
