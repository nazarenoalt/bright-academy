import React from "react";
import NavbarContext from "./NavbarContext";

const NavbarState = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    console.log(menuIsOpen);
  };

  return (
    <NavbarContext.Provider
      value={{
        menuIsOpen,
        handleMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
