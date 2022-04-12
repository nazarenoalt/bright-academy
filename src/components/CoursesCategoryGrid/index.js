import React from "react";
import { Wrapper } from "./CoursesCategoryGrid.css";
import CoursesCategoryCard from "molecules/CoursesCategoryCard";
// Assets
import libraryPhoto from "assets/images/libraryPhoto.jpg";

const CoursesCategoryGrid = () => {
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
              <CoursesCategoryCard
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

export default CoursesCategoryGrid;
