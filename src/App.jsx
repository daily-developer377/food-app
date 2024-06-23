import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <Home />
      <Footer />
    </>
  );
}

export default App;
