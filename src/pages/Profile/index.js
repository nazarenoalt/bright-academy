import React from "react";
// Hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";
const Profile = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Perfil");
  return <div>Profile</div>;
};

export default Profile;
