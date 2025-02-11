import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./pages/landing";
import Login from "./pages/Login";
import Landing from "./pages/landing";
import CitizenProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/profile" element={<CitizenProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
