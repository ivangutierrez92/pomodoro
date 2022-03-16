import React from 'react';

const Control = ({ label, controlNumber, disabled, onClickMinus, onClickPlus }) => {
    return (
    <div>
      <h2>{label}</h2>
      <button onClick={onClickMinus} disabled={disabled}>
        -
      </button>
      <p>{controlNumber}</p>
      <button onClick={onClickPlus} disabled={disabled}>
        +
      </button>
    </div>
  );
};

export default Control;
