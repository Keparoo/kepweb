import React from 'react';

export const TextFieldMUI = ({
  id,
  name,
  label = '',
  value,
  required,
  onChange,
  onBlur,
  error,
  helperText,
}) => {
  return (
    <div className="md-textfield">
      <input
        type="text"
        className="md-textfield-input"
        id={id}
        name={name}
        value={value}
        placeholder={helperText}
        required
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        data-error={error}
      />
      <label htmlFor="my-input" data-error={error}>
        {required ? label + ' *' : label}
      </label>
      <div className="indicator"></div>
    </div>
  );
};
