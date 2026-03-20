// This is for

// import gunsham from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import PageAlert from "./components/PageAlert.js";
import React, {useState } from "react";
import Modealert from "./components/Modealert.js";

// let name = "Manas";
// let age = 18;

function App() {
  const [mode, setMode] = useState("light");
  const [modeAlert, setModeAlert] = useState(null)

  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041a32";
      alertModeHandler("success", "Dark mode has been enabled")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertModeHandler("success", "Dark mode has been disabled")
    }
  };
  const alertModeHandler = (type,message)=>{
      setModeAlert({
        type:type,
        msg:message
      })
      setTimeout(()=>{
        setModeAlert(null)
      },1000)
  }
  return (
    <>
      <PageAlert></PageAlert>
      <Navbar
        title="Textutils"
        anchor1="Home"
        anchor2="About Us "
        mode={mode}
        toggleMode={modeHandler}
        alert = {alertModeHandler}
        />
        <Modealert modeAlert={modeAlert} ></Modealert>
        
      <div className="container">
        <Textform
          heading="Text To Analyze"
          mode={mode}
        ></Textform>
      </div>
      <div className="container"></div>
    </>
  );
  {
    /* if (age >= 18) {
    return (
    <>
    <h1>Your name is {name}</h1>
    <p>Your age is {age} and you are eligible to use react.</p>
    <img src={gunsham} alt="gannu" height="80px" width="80px" classNameName='gunsham'/>
    </>);
  } else {
    return (<>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore et error. Eum, adipisci voluptas corporis, iste mollitia animi velit ea aperiam deleniti, architecto ab perferendis quos odit? Architecto, eveniet!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore et error. Eum, adipisci voluptas corporis, iste mollitia animi velit ea aperiam deleniti, architecto ab perferendis quos odit? Architecto, eveniet!</p>
    </>);
  } */
  }
}

export default App;
