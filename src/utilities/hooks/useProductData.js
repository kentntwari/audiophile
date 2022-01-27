import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import {
  initialData,
  sortByCategory,
  getProductBoxItems,
  getProductGallery,
  getMoreProducts,
} from '../../api/endpoints/product';

const useProductData = (productSlug, productCategory) => {
  /* Get initial info of the poduct:
   image, title,description,price,features, */
  const [generalInfo, setGeneralInfo] = useState(null);

  /* Check if product is latest from its category */
  const [isNewProduct, setIsNewProduct] = useState(false);

  /* Get boc items */
  const [boxItems, setBoxItems] = useState(null);

  /* Get product gallery */
  const [productGallery, setProductGallery] = useState(null);

  /* set prompts to buy other items */
  const [prompts, setPrompts] = useState(null);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient.fetch(initialData).then((res) =>
        setGeneralInfo(() => {
          const filtered = res.filter(({ slug }) => slug === productSlug);

          return filtered;
        })
      );

    return () => (isFetched = false);
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient.fetch(sortByCategory(productCategory)).then((res) =>
        setIsNewProduct(() => {
          return res
            .filter(({ category }) => category === true)
            .slice(0, 1)
            .some(({ slug }) => slug === productSlug);
        })
      );

    return () => (isFetched = false);
  }, [productSlug, productCategory]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient
        .fetch(getProductBoxItems(productSlug))
        .then(({ boxItems }) => setBoxItems(() => boxItems));

    return () => (isFetched = false);
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient
        .fetch(getProductGallery(productSlug))
        .then((res) => setProductGallery(() => res));

    return () => (isFetched = false);
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient
        .fetch(getMoreProducts(productSlug))
        .then((res) => setPrompts(() => res));

    return () => (isFetched = false);
  }, [productSlug]);

  return [generalInfo, isNewProduct, boxItems, productGallery, prompts];
};

export default useProductData;
