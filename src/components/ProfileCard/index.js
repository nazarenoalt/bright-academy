import React from "react";
import { Link } from "react-router-dom";
// Components
import Button from "molecules/Button";
// Styles
import { Wrapper } from "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <Wrapper>
      <h2 className="name">Firulito Asparente</h2>
      <ul>
        <li className="list-line email">
          <span className="list-key">Email:</span> firulito@asparente.com
        </li>
        <li className="list-line level">
          <span className="list-key">Nivel:</span> Junior 2
        </li>
      </ul>
      <div className="button-container">
        <Button size="large">Editar Perfil</Button>
      </div>
    </Wrapper>
  );
};

export default ProfileCard;
