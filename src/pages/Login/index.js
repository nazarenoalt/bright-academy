import React from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";
const Login = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Ingresar");
  return <div>Login</div>;
};

export default Login;
