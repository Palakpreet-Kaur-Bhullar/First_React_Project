import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import PageAlert from "./components/PageAlert.js";
import { useState } from "react";
import Modealert from "./components/Modealert.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeAlert, setModeAlert] = useState(null);

  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041a32";
      document.title = "TextUtils - Dark Mode";
      alertModeHandler("success", "Dark mode has been enabled");
    } else {
      document.title = "TextUtils - Light Mode";
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertModeHandler("success", "Dark mode has been disabled");
    }
  };
  const alertModeHandler = (type, message) => {
    setModeAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setModeAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <PageAlert></PageAlert>
        <Navbar
          title="Textutils"
          anchor1="Home"
          anchor2="About Us "
          mode={mode}
          toggleMode={modeHandler}
          alert={alertModeHandler}
        />
        <Modealert modeAlert={modeAlert}></Modealert>
        <Routes>
          <Route
            path="/Home"
            element={
              <div className="container">
                <Textform heading="Text To Analyze" mode={mode}></Textform>
              </div>
            }
          />

          <Route
            path="/About"
            element={
              <div className="container">
                <About></About>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
