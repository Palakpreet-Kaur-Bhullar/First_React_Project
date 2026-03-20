import React, { useState } from "react";

export default function Textform(props) {
  let textColor = {
    color: props.mode === "light" ? "black" : "white",
  };
  let bgColor = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };
  const [state, setState] = useState("Enter text");

  const onChangeHandler = (event) => {
    setState(event.target.value);
  };

  const onClickHandler = () => {
    setState(state.toUpperCase());
  };

  const onLowerCaseHandler = () => {
    setState(state.toLowerCase());
  };

  const onCapitalizeHandler = () => {
    let newText = state
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setState(newText);
  };

  const onTrimHandler = () => {
    setState(state.trim());
  };

  const onReverseHandler = () => {
    let newText = state.split("").reverse().join("");
    setState(newText);
  };

  const onClearHandler = () => {
    setState("");
  };

  const onCopyHandler = () => {
    navigator.clipboard.writeText(state);
  };

  //Word counter logic
  let arr = state.split(" ");
  let count = arr.filter((x) => x === "").length;
  console.log(arr);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label " style={textColor}>
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={state}
          onChange={onChangeHandler}
        ></textarea>

        <button className="btn btn-info m-1" onClick={onClickHandler}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={onLowerCaseHandler}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success m-1" onClick={onCapitalizeHandler}>
          Capitalize Words
        </button>
        <button className="btn btn-warning m-1" onClick={onTrimHandler}>
          Trim Text
        </button>
        <button className="btn btn-dark m-1" onClick={onReverseHandler}>
          Reverse Text
        </button>
        <button className="btn btn-danger m-1" onClick={onClearHandler}>
          Clear Text
        </button>
        <button className="btn btn-secondary m-1" onClick={onCopyHandler}>
          Copy Text
        </button>
      </div>

      <div className="container" style={textColor}>
        <h2>Your text summary</h2>
        <p>
          {state.length} characters and {arr.length - count} words
        </p>
      </div>
      <div className="container" style={textColor}>
        <h2>Your preview</h2>
        <p>{state===""?"Enter Text To Preview":state}</p>
      </div>
    </>
  );
}
