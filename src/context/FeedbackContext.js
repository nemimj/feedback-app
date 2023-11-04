import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'this item is from context',
            rating:10
        }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
      item:{},
      edit:false
    })
    
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete this post !")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

    // we can use only one feedback when we have 2 of same names but for the seeking part i used both 
    return <FeedbackContext.Provider value={
        {feedback:feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, // this is function
        feedbackEdit // this is params
        }
        }>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext