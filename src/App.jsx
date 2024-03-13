import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Button from 'react-bootstrap/Button';

const App = () => {
  const [text, setText] = useState();
  const textFunc = (event) => {
    setText(event.target.value);
  };
  const buttonFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  return (
    <div className={`${styles.main}`}>
      <center>
        <h1>UPPERCASE TRANSFORMATION</h1>
        <div className="form-group">
          <label htmlFor="comment"></label>
          <textarea
            value={text}
            className="form-control"
            rows="5"
            id="comment"
            onChange={textFunc}
          >
            {text}
          </textarea>
          <Button onClick={buttonFunc} variant="primary" size="lg">
        Convert to UPPERCASE
      </Button>
        </div>
      </center>
    </div>
  );
};

export default App;
