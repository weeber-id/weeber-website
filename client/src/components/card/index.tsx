import React from 'react';
import CardPhilosophy from './card-philosophy';

export interface Card extends React.BaseHTMLAttributes<HTMLDivElement> {
  type?: 'philosophy';
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title?: string;
  description?: string;
}

const Card: React.FC<Card> = ({ type, Icon, description, title }) => {
  if (type === 'philosophy') {
    return (
      <CardPhilosophy Icon={Icon} title={title} description={description} />
    );
  }

  return <div>Your Browser doesn't support this feature</div>;
};

export default Card;
