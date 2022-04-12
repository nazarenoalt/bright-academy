import React from "react";
// Components
import SubmitButton from "molecules/SubmitButton";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./SignUp.css";
const SignUp = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Registrarse");
  return (
    <Wrapper>
      <h2 className="subtitle">
        Rellena el siguiente formulario para registrarte:
      </h2>
      <form className="Formulary">
        <input
          type="text"
          className="signup-input"
          placeholder="Nombre"
          name="FirstName"
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Apellido"
          name="LastName"
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Correo electrónico (email)"
          name="LastName"
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Contraseña"
          name="LastName"
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Repita la contraseña"
          name="LastName"
        />

        <SubmitButton size="large"></SubmitButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;
