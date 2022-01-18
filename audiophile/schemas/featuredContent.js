export default {
  name: 'featured',
  title: 'Featured content',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      options: {
        disableNew: true,
      },
    },
  ],
};
