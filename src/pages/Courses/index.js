import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
// Styles
import { Wrapper } from "./Courses.css";
import CoursesGrid from "components/CoursesGrid";

const Courses = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Cursos");

  return (
    <Wrapper>
      <CoursesGrid />
    </Wrapper>
  );
};

export default Courses;
