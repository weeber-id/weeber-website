import React from 'react';
import { IconInstagram, IconLinkedIn, IconWhatsapp } from '../../assets';
import Button from '../button';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__icons">
          <a
            href="http://instagram.com/weeber_id"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <div className="footer__icon">
              <IconInstagram />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+6282120489633&text=Hi%2C+I+have+a+project+can+you+help+us%3F&source&data&app_absent&lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <div className="footer__icon">
              <IconWhatsapp />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/weeber-indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <div className="footer__icon">
              <IconLinkedIn />
            </div>
          </a>
        </div>
        <h2 className="heading-secondary">Let's Talk?</h2>
        <Button url="/hire-us" variant="outlined">
          Make an enquiry
        </Button>
      </footer>
      <div className="copyright">
        {year} &copy; Weeber Indonesia. All right reserved.
      </div>
    </>
  );
};

export default Footer;
