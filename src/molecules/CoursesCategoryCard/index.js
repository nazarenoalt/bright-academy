import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./CoursesCategoryCard.css";

const CoursesCategoryCard = ({ image, title, link }) => {
  return (
    <Link to={link || "/"}>
      <Wrapper image={image}>
        <h3>{title}</h3>
      </Wrapper>
    </Link>
  );
};

export default CoursesCategoryCard;
