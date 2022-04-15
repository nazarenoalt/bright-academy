import React from "react";
// Components
import ProfileCard from "components/ProfileCard";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./Profile.css";

const Profile = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Perfil");
  return (
    <Wrapper>
      <ProfileCard />
    </Wrapper>
  );
};

export default Profile;
