import { defineCollection } from "astro/content/config"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/project" }),
  schema: z.object({
    title: z.string(),
    images: z.array(z.string()),
    tags: z.array(z.string()),
    createdAt: z.string(),
    links: z
      .object({
        github: z.string().optional(),
        live: z.string().optional(),
      })
      .optional(),
  }),
})

export const collections = { projects }
