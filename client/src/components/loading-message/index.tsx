import React from 'react';
import LoadingAnimation from '../loading-animation';
import './_loading-message.scss';

interface LoadingMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

const LoadingMessage: React.FC<LoadingMessageProps> = ({
  message = 'Processing your request, Please wait for a moment.'
}) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="loading-message">
        <LoadingAnimation />
        <span>{message}</span>
      </div>
    </>
  );
};

export default LoadingMessage;
