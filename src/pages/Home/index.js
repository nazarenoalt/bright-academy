import React, { useEffect } from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Home");
  return <div onClick={() => setDocumentTitle("hola")}>Home</div>;
};

export default Home;
