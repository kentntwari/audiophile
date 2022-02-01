import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useCategoryProducts = (param) => {
  const [api, setApi] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    let isFetched = true;

    import('../../api/endpoints/category').then((module) => setApi(module.default));

    sanityClient
      .fetch(api)
      .then(
        (results) =>
          isFetched &&
          setCategoryProducts(() => results.filter((res) => res.category === param))
      );

    return () => (isFetched = false);
  }, [api, param]);

  return categoryProducts;
};

export default useCategoryProducts;
