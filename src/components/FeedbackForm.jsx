import React from "react";
import Card from "./shared/Card";
import { useState,useContext ,useEffect} from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);




  const {addFeedback,feedbackEdit} = useContext(FeedbackContext);



// UseEffect functions runs when the component is changed by  [if no component is added in the array ] default it will runs 1 time 
// ex : useEffect(()=>{},[feedbackEdit])


useEffect(()=>{
  if(feedbackEdit.edit === true){
    setBtnDisable(false);
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating);
  }
})



  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisable(true);
    } else {
      setMessage(null);
      setBtnDisable(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // again checking for the text length because some one can use inspect and change the button behaviour
    // text : text,
    // rating: rating
    if (text && text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText(""); // make the text state empty
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            placeholder="Write a review"
            type="text"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
