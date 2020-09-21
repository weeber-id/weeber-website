import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'radio' | 'file' | 'text' | 'password';
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  placeholder,
  required,
  name,
  ...otherProps
}) => {
  if (type === 'radio') {
    return (
      <label className="radio">
        <span className="radio__input">
          <input {...otherProps} value={value} type="radio" name={name} />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{label}</span>
      </label>
    );
  }

  return (
    <div className="input__container">
      {label && <label className="input__label">{label}</label>}
      <input
        {...otherProps}
        className="input__input"
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </div>
  );
};

export default Input;
