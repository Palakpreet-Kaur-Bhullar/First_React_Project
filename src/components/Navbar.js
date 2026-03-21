// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let textColor = {
    color: props.mode === "light" ? "black" : "white",
  };
  let bgColor = {
    backgroundColor: props.mode === "dark" ? "black" : "#d3d8dd",
  };
  return (
    <nav className="navbar navbar-expand-lg" style={bgColor}>
      <div className="container-fluid" style={bgColor}>
        <Link className="navbar-brand" to="/Home" style={textColor}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Home"
                style={textColor}
              >
                {props.anchor1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={textColor}>
                {props.anchor2}
              </Link>
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switchCheckDefault"
              onClick={props.toggleMode}
              
            />
            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
              style={textColor}
            >
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Disable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     anchor1: PropTypes.string.isRequired,
//     anchor2: PropTypes.string.isRequired,
// }
// Navbar.defaultProps = {
//     title:
//     anchor1:
//     anchor2:
// }
