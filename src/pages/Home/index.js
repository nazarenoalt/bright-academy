import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import CoursesCategoryGrid from "../../components/CoursesCategoryGrid";
import Button from "molecules/Button";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./Home.css";
// Context
import AccountContext from "context/AccountContext/AccountContext";

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

      <CoursesCategoryGrid />
    </Wrapper>
  );
};

export default Home;
