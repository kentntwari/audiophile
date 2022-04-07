import React, { memo, useCallback } from 'react';
import useCategories from '../../utilities/hooks/useCategories';
import ListCategory from './ListCategory';

const Categories = ({ applyClass = 'lg:mt-[9.25rem]' }) => {
  const results = useCategories();

  const displayCategories = useCallback(
    () =>
      results &&
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

  return (
    <section
      className={`2xl:w-[1110px] ${applyClass} sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-17 lg:gap-[10px]`}>
      {displayCategories()}
    </section>
  );
};

export default memo(Categories);
