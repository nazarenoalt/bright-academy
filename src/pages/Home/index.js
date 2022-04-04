import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
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
      </div>
    </Wrapper>
  );
};

export default Home;
