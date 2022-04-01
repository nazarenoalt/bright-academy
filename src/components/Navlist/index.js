import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// Context
import AccountContext from "../../context/Account/AccountContext";
// Styles
import { Wrapper, Background } from "./Navlist.css";

const Navlist = ({ device }) => {
  const { isLogged } = useContext(AccountContext);

  const linksObjects = [
    { addressName: "Home", direction: "/" },
    { addressName: "Mi cuenta", direction: "/acount" },
    { addressName: "Cursos", direction: "/courses" },
    { addressName: "Cerrar Sesion", direction: "/logout" },
  ];
  return (
    <Wrapper>
      <Background />
      {isLogged ? (
        <ul className={device}>
          {linksObjects.map((link) => {
            return (
              <li>
                <NavLink to={link.direction}>{link.addressName}</NavLink>
              </li>
            );
          })}
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
