import React from "react";
import { Link } from "react-router-dom";
// Context
import NavbarState from "context/NavbarContext/NavbarState";
// Styles
import { Wrapper } from "./Navbar.css";
// Hooks
import useWindowDimensions from "hooks/useWindowDimensions";
// Utils
import { MOBILE_MAX_WIDTH } from "utils/constants";
// Assets
import LogoImage from "assets/images/logo.jpg";
import BurgerMenu from "molecules/BurgerMenu";
import Navlist from "molecules/Navlist";

const Navbar = () => {
  const { width } = useWindowDimensions();

  return (
    <NavbarState>
      <Wrapper>
        <Link to="/">
          <div className="logo">
            <img src={LogoImage} alt="Bright Academy" />
          </div>
        </Link>
        {width < MOBILE_MAX_WIDTH && <BurgerMenu />}
        <Navlist device={width < MOBILE_MAX_WIDTH ? "mobile" : "desktop"} />
      </Wrapper>
    </NavbarState>
  );
};

export default Navbar;
