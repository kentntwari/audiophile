import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import category from '../../api/endpoints/category';

const useCategoryProducts = (param) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    return sanityClient.fetch(category).then((results) => {
      setCategoryProducts(() => results.filter((res) => res.category === param));
    });
  }, [param]);

  return categoryProducts;
};

export default useCategoryProducts;
