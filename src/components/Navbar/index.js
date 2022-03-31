import React from "react";

// Styles
import { Wrapper } from "./Navbar.css";
// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";
// Assets
import LogoImage from "../../assets/images/logo.jpg";
import BurgerMenu from "../BurgerMenu";
import Navlist from "../Navlist";

const Navbar = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      <div className="logo">
        <img src={LogoImage} alt="Bright Academy" />
      </div>
      {width < 768 ? <BurgerMenu /> : <Navlist />}
    </Wrapper>
  );
};

export default Navbar;
