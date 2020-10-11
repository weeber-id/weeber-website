import React from 'react';
import { ImgFallbackThankyou } from '../../assets';
import { Button, Footer, Header, ImageWrapper } from '../../components';

const FallbackPage = () => {
  return (
    <>
      <Header />
      <main className="fallback">
        <div className="max-width-1200 fallback__container">
          <div className="fallback__message">
            <h1 className="fallback__heading mb-2">Thank you</h1>
            <p className="paragraph mb-5">
              Your form has been sent to our database. Thanks for your interest
              to use our services. We will look at your brief first and reply to
              your message in less than <span>24-48 hours</span>.
            </p>
            <Button url="/" variant="outlined">
              Back to Home
            </Button>
          </div>
          <div className="fallback__img-container">
            <ImageWrapper src={ImgFallbackThankyou} alt="Thank you" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FallbackPage;
