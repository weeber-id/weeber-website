import React from 'react';
import Button from '../button';
import CardPhilosophy from './card-philosophy';
import CardWork from './card-work';

export interface Card extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'philosophy' | 'service' | 'work';
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
  platform?: string;
  url?: string;
  isComingSoon?: boolean;
  onButtonClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const Card: React.FC<Card> = ({
  type,
  Icon,
  description,
  title,
  img,
  alt,
  url,
  isComingSoon,
  onButtonClick,
  platform
}) => {
  if (type === 'philosophy') {
    return (
      <CardPhilosophy Icon={Icon} title={title} description={description} />
    );
  }

  if (type === 'work') {
    return (
      <CardWork
        url={url}
        title={title}
        description={description}
        img={img}
        platform={platform}
        isComingSoon={isComingSoon}
      />
    );
  }

  return (
    <div className="card">
      <div className="card__img-container">
        <img src={img} alt={alt} className="card__img" />
      </div>
      <div className="card__details">
        <h3 className="heading-tertiary">{title}</h3>
        <p className="paragraph">{description}</p>
        <Button
          onClick={onButtonClick}
          url={url}
          color="green"
          variant="outlined"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Card;
