import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/feedbackData.jsx";
function App() {
  // empty tag is called fragment tag
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
