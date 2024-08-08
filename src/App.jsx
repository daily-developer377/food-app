import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
