import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <div className="logo">
          <img src={LogoImage} alt="Bright Academy" />
        </div>
      </Link>
      {width < 768 ? <BurgerMenu /> : <Navlist width={width} />}
    </Wrapper>
  );
};

export default Navbar;
