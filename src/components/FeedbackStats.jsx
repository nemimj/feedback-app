import React from "react";

function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((sum, current) => {
      return sum + current.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>Reviews : {feedback.length}</h4>
      <h4>Average : {average}</h4>
    </div>
  );
}

export default FeedbackStats;
