import React from "react";
// Styles
import { Wrapper } from "./CourseCard.css";
import libraryPhoto from "assets/images/libraryPhoto";

const CourseCard = ({ image, title, description }) => {
  return <Wrapper image={image}></Wrapper>;
};

export default CourseCard;
