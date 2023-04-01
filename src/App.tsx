import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar title="rabbitdev" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
