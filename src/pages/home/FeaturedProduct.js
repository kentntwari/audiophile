import React from 'react';
import { Link } from 'react-router-dom';

import useFeaturedContent from '../../utilities/hooks/useFeaturedContent';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const FeaturedProduct = () => {
  const [featuredImage, productDetails] = useFeaturedContent();
  const { mobile, tablet, desktop } = featuredImage;
  const { title, description, slug, category } = productDetails;

  return (
    <article className="flex h-[510px] 2xl:items-center 2xl:w-[1110px] 2xl:mx-auto 2xl:h-[730px]">
      <div
        className="hidden lg:block absolute w-full h-[730px]
         top-0 left-0 bg-black-featured"></div>

      <div className="w-full absolute -top-[90px] 2xl:-top-[70px] left-0">
        <img
          className="object-cover w-full h-[600px] md:hidden"
          src={mobile}
          alt="featured-mobile"
        />

        <img
          className="hidden md:block 2xl:hidden object-contain w-full h-[730px]"
          src={tablet}
          alt="featured-tablet"
        />

        <img
          className="hidden 2xl:block w-full object-contain h-[730px] mx-auto"
          src={desktop}
          alt="featured-desktop"
        />
      </div>

      <section
        className="md:w-[400px] relative z-10 mx-auto lg:mt-auto 2xl:mx-0 2xl:mt-0 flex
         flex-col items-center 2xl:items-start justify-center gap-6 2xl:gap-[30px]">
        <div>
          <p className="uppercase text-white-full text-[14px] tracking-[10px] lg:opacity-50">
            New Product
          </p>
        </div>

        <h1
          className="text-center 2xl:text-left text-white-full text-[36px] lg:text-h1
         leading-[40px] lg:leading-[58px] tracking-[1.29px] lg:tracking-[2px]">
          {title}
        </h1>

        <p className="text-white-full text-center 2xl:text-left lg:w-[349px] lg:opacity-75">
          {description}
        </p>

        <Link state={{ slug, category }} to={`/products/${slug}`}>
          <ButtonOrange />
        </Link>
      </section>
    </article>
  );
};

export default FeaturedProduct;
