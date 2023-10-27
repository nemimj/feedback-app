import React from "react";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback }) {
  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
