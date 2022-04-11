import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFeaturedContent = () => {
  const [apiEndpoint, setApiEndpoint] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('../../api/endpoints/featuredContent').then(
      (module) => isMounted && setApiEndpoint(module.default)
    );

    return () => (isMounted = false);
  }, []);

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

    sanityClient
      .fetch(apiEndpoint)
      .then((res) => {
        if (isFetched && res !== null) {
          setFeaturedImage((prev) => {
            return {
              ...prev,
              mobile: res.image_mobile,
              tablet: res.image_tablet,
              desktop: res.image_desktop,
            };
          });

          setProductDetails((prev) => {
            return {
              ...prev,
              title: res.product,
              description: res.product_description,
              slug: res.slug,
              category: res.category,
            };
          });
        }
      })
      .catch((error) => console.error(error));

    return () => (isFetched = false);
  }, [apiEndpoint]);

  return [featuredImage, productDetails];
};

export default useFeaturedContent;
