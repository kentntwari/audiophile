import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import { initialData, sortedByCategory } from '../../api/endpoints/product';

const useProductData = (productSlug, productCategory) => {
  /* Get initial info of the poduct:
   image, title,description,price,features, */
  const [generalInfo, setGeneralInfo] = useState(null);

  /* Chekc if product is latest
  from its category */
  const [isNewProduct, setIsNewProduct] = useState(false);

  useEffect(() => {
    return sanityClient.fetch(initialData).then((res) =>
      setGeneralInfo(() => {
        const filtered = res.filter(({ slug }) => slug === productSlug);

        return filtered;
      })
    );
  }, [productSlug]);

  useEffect(() => {
    return sanityClient.fetch(sortedByCategory(productCategory)).then((res) =>
      setIsNewProduct(() => {
        return res
          .filter(({ category }) => category === true)
          .slice(0, 1)
          .some(({ slug }) => slug === productSlug);
      })
    );
  }, [productSlug, productCategory]);

  return [generalInfo, isNewProduct].flat();
};

export default useProductData;
