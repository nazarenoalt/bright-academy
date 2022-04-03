import React from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";
const SignUp = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Registrarse");
  return <div>SignUp</div>;
};

export default SignUp;
