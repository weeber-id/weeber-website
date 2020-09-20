import React from 'react';

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<Button> = ({
  children,
  variant,
  className,
  ...otherProps
}) => {
  const btnClassName = ['btn'];
  if (variant === 'outlined') btnClassName.push('btn--outlined');
  if (className) btnClassName.push(className);

  return (
    <button {...otherProps} className={btnClassName.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
