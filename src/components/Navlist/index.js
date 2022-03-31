import React from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
// Context
import AccountContext from "../../context/Account/AccountContext";
// Styles
import { Wrapper } from "./Navlist.css";

const Navlist = () => {
  const { isLogged } = useContext(AccountContext);
  return (
    <Wrapper>
      {isLogged ? (
        <ul>
          <li>
            <div>Mi cuenta</div>
          </li>
        </ul>
      ) : (
        <ul>
          <li>Registrarse</li>
        </ul>
      )}
    </Wrapper>
  );
};

export default Navlist;
