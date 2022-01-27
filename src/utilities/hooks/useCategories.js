import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useCategories = (endpoint) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isFetched = true;

    if (isFetched) return sanityClient.fetch(endpoint).then((res) => setCategories(res));

    return () => (isFetched = false);
  }, [endpoint]);

  return categories;
};

export default useCategories;
