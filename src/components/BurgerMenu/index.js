import React from "react";
// Styles
import { Wrapper } from "./BurgerMenu.css";
// Assets
import BurgerMenuIcon from "../../assets/icons/burger-menu.svg";
const BurgerMenu = () => {
  return (
    <Wrapper>
      <img src={BurgerMenuIcon} alt="" />
    </Wrapper>
  );
};

export default BurgerMenu;
