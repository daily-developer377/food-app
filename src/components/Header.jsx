import { useState, useEffect } from "react";
import "../App.css";
import { LOGO_URL } from "../utils/contants";

const HeaderComponent = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  useEffect(() => {
    console.log("useEffect called headerComponent");
  }, []);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <a href="/">
          <li>Home</li>
          </a>
          <a href="about">
            <li>About</li>
          </a>
          <a href="contact">
            <li>Contact</li>
          </a>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="login-btn"
        onClick={() => {
          btnNameReact === "login"
            ? setBtnNameReact("logout")
            : setBtnNameReact("login");
        }}
      >
        {btnNameReact}
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="" />
    </a>
  );
};

export default HeaderComponent;
