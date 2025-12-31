import { defineConfig, s } from 'velite'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    theories: {
      name: 'Theory',
      pattern: 'theories/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('theories'),
          summary: s.string().max(999),
          author: s.string(),
          knowledgeLevel: s.enum(['anime-only', 'manga-current', 'latest-leaks']),
          verified: s.boolean().default(false),
          chapters: s.array(s.number()).optional(),
          sbs: s.array(s.string()).optional(),
          coverStories: s.array(s.string()).optional(),
          createdAt: s.isodate(),
          updatedAt: s.isodate(),
          content: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/theories/${data.slug}` })),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'one-dark-pro' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
