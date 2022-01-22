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
            <h2 className="text-center text-[1.75rem] leading-normal tracking-[1px]">
              {res}
            </h2>
          );
        });

        setMottoDescription(() => (
          <p className="text-center opacity-50">{description}</p>
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
    <div className="mt-30 flex flex-col justify-center gap-8">
      {previews.mobile !== null && (
        <figure>
          <img className="rounded-md" src={previews.mobile} alt="motto-on-mobile" />
        </figure>
      )}
      {mottoTitle}
      {mottoDescription}
    </div>
  );
};

export default Motto;
