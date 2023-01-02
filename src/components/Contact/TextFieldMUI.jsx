import React from 'react';

export const TextFieldMUI = ({
  id,
  name,
  type = 'text',
  label = '',
  value,
  required,
  onChange,
  onBlur,
  error,
  helperText = '',
  className,
}) => {
  return (
    <div className={`md-textfield ${className}`}>
      <input
        type={type}
        className="md-textfield-input"
        id={id}
        name={name}
        value={value}
        required
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        data-error={error}
      />
      <label htmlFor="my-input" data-error={error}>
        {required ? label + ' *' : label}
      </label>
      {helperText !== '' && <p className="helperText">{helperText}</p>}
      <div className="indicator"></div>
    </div>
  );
};
