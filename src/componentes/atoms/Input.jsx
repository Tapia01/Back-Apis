import React from 'react';

const Input = ({ id, value, onChange, placeholder, className }) => (
  <input
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;
