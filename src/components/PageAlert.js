import React from "react";

export default function Alert() {
  return (
    <div className="alert alert-danger alert-dismissible fade show" type="primary" role="alert">
      React project made by - <strong>Manas & Palak!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}