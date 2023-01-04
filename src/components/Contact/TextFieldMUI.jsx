import React from 'react';

import styles from './TextField.module.css';

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
  const mdTextArea = rows > 1 ? styles.mdTextArea : '';

  return (
    <div className={`${styles.mdTextfield} ${className} ${mdTextArea}`}>
      {rows < 2 ? (
        <>
          <input
            type={type}
            className={styles.mdTextfieldInput}
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
          <label htmlFor={id} data-error={error}>
            {required ? label + ' *' : label}
          </label>
          {helperText !== '' && (
            <p className={styles.helperText}>{helperText}</p>
          )}
        </>
      ) : (
        <>
          <textarea
            type={type}
            className={styles.mdTextfieldInput}
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
          <label htmlFor={id} data-error={error}>
            {required ? label + ' *' : label}
          </label>
          {helperText !== '' && (
            <p className={styles.helperTextArea}>{helperText}</p>
          )}
        </>
      )}
    </div>
  );
};
