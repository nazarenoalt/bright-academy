import React, { useEffect, useState, useContext } from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Wrapper } from "./Home.css";
// Context
import AccountContext from "../../context/Account/AccountContext";
import Button from "../../organisms/Button";

const Home = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Home");
  const { isLogged } = useContext(AccountContext);
  return (
    <Wrapper>
      <div className="Header">
        <h1>
          Bienvenido a <span className="page-name">Bright Academy!</span>
        </h1>
        {isLogged ? (
          <div></div>
        ) : (
          <div>
            <Button>Iniciar Sesion</Button> o <Button>Registrate</Button> <br />
            para seguir aprendiendo!
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
