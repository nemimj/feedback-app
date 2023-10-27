import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackItem from "./components/FeedbackItem.jsx";
import FeedbackData from "./data/feedbackData.jsx";
function App() {
  // empty tag is called fragment tag
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1>My App</h1>
        <FeedbackItem></FeedbackItem>
      </div>
    </>
  );
}

export default App;
