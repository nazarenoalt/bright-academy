import React from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";

const EditProfile = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Editar Perfil");
  return <div>EditProfile</div>;
};

export default EditProfile;
