export default {
  name: 'bonus',
  title: 'Bonus items',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'quantity',
          title: 'Quantity',
          description: 'quantity to be sent',
          type: 'number',
        },
        {
          name: 'item',
          title: 'Item',
          description: 'item to be sent',
          type: 'reference',
          to:{type:'product_to_be_sent'}
        },
      ],
    },
  ],
};
