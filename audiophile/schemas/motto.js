export default {
  name: 'motto',
  title: 'motto',
  type: 'document',
  fields: [
    {
      name: 'preview_image',
      title: 'Preview Image',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'On mobile',
          type: 'image',
        },
        {
          name: 'tablet',
          title: 'On tablet',
          type: 'image',
        },
        {
          name: 'desktop',
          title: 'On desktop',
          type: 'image',
        },
      ],
      options: {
        columns: 3,
      },
    },
    {
      name: 'motto',
      title: 'Motto',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'text_to_highlight',
          title: 'Text to be highlighted',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};
