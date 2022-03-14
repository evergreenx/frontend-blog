import React from "react";

import './Input.css'

const Input = (props) => {
  const { variant = "small", children, ...rest } = props;

  return <input className={`Input Input-${variant}`} {...rest} type="text" />;
};

export default Input;
