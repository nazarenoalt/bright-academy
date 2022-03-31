import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
// Context
import AccountContext from "../../context/Account/AccountContext";
// Styles
import { Wrapper } from "./Navlist.css";

const Navlist = ({ width }) => {
  const { isLogged } = useContext(AccountContext);
  return (
    <Wrapper>
      {isLogged ? (
        <ul>
          <li>
            <NavLink to="/account">Mi cuenta</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Cursos</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Cerrar Sesion</NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <NavLink to="/login">Registrarse / Iniciar Sesion</NavLink>
        </ul>
      )}
    </Wrapper>
  );
};

export default Navlist;
