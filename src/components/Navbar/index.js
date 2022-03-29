import React from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import AccountContext from "../../context/Account/AccountContext";

const Navbar = () => {
  const { isLogged } = useContext(AccountContext);

  return (
    <div>
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
    </div>
  );
};

export default Navbar;
