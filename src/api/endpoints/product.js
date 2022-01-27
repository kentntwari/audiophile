export const initialData = `
*[_type =='product']{
  "slug":slug.current,
  "image_mobile":product_image.mobile.asset ->url,
  "image_tablet":product_image.tablet.asset ->url,
  "image_desktop":product_image.desktop.asset ->url,
  title,
  "description":product_description[0].children[0].text,
  price,
  "feature_one": product_features[0].section[0].children[0].text,
  "feature_two": product_features[1].section[0].children[0].text,
}
    `;

export function sortByCategory(category) {
  return `*[_type =='product']| order(_createdAt desc){
  "slug":slug.current,
  "category":category->title =="${category}"
}`;
}

export function getProductBoxItems(product) {
  return `*[_type =='product' && slug.current =='${product}']{
  "boxItems":in_the_box[]{
  quantity,
  "item": item ->product
  }
  }[0]`;
}

export function getProductGallery(product) {
  return `*[_type =='product' && slug.current =='${product}']{
  "mobile":product_gallery.mobile[].asset->url,
  "tablet":product_gallery.tablet[].asset->url,
  "desktop":product_gallery.desktop[].asset->url,
  }[0]`;
}

export function getMoreProducts(product) {
  return `
    *[_type =='product' && !(slug.current =='${product}')] [0..2] {
      "product_images": {
        "mobile":product_image.mobile.asset->url,
        "tablet":product_image.tablet.asset->url,
        "desktop":product_image.desktop.asset->url,
      },
      title,
      "slug":slug.current,
      "category":category->title
    }`;
}
