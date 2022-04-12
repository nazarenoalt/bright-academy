import React from "react";
// Components
import CourseCard from "molecules/CourseCard";
// Assets
import { Wrapper } from "./CoursesGrid.css";

const CoursesGrid = ({ level }) => {
  const courses = [
    {
      title: "Texto random para ver como queda",

      level: "junior-1",
      category: "junior 1",
      emojiId: "191-happy",
      date: "02/10/2022",
    },
    {
      title: "Ejemplo de titulo uno",

      level: "junior-2",
      category: "junior 1",
      emojiId: "005-explosion",
      date: "02/10/2022",
    },
  ];

  return (
    <Wrapper>
      <h2 className="section-title">Cursos para {level}</h2>
      {courses.map(
        ({ title, description, category, emojiId, date, author }) => (
          <CourseCard
            key={title}
            title={title}
            category={category}
            emojiId={emojiId}
            date={date}
          />
        )
      )}
    </Wrapper>
  );
};

export default CoursesGrid;
