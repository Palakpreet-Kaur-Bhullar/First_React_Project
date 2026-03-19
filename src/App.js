// import gunsham from './logo.svg';
import "./App.css";
import Navbar from './components/Navbar.js'
import Textform from "./components/Textform.js";
// let name = "Manas";
// let age = 18;

function App() {
  return (
    <>
    <Navbar title="Textutils" anchor1="Home" anchor2="About Us "/>
    <div className="container">
    <Textform heading="Text To Analyze"></Textform>
    </div>
    </>
  );
    {/* if (age >= 18) {
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
  } */}
}

export default App;
