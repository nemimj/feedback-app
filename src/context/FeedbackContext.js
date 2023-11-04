import { createContext,useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'this item is from context',
            rating:10
        }
    ])

    
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete this post !")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };


    // we can use only one feedback when we have 2 of same names but for the seeking part i used both 
    return <FeedbackContext.Provider value={
        {feedback:feedback,
        deleteFeedback}
        }>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext