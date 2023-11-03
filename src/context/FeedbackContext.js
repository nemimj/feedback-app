import { createContext,useState } from "react";

const FeedbackContent = createContext();

export const FeedbackProvider = ({children})=>{
    return <FeedbackContent.Provider>
        {children}
    </FeedbackContent.Provider>
}