import React from 'react';
import './loading-animation.scss';

const LoadingAnimation = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingAnimation;
