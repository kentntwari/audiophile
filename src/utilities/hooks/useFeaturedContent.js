import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFeaturedContent = (endpoint) => {
  const [featuredImage, setFeaturedImage] = useState(() => ({
    mobile: null,
    tablet: null,
    desktop: null,
  }));

  const [productDetails, setProductDetails] = useState(() => ({
    title: '',
    description: '',
  }));

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient
        .fetch(endpoint)
        .then(
          ({
            image_desktop,
            image_mobile,
            image_tablet,
            product,
            product_description,
            slug,
            category,
          }) => {
            setFeaturedImage((prev) => {
              return {
                ...prev,
                mobile: image_mobile,
                tablet: image_tablet,
                desktop: image_desktop,
              };
            });

            setProductDetails((prev) => {
              return {
                ...prev,
                title: product,
                description: product_description,
                slug,
                category,
              };
            });
          }
        );

    return () => (isFetched = false);
  }, [endpoint]);

  return [featuredImage, productDetails];
};

export default useFeaturedContent;
