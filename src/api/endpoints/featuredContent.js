const featuredContent = `
        *[_type =='featured']{
        "product":product.linked_product->title,
        "product_description":product.trailer,
        "image_desktop": product.product_image.desktop.asset ->url,
        "image_tablet": product.product_image.tablet.asset ->url,
        "image_mobile": product.product_image.mobile.asset ->url
        }[0]`;

export default featuredContent;
