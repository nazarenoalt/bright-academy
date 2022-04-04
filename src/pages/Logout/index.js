import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const Logout = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Cerrar Sesión");
  return <div>Logout</div>;
};

export default Logout;
