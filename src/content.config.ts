import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    language: z.enum(["cs", "en", "ru"]),
    translationKey: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    category: z.string(),
    tags: z.array(z.string()),
    prepTime: z.number(),
    cookTime: z.number(),
    featured: z.boolean().default(false),
    ingredients: z.array(
      z.object({
        amount: z.number().optional(),
        unit: z.string().optional(),
        item: z.string(),
      }),
    ),
    instructions: z.array(z.string()),
    instructionImages: z.array(z.object({ image: z.string(), imageAlt: z.string() })).optional(),
  }).refine((recipe) => !recipe.instructionImages || recipe.instructionImages.length === recipe.instructions.length, {
    message: "Provide one instruction image for each step when instructionImages is present",
    path: ["instructionImages"],
  }),
});

export const collections = { recipes };
