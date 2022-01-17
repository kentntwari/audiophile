import React from 'react';

const FooterText = ({ customClassValue, text }) => {
  return (
    <p
      className={`${
        customClassValue ? customClassValue : ''
      } text-center text-white-full opacity-50`}>
      {text}
    </p>
  );
};

export default FooterText;
