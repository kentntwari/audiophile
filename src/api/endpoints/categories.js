const categories = `
        *[_type =='category'] | order(_createdAt){
        "category":title,
        "category_image":image.asset->url,
        "slug":slug.current
      }
      `;

export default categories;
