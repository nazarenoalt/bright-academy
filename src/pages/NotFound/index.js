import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const NotFound = () => {
  const [documentTitle, setDocumentTitle] =
    useDocumentTitle("Ruta no encontrada");
  return <div>NotFound</div>;
};

export default NotFound;
