import React from "react";
import "./Join.css";
import logo from "../../images/logo.png";
const join = () => {
  return (
    <div className="joinPage">
      <div className="joinContainer">
        <img src={logo} alt="logo" />
        <h1>CCHAT</h1>
        <input type="text" id="joinInput" />
        <button className="joinBtn">Login</button>
      </div>
      join
    </div>
  );
};

export default join;
