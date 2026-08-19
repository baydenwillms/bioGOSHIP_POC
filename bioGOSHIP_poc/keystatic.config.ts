import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // We use 'local' while building on your computer
  },
  collections: {
    publications: collection({
      label: 'Publications',
      slugField: 'title',
      path: 'src/content/publications/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author Name' }),
        date: fields.date({ label: 'Publication Date' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});