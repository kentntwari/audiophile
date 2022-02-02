import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [api, setApi] = useState(null);

  useEffect(() => {
    import('../../api/endpoints/categories').then((module) => setApi(module.default));
  }, []);

  useEffect(() => {
    let isFetched = true;

    sanityClient.fetch(api).then((res) => isFetched && setCategories(res));

    return () => (isFetched = false);
  }, [api]);

  return categories;
};

export default useCategories;
