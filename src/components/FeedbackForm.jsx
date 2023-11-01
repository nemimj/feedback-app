import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    handleTextChange(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        <div className="input-group">
          <input
            placeholder="Write a review"
            type="text"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
