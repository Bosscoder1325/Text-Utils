import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("Hello");

  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some characters to uppercase", "danger");
      return;
    }
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some characters to lowercase", "danger");
      return;
    }
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    if (text.length === 0) {
      props.showAlert("It's already cleared", "warning");
      return;
    }
    let newText = "";
    setText(newText);
    props.showAlert("Successfully cleared textarea", "success");
  };

  const copyToClipBoard = () => {
    if (text.length === 0) {
      props.showAlert("Can't copy empty text", "warning");
      return;
    }
    let newText = text;

    navigator.clipboard.writeText(newText);
    props.showAlert("Text copied!", "success");
  };

  const wordCounter = () => {
    if (text.length === 0) {
      return 0;
    }
    return text.split(" ").filter((element) => {return element.length !== 0}).length;
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.mode} m-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.mode} m-2`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${props.mode} m-2`}
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={copyToClipBoard}
        >
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {wordCounter()} words and {text.length} characters
        </p>
        <p>{wordCounter() * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview"}
        </p>
      </div>
    </>
  );
}
