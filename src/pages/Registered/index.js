import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const Registered = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Registrado!");
  return <div>Registered</div>;
};

export default Registered;
