const category = `
*[_type =='product'] | order(_createdAt desc){
  title,
  "description":product_description[0].children[0].text,
  "image_mobile":product_image.mobile.asset ->url,
  "image_tablet":product_image.tablet.asset ->url,
  "image_desktop":product_image.desktop.asset ->url,
  "category": category->title,
  "slug":slug.current
}
`;

export default category;
