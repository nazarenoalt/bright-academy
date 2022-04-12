import React from "react";
// Styles
import { Wrapper, Submit } from "./SubmitButton.css";

const Button = ({ children, size }) => {
  console.log(size);
  return (
    <Wrapper>
      <Submit
        type="submit"
        className={size}
        value={children || "Enviar"}
      ></Submit>
    </Wrapper>
  );
};

export default Button;
