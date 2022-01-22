import React from 'react';
import yx1Earphones from '../../utilities/images/mobile/image-earphones-yx1.jpg';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const BuyProductTwo = () => {
  return (
    <article className="grid grid-cols-1 gap-6">
      <figure>
        <img className="rounded-md" src={yx1Earphones} alt="yx1-earphones" />
      </figure>

      <section className="px-6 py-[2.563rem] rounded-md bg-white-dimmed flex flex-col gap-8">
        <h2 className="text-[1.75rem] leading-normal tracking-[2px]">yx1 earphones</h2>
        <ButtonWhite addClass={['bg-transparent']} removeClass={['bg-white-full']} />
      </section>
    </article>
  );
};

export default BuyProductTwo;
