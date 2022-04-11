import React from "react";
// Components
import SubmitButton from "molecules/SubmitButton";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./Login.css";

const Login = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Ingresar");
  return (
    <Wrapper>
      <h1 className="title">Iniciar Sesion</h1>
      <form className="login-form">
        <input
          type="text"
          className="login-input"
          name="username"
          placeholder="nombre de usuario"
        />
        <input
          type="password"
          className="login-input"
          name="password"
          placeholder="contraseña"
        />
        <div className="remember-user__container">
          <input
            type="checkbox"
            className="remember-user__input"
            name="remember_user"
          />
          <label className="label" htmlFor="password">
            ¿Recordar usuario?
          </label>
        </div>
        <SubmitButton size="large">Ingresar</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default Login;
