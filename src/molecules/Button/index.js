import React from "react";
// Styles
import { ButtonContainer } from "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <ButtonContainer onClick={(e) => onClick(e)}>{children}</ButtonContainer>
  );
};

export default Button;
