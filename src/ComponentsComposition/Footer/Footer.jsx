import React from 'react'
import FooterEnd from './FooterEnd';
import FooterTop from './FooterTop';
import FootMid from './FootMid';

const Footer = () => {
  return (
    <div id="footer" className="text-white bg-neutral-900 w-full h=[120vh] -mt-5 py-4 pr-7 pl-4">
      <FooterTop />
      <FootMid />
      <FooterEnd />
    </div>
  );
}

export default Footer;
