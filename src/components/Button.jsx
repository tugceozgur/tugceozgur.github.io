import React from 'react';

function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
      <span className="button-text">Email</span>
      <img
          className="button-icon"
          src="../assets/Icon.png"
          alt="Button Icon"
        />
      {props.label}
    </button>
  );
}

export default Button;