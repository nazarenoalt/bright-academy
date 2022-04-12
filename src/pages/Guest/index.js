import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const Guest = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Invitado");
  return <div>Guest</div>;
};

export default Guest;
