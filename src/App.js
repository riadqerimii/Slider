import React from "react";
import { Route, Routes } from "react-router-dom";
import Mynavigation from "./components/Navbar";
import Home from "./components/Home"; // Import your Home component or adjust the import path
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Mynavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
