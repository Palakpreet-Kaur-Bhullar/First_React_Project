import React, {useState} from "react";


export default function Textform(props) {
  const [state, setState] = useState("Enter text");
  const onChangeHandler = (event)=>{
    console.log("Changed");
    setState(event.target.value);
  }
  const onClickHandler = ()=>{
    setState(state.toUpperCase())
  }
  
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
        <button className="btn btn-info" onClick={onClickHandler}>Convert to Uppercase</button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>{state.length} characters and {(state.split(" ").length)} words</p>
      </div>
    </>
  );
} 
