export default {
  name: 'product',
  title: 'Product',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      options: {
        disableNew: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      description: 'add the price of item',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Product images',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'On mobile',
          type: 'image',
        },
        { name: 'tablet', title: 'on Tablet', type: 'image' },
        { name: 'desktop', title: 'on Desktop', type: 'image' },
      ],
      options: {
        columns: 3,
      },
    },
    {
      name: 'description',
      title: 'description',
      description: 'add short product trailer',
      type: 'blockContent',
    },
    {
      name: 'features',
      title: 'Features',
      description: "describe product's features",
      type: 'feature',
    },
    {
      name: 'bonus',
      title: 'In the box',
      description: 'add bonus items',
      type: 'bonus',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      description: 'add images of product in action',
      type: 'gallery',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
};
