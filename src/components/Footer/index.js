import React from "react";
import { Wrapper } from "./Footer.css";

const Footer = () => {
  return (
    <Wrapper>
      <div className="grid-container">
        <div className="list-container">
          <ul className="list list1">
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Preguntas Frecuentes</a>
            </li>
          </ul>
        </div>
        <div className="list-container">
          <ul className="list list2">
            <li>Prof. Camelia Samantha Brignole</li>
            <li>Av. siempre viva 742</li>
            <li>
              Desarrollado por{" "}
              <a href="https://www.linkedin.com/in/nazarenoalt/">
                @nazarenoalt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
