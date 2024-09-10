import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
