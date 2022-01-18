export default {
  name: 'feature',
  title: 'Features',
  description: "describe product's features",
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section of a feature',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};
