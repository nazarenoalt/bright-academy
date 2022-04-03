import React from "react";
import { Wrapper } from "./Footer.css";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <ul className="list list1">
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Preguntas Frecuentes</a>
          </li>
        </ul>
        <ul className="list list2">
          <li>Prof. Camelia Samantha Brignole</li>
          <li>Av. siempre viva 742</li>
          <li>
            Desarrollado por{" "}
            <a href="https://www.linkedin.com/in/nazarenoalt/">@nazarenoalt</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;
