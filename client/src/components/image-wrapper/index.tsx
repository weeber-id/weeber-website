import React from 'react';
import {
  LazyComponentProps,
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './image-wrapper.scss';

interface ImageWrapperProps extends LazyComponentProps {
  alt?: string;
  src?: string;
  className?: string;
  unsetWidth?: boolean;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  scrollPosition,
  alt,
  src,
  className,
  unsetWidth
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      scrollPosition={scrollPosition}
      src={src}
      wrapperClassName={className}
      className={`img-wrapper__img ${
        unsetWidth ? 'img-wrapper__img--unset' : ''
      }`}
    />
  );
};

export default trackWindowScroll(ImageWrapper);
