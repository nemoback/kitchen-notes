import assert from "node:assert/strict";
import test from "node:test";

import { matchesRecipe } from "../src/scripts/recipe-filter.js";

const recipe = {
  title: "Creamy tomato pasta",
  ingredients: "rigatoni garlic cherry tomatoes cream basil",
  category: "Dinner",
  tags: "Vegetarian Quick",
};

test("search matches recipe titles and ingredients without case sensitivity", () => {
  assert.equal(matchesRecipe(recipe, "TOMATO", "All recipes"), true);
  assert.equal(matchesRecipe(recipe, "garlic", "All recipes"), true);
  assert.equal(matchesRecipe(recipe, "saffron", "All recipes"), false);
});

test("category filters match the recipe category or a complete tag", () => {
  assert.equal(matchesRecipe(recipe, "", "dinner"), true);
  assert.equal(matchesRecipe(recipe, "", "Vegetarian"), true);
  assert.equal(matchesRecipe(recipe, "", "Quickly"), false);
});

test("search and category filters must both match", () => {
  assert.equal(matchesRecipe(recipe, "basil", "Quick"), true);
  assert.equal(matchesRecipe(recipe, "basil", "Breakfast"), false);
  assert.equal(matchesRecipe(recipe, "pasta", "Dessert"), false);
});

test("an empty query with All recipes leaves a recipe visible", () => {
  assert.equal(matchesRecipe(recipe, "", "All recipes"), true);
});
