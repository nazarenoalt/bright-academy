import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
import { Wrapper } from "./Home.css";
// Context
import AccountContext from "context/Account/AccountContext";
import Button from "molecules/Button";

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

      <div className="courses-container">
        <h3>Accede a los cursos</h3>
        <ul className="courses-list">
          <li>
            <Link to="/courses/junior1"></Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Home;
