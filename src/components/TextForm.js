import React from 'react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(' ');
  const handleLowClicked = () => {
    console.log('LowerCase Was clicked');
    let newTextTwo = text.toLowerCase();
    setText(newTextTwo);
  };
  const handleUpClicked = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText('you have clicked handle up clicked');
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            rows="10"
            onChange={handleOnChange}
            placeholder="Please Enter Text Here"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClicked}>
            Convert to UpperCase
          </button>
          <button className="btn btn-info my-3 mx-3" onClick={handleLowClicked}>
            Convert to LowerCase
          </button>
          <button className="btn btn-secondary my-3 mx-3" onClick={speak}>
            Text To Speech
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Your Text Summry</h2>
        <p>
          {text.split(' ').length} Words and {text.length}Characters
        </p>
        <p> {0.008 * text.split(' ').length} Minutes Reading Time</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
