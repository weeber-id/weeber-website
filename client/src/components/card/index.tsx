import React from 'react';
import Button from '../button';
import CardPhilosophy from './card-philosophy';

export interface Card extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'philosophy' | 'service';
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
}

const Card: React.FC<Card> = ({ type, Icon, description, title, img, alt }) => {
  if (type === 'philosophy') {
    return (
      <CardPhilosophy Icon={Icon} title={title} description={description} />
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
        <Button color="green" variant="outlined">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Card;
