import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// Context
import AccountContext from "../../context/Account/AccountContext";
import NavbarContext from "../../context/NavbarContext/NavbarContext";
// Styles
import { Wrapper, Background } from "./Navlist.css";
// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";
// Constants
import { MOBILE_MAX_WIDTH } from "../../utils/constants";

const Navlist = ({ device }) => {
  const { isLogged } = useContext(AccountContext);
  const { menuIsOpen } = useContext(NavbarContext);
  const { width } = useWindowDimensions();
  const linksObjects = [
    { addressName: "Home", direction: "/" },
    { addressName: "Mi cuenta", direction: "/account/profile" },
    { addressName: "Cursos", direction: "/courses" },
    { addressName: "Cerrar Sesion", direction: "/account/logout" },
  ];

  return (
    <Wrapper>
      {width < MOBILE_MAX_WIDTH && (
        <Background display={menuIsOpen ? "block" : "none"} />
      )}
      {isLogged ? (
        <ul className={device + (menuIsOpen ? " menuIsOpen" : "")}>
          {linksObjects.map(({ addressName, direction }) => {
            return (
              <li key={addressName + direction}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={direction}
                >
                  {addressName}
                </NavLink>
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
