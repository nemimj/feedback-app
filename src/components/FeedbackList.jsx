import {motion,AnimatePresence} from 'framer-motion'
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackList() {
  // we can use only the value which we are passed in the feedbackcontext.provider
  const {feedback} = useContext(FeedbackContext)

  // feedback = feedback.filter((item)=>item.id !== state)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <FeedbackItem
          key={item.id}
          item={item}
        ></FeedbackItem>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
