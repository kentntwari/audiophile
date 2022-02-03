import React, { memo, useCallback } from 'react';
import useCategories from '../../utilities/hooks/useCategories';
import ListCategory from './ListCategory';

const Categories = () => {
  const results = useCategories();

  const displayCategories = useCallback(
    () =>
      results !== null &&
      results.map((item, index) => {
        const { category, category_image, slug } = item;

        return (
          <ListCategory
            key={index}
            name={category}
            thumbnail={category_image}
            slug={slug}
          />
        );
      }),
    [results]
  );

  return <section className="grid grid-cols-1 gap-17">{displayCategories()}</section>;
};

export default memo(Categories);
