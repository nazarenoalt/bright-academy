import React, { useContext } from "react";
// Context
import NavbarContext from "context/NavbarContext/NavbarContext";
// Styles
import { Wrapper } from "./BurgerMenu.css";
// Assets
import BurgerMenuIcon from "assets/icons/burger-menu.svg";
const BurgerMenu = () => {
  const { handleMenu, menuIsOpen } = useContext(NavbarContext);

  return (
    <Wrapper>
      <img
        src={BurgerMenuIcon}
        alt="Menu"
        onClick={handleMenu}
        className={menuIsOpen ? "open" : "close"}
      />
    </Wrapper>
  );
};

export default BurgerMenu;
