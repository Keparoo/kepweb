import React from 'react';

export const TextFieldMUI = () => {
  return (
    <div class="md-textfield">
      <input
        type="text"
        class="md-textfield-input"
        id="my-input"
        name="my-input"
        required
        autocomplete="off"
      />
      <label for="my-input">What's your name?</label>
      <div class="indicator"></div>
    </div>
  );
};
