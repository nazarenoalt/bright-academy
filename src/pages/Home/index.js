import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import CourseCard from "molecules/CourseCard";
import Button from "molecules/Button";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
import { Wrapper } from "./Home.css";
// Context
import AccountContext from "context/Account/AccountContext";
import CoursesGrid from "../../components/CoursesGrid";

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

      <CoursesGrid />
    </Wrapper>
  );
};

export default Home;
