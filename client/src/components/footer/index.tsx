import React from 'react';
import { IconFacebook, IconInstagram, IconWhatsapp } from '../../assets';
import Button from '../button';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__icons">
          <div className="footer__icon">
            <IconInstagram />
          </div>
          <div className="footer__icon">
            <IconWhatsapp />
          </div>
          <div className="footer__icon">
            <IconFacebook />
          </div>
        </div>
        <h2 className="heading-secondary">Let's Talk?</h2>
        <Button variant="outlined">Make an enquiry</Button>
      </footer>
      <div className="copyright">
        {year} &copy; Weeber Indonesia. All right reserved.
      </div>
    </>
  );
};

export default Footer;
