import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
}

export default App;
