import React from 'react';
import { Card } from '.';

interface CardPhilosophy extends Card {
  title?: string;
  description?: string;
}

const CardPhilosophy: React.FC<CardPhilosophy> = ({
  Icon,
  title,
  description,
  ...otherProps
}) => {
  return (
    <div className="card-philosophy" {...otherProps}>
      <Icon className="card-philosophy__icon" />
      <div className="gap" />
      <h3 className="heading-tertiary">{title}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default CardPhilosophy;
