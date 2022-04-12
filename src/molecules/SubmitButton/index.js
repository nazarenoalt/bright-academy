import React from "react";
// Styles
<<<<<<< HEAD
import { Submit } from "./SubmitButton.css";
=======
import { Wrapper, Submit } from "./SubmitButton.css";
>>>>>>> SignUpPage

const Button = ({ children, size }) => {
  console.log(size);
  return (
<<<<<<< HEAD
    <Submit
      type="submit"
      className={size}
      value={children || "Enviar"}
    ></Submit>
=======
    <Wrapper>
      <Submit
        type="submit"
        className={size}
        value={children || "Enviar"}
      ></Submit>
    </Wrapper>
>>>>>>> SignUpPage
  );
};

export default Button;
