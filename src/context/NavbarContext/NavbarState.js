import React from "react";
import NavbarContext from "./NavbarContext";

const NavbarState = ({ children }) => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  const handleMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  return (
    <NavbarContext.Provider
      value={{
        menuIsOpened,
        handleMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
