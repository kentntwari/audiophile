import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useCategories = (endpoint) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    return sanityClient.fetch(endpoint).then((res) => setCategories(res));
  }, [endpoint]);

  return categories;
};

export default useCategories;
