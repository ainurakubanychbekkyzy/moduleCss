import React from "react";
import './CommentDate.css'

const CommentDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="commentDate">
      <span>{day}.</span>
      <span>{month}.</span>
      <span>{year}</span>
    </div>
  );
};

export default CommentDate;
