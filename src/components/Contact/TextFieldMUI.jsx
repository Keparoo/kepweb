import React from 'react';

import styles from './TextField.module.css';

/**
 * This is a Material UI style text field input.
 *
 * If a row prop is sent that is > 1 it will return a text area instead of an input
 * if the row prop is ommitted or explicitly set to 1,
 * the returned component is an input
 *
 * Props
 * id: required to connect the label to the input component
 * name: required for conrtolled input
 * type: optional: default is text input
 * label: Displayed in the input until focus and moves up to border on focus
 * value: the current string value of the input
 * rows: optional. Default is 1
 * required: optional: if true, displays an asterisk after the label
 * onChange and onBlur: functions
 * error: boolean, shows error state for component if true
 * helperText: optional, text shown under component (often for errors)
 * placeholder: optional, text will show on focus but disappear when typing starts
 * className: optional: will pass through a class name to the component
 *
 */

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
