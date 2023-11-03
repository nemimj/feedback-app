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



    // we can use only one feedback when we have 2 of same names but for the seeking part i used both 
    return <FeedbackContext.Provider value={
        {feedback:feedback}
        }>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext