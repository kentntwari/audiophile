export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
