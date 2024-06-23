import { useState } from "react";
import "../App.css";
import { LOGO_URL } from "../utils/contants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
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
