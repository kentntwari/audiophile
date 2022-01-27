import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import category from '../../api/endpoints/category';

const useCategoryProducts = (param) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched)
      return sanityClient.fetch(category).then((results) => {
        setCategoryProducts(() => results.filter((res) => res.category === param));
      });

    return () => (isFetched = false);
  }, [param]);

  return categoryProducts;
};

export default useCategoryProducts;
