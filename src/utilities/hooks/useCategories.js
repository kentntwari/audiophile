import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [apiEndpoint, setApiEndpoint] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('../../api/endpoints/categories').then(
      (module) => isMounted && setApiEndpoint(module.default)
    );

    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    let isFetched = true;
    sanityClient.fetch(apiEndpoint).then((res) => isFetched && setCategories(res));

    return () => (isFetched = false);
  }, [apiEndpoint]);

  return categories;
};

export default useCategories;
