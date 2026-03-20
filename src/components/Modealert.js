import React from "react";

export default function Modealert(props) {
  return (
    props.modeAlert && <div className="alert alert-success alert-dismissible fade show" role="alert">
      {props.modeAlert.type}: {props.modeAlert.msg}
    </div>
  );
}
