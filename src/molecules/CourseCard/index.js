import React from "react";
// Styles
import { Wrapper } from "./CourseCard.css";

const CourseCard = ({
  emojiId,
  title,
  description,
  date,
  author,
  category,
}) => {
  return (
    <Wrapper>
      <img
        className="header-image"
        src={`/assets/emojis/${emojiId}.svg`}
        alt=""
      />

      <div className="data-container">
        <h2 className="post-title">{title}</h2>
        <div className="post-data">
          <span className="date">{date}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default CourseCard;
