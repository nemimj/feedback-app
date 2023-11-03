import React from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext);

  let average =
    feedback.reduce((sum, current) => {
      return sum + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>Reviews : {feedback.length}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
