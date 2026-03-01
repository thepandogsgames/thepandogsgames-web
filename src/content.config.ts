import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const team = defineCollection({
  loader: file('src/content/team.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      jobKey: z.string(),
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      github: z.string().url().optional(),
      instagram: z.string().url().optional(),
      artstation: z.string().url().optional(),
    }),
})

export const collections = { team }
