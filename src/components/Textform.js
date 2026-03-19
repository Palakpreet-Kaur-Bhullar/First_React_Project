import React, {useState} from "react";


export default function Textform(props) {
  const [state, setState] = useState("Enter text");

  const onChangeHandler = (event)=>{
    // console.log("Changed");
    setState(event.target.value);
  }

  const onClickHandler = ()=>{
    setState(state.toUpperCase())
  }

  const onLowerCaseHandler = ()=>{
    setState(state.toLowerCase())
  }

  const onCapitalizeHandler = ()=>{
    let newText = state
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setState(newText);
  }

  const onTrimHandler = ()=>{
    setState(state.trim())
  }

  const onReverseHandler = ()=>{
    let newText = state.split("").reverse().join("");
    setState(newText);
  }

  const onClearHandler = ()=>{
    setState("")
  }
  //Word counter logic 
  let arr=state.split(" ")
  let count = arr.filter(x => x === "").length
  console.log(arr);

  
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={state}
          onChange={onChangeHandler}
        ></textarea>

        <button className="btn btn-info m-1" onClick={onClickHandler}>Convert to Uppercase</button>
        <button className="btn btn-primary m-1" onClick={onLowerCaseHandler}>Convert to Lowercase</button>
        <button className="btn btn-success m-1" onClick={onCapitalizeHandler}>Capitalize Words</button>
        <button className="btn btn-warning m-1" onClick={onTrimHandler}>Trim Text</button>
        <button className="btn btn-dark m-1" onClick={onReverseHandler}>Reverse Text</button>
        <button className="btn btn-danger m-1" onClick={onClearHandler}>Clear Text</button>

      </div>
      
      <div className="container">
        <h1>Your text summary</h1>
        <p>{state.length} characters and {arr.length - count} words</p>
      </div>
      <div className="container">
        <h1>Your preview</h1>
        <p>{state}</p>
      </div>
    </>
  );
}
