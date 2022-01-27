import React from 'react';
import { Link } from 'react-router-dom';
import useFeaturedContent from '../../utilities/hooks/useFeaturedContent';
import featuredContent from '../../api/endpoints/featuredContent';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const FeaturedProduct = () => {
  const [featuredImage, productDetails] = useFeaturedContent(featuredContent);

  const { mobile } = featuredImage;

  const { title, description, slug, category } = productDetails;

  return (
    <article className="flex h-[510px]">
      <div className="w-full absolute -top-[90px] left-0">
        <img
          className="object-cover w-full h-[600px]"
          src={mobile}
          alt="featured-mobile"
        />
      </div>

      <section className="relative z-10 margin-auto flex flex-col items-center justify-center gap-6">
        <div>
          <p className="uppercase text-white-full text-[14px] tracking-[10px]">
            New Product
          </p>
        </div>

        <h1 className="text-center text-white-full text-[36px] leading-[40px] tracking-[1.29px]">
          {title}
        </h1>

        <p className="text-white-full text-center">{description}</p>

        <Link state={{ slug, category }} to={`/products/${slug}`}>
          <ButtonOrange />
        </Link>
      </section>
    </article>
  );
};

export default FeaturedProduct;
