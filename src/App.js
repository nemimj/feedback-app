import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/feedbackData.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete this post !")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1>My App</h1>
        <FeedbackForm></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
