import React from 'react';
import ImageWrapper from '../image-wrapper';

interface Avatar extends React.Attributes {
  src: string;
  alt: string;
  name: string;
  role: string;
}

const Avatar: React.FC<Avatar> = ({ src, alt, name, role, key }) => {
  return (
    <div key={key} className="avatar">
      <ImageWrapper src={src} alt={alt} className="avatar__img" />
      <h4 className="avatar__name">{name}</h4>
      <h5 className="avatar__role">{role}</h5>
    </div>
  );
};

export default Avatar;
