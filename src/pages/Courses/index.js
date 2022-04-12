import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./Courses.css";
import CourseCard from "molecules/CourseCard";
const Courses = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Cursos");

  return (
    <Wrapper>
      <CourseCard />
    </Wrapper>
  );
};

export default Courses;
