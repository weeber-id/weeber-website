import React from 'react';
import { ImgNotFound } from '../../assets';
import { Button, Header } from '../../components';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="not-found">
        <div className="max-width-1200 not-found__container">
          <div className="not-found__message">
            <h1 className="not-found__heading">404</h1>
            <h2 className="heading-secondary mb-3">
              The Page You’re Looking For Was Not Found.
            </h2>
            <Button url="/" variant="outlined">
              Back to Home
            </Button>
          </div>
          <div className="not-found__img-container">
            <img src={ImgNotFound} alt="404 Not Found Page" />
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
