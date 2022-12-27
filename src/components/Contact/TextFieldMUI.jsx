import React from 'react';

export const TextFieldMUI = () => {
  return (
    <div className="md-textfield">
      <input
        type="text"
        className="md-textfield-input"
        id="my-input"
        name="my-input"
        required
        autoComplete="off"
      />
      <label htmlFor="my-input">What's your name?</label>
      <div className="indicator"></div>
    </div>
  );
};
