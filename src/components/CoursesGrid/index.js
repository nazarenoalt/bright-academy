import React from "react";
import { Wrapper } from "./CoursesGrid.css";
import CourseCard from "molecules/CourseCard";
// Assets
import libraryPhoto from "assets/images/libraryPhoto.jpg";

const CoursesGrid = () => {
  const courses = [
    { title: "Junior 1", link: "/courses/junior1", image: libraryPhoto },
    { title: "Junior 2", link: "/courses/junior2", image: libraryPhoto },
  ];
  return (
    <Wrapper>
      <h3>Accede a los cursos</h3>
      <ul className="courses-list">
        {courses.map((course) => {
          return (
            <li key={course.title}>
              <CourseCard
                image={course.image}
                title={course.title}
                link={course.link}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default CoursesGrid;
