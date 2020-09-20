import React from 'react';

interface Feature extends React.HTMLAttributes<HTMLDivElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title: string;
  description: string;
}

const Feature: React.FC<Feature> = ({
  title,
  Icon,
  description,
  className,
  ...otherProps
}) => {
  const featureClassName = ['feature'];
  if (className) featureClassName.push(className);

  return (
    <div {...otherProps} className={featureClassName.join(' ')}>
      <Icon />
      <div className="feature__details">
        <h3 className="heading-tertiary mb-1">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
