import React from "react";
// Styles
import { Submit } from "./SubmitButton.css";

const Button = ({ children, size }) => {
  console.log(size);
  return (
    <Submit
      type="submit"
      className={size}
      value={children || "Enviar"}
    ></Submit>
  );
};

export default Button;
