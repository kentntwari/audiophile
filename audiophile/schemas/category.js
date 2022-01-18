export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'On mobile',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
        {
          name: 'tablet',
          title: 'On tablet',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
        {
          name: 'desktop',
          title: 'On desktop',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],

      options: {
        columns: 3,
      },
    },
  ],
};
