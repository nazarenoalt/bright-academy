import React from "react";
// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// Styles
import { Wrapper } from "./AppTemplate.css";

const AppTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children /* routes */}
      <Footer />
    </Wrapper>
  );
};

export default AppTemplate;
