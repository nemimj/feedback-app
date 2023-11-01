import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

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

  return (
    <Card>
      <form>
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
