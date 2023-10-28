import React from "react";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, handleDelete }) {
  // feedback = feedback.filter((item)=>item.id !== state)

  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        ></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
