import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/feedbackData.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./components/pages/AboutPage.jsx"
import AboutIconLink from "./components/AboutIconLink.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.js";

// *Use <a> tags for external links


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
    <Router>
      <Header></Header>
      <div className="container">
      <Routes>
      <Route exact path="/" element={<>

        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
        ></FeedbackList>
        <AboutIconLink></AboutIconLink>

      </>}>
        </Route>
        <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
