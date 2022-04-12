import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";

const Courses = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Cursos");

  return <div>Courses</div>;
};

export default Courses;
