export default {
  name: 'gallery',
  title: 'Gallery',
  description: 'add images of product in action',
  type: 'object',
  fields: [
    {
      name: 'mobile',
      title: 'On mobile',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'tablet',
      title: 'On tablet',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'desktop',
      title: 'On desktop',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
};
