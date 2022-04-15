import React from "react";
// Styles
import { ButtonContainer } from "./Button.css";

const Button = ({ children, onClick, size }) => {
  return (
    <ButtonContainer className={size} onClick={(e) => onClick(e)}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
