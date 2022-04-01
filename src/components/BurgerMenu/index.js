import React, { useState, useContext } from "react";
// Components
import Navlist from "../Navlist";
// Context
import NavbarContext from "../../context/NavbarContext/NavbarContext";
// Styles
import { Wrapper } from "./BurgerMenu.css";
// Assets
import BurgerMenuIcon from "../../assets/icons/burger-menu.svg";
const BurgerMenu = () => {
  const { handleMenu } = useContext(NavbarContext);
  return (
    <Wrapper>
      <img src={BurgerMenuIcon} alt="Menu" onClick={handleMenu} />
    </Wrapper>
  );
};

export default BurgerMenu;
