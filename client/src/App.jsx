import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Register from "./components/Register";
// import { Link } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Link to="/"></Link>
        <Link to="/login"></Link>
        <Link to="/register"></Link>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
