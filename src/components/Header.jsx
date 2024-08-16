import { useState, useEffect } from "react";
import "../App.css";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
