import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    paper_title: z.string().optional(),
    description: z.string(),
    venue: z.string().optional(),
    year: z.number(),
    tech: z.array(z.string()).default([]),
    authors: z.string().optional(),
    paper: z.string().optional(),
    code: z.url().optional(),
    html: z.url().optional(),
    award: z.string().optional(),
    status: z.string().optional(),
    // Listed on /publications only, not on /projects or the homepage.
    hide_from_projects: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
