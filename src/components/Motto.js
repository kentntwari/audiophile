import React, { useState, useEffect, Fragment } from 'react';
import sanityClient from '../client';

const Motto = () => {
  const [mottoTitle, setMottoTitle] = useState([]);
  const [mottoDescription, setMottoDescription] = useState('');
  const [previews, setPreviews] = useState(() => ({
    mobile: null,
    tablet: null,
    desktop: null,
  }));

  useEffect(() => {
    return sanityClient
      .fetch(
        `*[_type=='motto']{
        "motto-description":motto.description[0].children[0].text,
        "motto-title":motto.title,
        "portion-to-be-highlighted":motto.text_to_highlight,
        "preview-desktop":preview_image.desktop.asset->url,
        "preview-mobile":preview_image.mobile.asset->url,
        "preview-tablet":preview_image.tablet.asset->url,
}`
      )
      .then(([res]) => {
        const {
          'motto-description': description,
          'motto-title': title,
          'portion-to-be-highlighted': highlight,
          'preview-desktop': imageOnDesktop,
          'preview-mobile': imageOnMobile,
          'preview-tablet': imageOnTablet,
        } = res;

        setMottoTitle((prev) => {
          prev = title;

          let res = prev.split(' ').map((word, index) => {
            if (word === highlight) {
              return [
                <Fragment key={index}>
                  <span className="text-orange-full">{word}</span>{' '}
                </Fragment>,
              ][0];
            }

            return (
              <Fragment key={index}>
                <span className="inline-block">{word}</span>{' '}
              </Fragment>
            );
          });

          return (
            <h2
              className="text-center 2xl:text-left text-[1.75rem]
             2xl:text-h2 leading-normal tracking-[1px]">
              {res}
            </h2>
          );
        });

        setMottoDescription(() => (
          <p className="mt-4 2xl:mt-8 text-center 2xl:text-left opacity-50">
            {description}
          </p>
        ));

        setPreviews((prev) => {
          return {
            ...prev,
            mobile: imageOnMobile,
            tablet: imageOnTablet,
            desktop: imageOnDesktop,
          };
        });
      })
      .catch((err) => console.error('something is wrong', err.message));
  }, []);

  return (
    <div
      className="mt-30 flex flex-col 2xl:w-[1110px] 2xl:mx-auto
       2xl:flex-row-reverse justify-center 2xl:items-center gap-8 2xl:gap-40">
      {previews.mobile && (
        <figure>
          <img
            className="rounded-md lg:hidden"
            src={previews.mobile}
            alt="motto-on-mobile"
          />

          <img
            className="hidden lg:block 2xl:hidden rounded-md"
            src={previews.tablet}
            alt="motto-on-tablet"
          />

          <img
            className="hidden 2xl:block rounded-md"
            src={previews.desktop}
            alt="motto-on-desktop"
          />
        </figure>
      )}

      <div className="lg:w-[35.8rem] lg:mx-auto">
        {mottoTitle}
        {mottoDescription}
      </div>
    </div>
  );
};

export default Motto;
