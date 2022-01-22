export default {
  name: 'featured',
  title: 'Featured content',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'object',
      fields: [
        {
          name: 'linked_product',
          title: 'Linked product',
          type: 'reference',
          to: [{ type: 'product' }],
          options: {
            disableNew: true,
          },
        },
        {
          name: 'trailer',
          title: 'product_trailer',
          type: 'text',
        },
        {
          name: 'product_image',
          title: 'Linked product image',
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
      ],
    },
  ],
};
