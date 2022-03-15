import React from "react";

import './Input.css'

const Input = (props) => {
  const { size = "small", children, ...rest } = props;

  return <input className={`Input ${size}`} {...rest} type="text" />;
};

export default Input;
