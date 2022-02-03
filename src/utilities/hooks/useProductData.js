import { useEffect, useState } from 'react';
import sanityClient from '../../client';

const useProductData = (productSlug, productCategory) => {
  /* Get initial info of the poduct:
   image, title,description,price,features, */
  const [apiEndpoint_general_info, setApiEndpoint_general_info] = useState(null);
  const [generalInfo, setGeneralInfo] = useState(null);

  useEffect(() => {
    import('../../api/endpoints/product').then((module) =>
      setApiEndpoint_general_info(module.initialData)
    );
  }, []);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(apiEndpoint_general_info).then((res) => {
      if (isFetched && res !== null)
        return setGeneralInfo(() => {
          const filtered = res.filter(({ slug }) => slug === productSlug);
          return filtered;
        });
    });

    return () => (isFetched = false);
  }, [productSlug, apiEndpoint_general_info]);

  /* Check if product is latest from its category */
  const [apiEndpoint_new_product, setApiEndpoint_new_product] = useState(null);
  const [isNewProduct, setIsNewProduct] = useState(false);

  useEffect(() => {
    import('../../api/endpoints/product').then((module) =>
      setApiEndpoint_new_product(module.sortByCategory(productCategory))
    );
  }, [productCategory]);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(apiEndpoint_new_product).then((res) => {
      if (isFetched && res !== null)
        return setIsNewProduct(() => {
          return res
            .filter(({ category }) => category === true)
            .slice(0, 1)
            .some(({ slug }) => slug === productSlug);
        });
    });

    return () => (isFetched = false);
  }, [productSlug, apiEndpoint_new_product]);

  /* Get box items */
  const [apiEndpoint_box_items, setApiEndpoint_box_items] = useState(null);
  const [boxItems, setBoxItems] = useState(null);

  useEffect(() => {
    import('../../api/endpoints/product').then((module) =>
      setApiEndpoint_box_items(module.getProductBoxItems(productSlug))
    );
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(apiEndpoint_box_items).then((res) => {
      if (isFetched && res !== null) return setBoxItems(() => res.boxItems);
    });

    return () => (isFetched = false);
  }, [apiEndpoint_box_items]);

  /* Get product gallery */
  const [apiEndPoint_product_gallery, setApiEndpoint_product_gallery] = useState(null);
  const [productGallery, setProductGallery] = useState(null);

  useEffect(() => {
    import('../../api/endpoints/product').then((module) =>
      setApiEndpoint_product_gallery(module.getProductGallery(productSlug))
    );
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(apiEndPoint_product_gallery).then((res) => {
      if (isFetched && res !== null) return setProductGallery(() => res);
    });

    return () => (isFetched = false);
  }, [apiEndPoint_product_gallery]);

  /* set prompts to buy other items */
  const [apiEndpoint_prompts, setApiEndpoint_prompts] = useState(null);
  const [prompts, setPrompts] = useState(null);

  useEffect(() => {
    import('../../api/endpoints/product').then((module) =>
      setApiEndpoint_prompts(module.getMoreProducts(productSlug))
    );
  }, [productSlug]);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(apiEndpoint_prompts).then((res) => {
      if (isFetched && res !== null) return setPrompts(() => res);
    });

    return () => (isFetched = false);
  }, [apiEndpoint_prompts]);

  return [generalInfo, isNewProduct, boxItems, productGallery, prompts];
};

export default useProductData;
