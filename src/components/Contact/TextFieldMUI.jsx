import React from 'react';

export const TextFieldMUI = ({
  id,
  name,
  type = 'text',
  label = '',
  value,
  rows = 1,
  required,
  onChange,
  onBlur,
  error,
  helperText = '',
  placeholder = '',
  className,
}) => {
  return (
    <div className={`md-textfield ${className}`}>
      {rows < 2 ? (
        <input
          type={type}
          className="md-textfield-input"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          autoComplete="off"
          onChange={onChange}
          onBlur={onBlur}
          data-error={error}
        />
      ) : (
        <textarea
          type={type}
          className="md-textfield-input"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          rows={rows}
          required
          autoComplete="off"
          onChange={onChange}
          onBlur={onBlur}
          data-error={error}
        ></textarea>
      )}
      <label htmlFor="my-input" data-error={error}>
        {required ? label + ' *' : label}
      </label>
      {helperText !== '' && <p className="helperText">{helperText}</p>}
    </div>
  );
};
