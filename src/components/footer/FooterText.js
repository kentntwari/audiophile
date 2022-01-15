import React from 'react';

const FooterText = ({ style, text }) => {
  return (
    <p className={`${style ? style : ''} text-center text-white-full opacity-50`}>
      {text}
    </p>
  );
};

export default FooterText;
