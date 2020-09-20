import React from 'react';

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  color?: 'red' | 'white' | 'green';
}

const Button: React.FC<Button> = ({
  color,
  children,
  variant,
  className,
  ...otherProps
}) => {
  const btnClassName = ['btn'];
  if (variant === 'outlined') btnClassName.push('btn--outlined');
  if (className) btnClassName.push(className);
  if (color === 'white') btnClassName.push('btn--white');
  if (color === 'green') btnClassName.push('btn--green');

  return (
    <button {...otherProps} className={btnClassName.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
