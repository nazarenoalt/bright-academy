import React from "react";
// Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
// Styles
import { Wrapper, Container } from "./AppTemplate.css";

const AppTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Container>{children /* routes */}</Container>
      <Footer />
    </Wrapper>
  );
};

export default AppTemplate;
