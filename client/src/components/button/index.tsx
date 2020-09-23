import React from 'react';
import { Link } from 'react-router-dom';

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  color?: 'red' | 'white' | 'green';
  isExternal?: boolean;
  url?: string;
}

const Button: React.FC<Button> = ({
  color,
  children,
  variant,
  className,
  url,
  isExternal,
  ...otherProps
}) => {
  const btnClassName = ['btn'];
  if (variant === 'outlined') btnClassName.push('btn--outlined');
  if (className) btnClassName.push(className);
  if (color === 'white') btnClassName.push('btn--white');
  if (color === 'green') btnClassName.push('btn--green');

  if (isExternal) {
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        className={btnClassName.join(' ')}
        href={url}
      >
        {children}
      </a>
    );
  }

  if (url) {
    return (
      <Link className={btnClassName.join(' ')} to={url}>
        {children}
      </Link>
    );
  }

  return (
    <button {...otherProps} className={btnClassName.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
