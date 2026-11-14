import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'
import { z } from 'astro/zod'

const games = defineCollection({
  loader: file('src/content/games.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      link: z.url(),
      platforms: z.array(z.enum(['windows', 'itchio'])),
    }),
})

const team = defineCollection({
  loader: file('src/content/team.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      jobKey: z.string(),
      linkedin: z.url().optional(),
      twitter: z.url().optional(),
      github: z.url().optional(),
      instagram: z.url().optional(),
      artstation: z.url().optional(),
    }),
})

export const collections = { games, team }
