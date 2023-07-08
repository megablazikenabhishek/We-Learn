import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
// import NavBar from "./components/Navbar";
// import Profile from "./components/Profile";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import AddCourse from "./components/AddCourse/AddCourse";
// import { Link } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CourseView from "./components/CourseView/CourseView";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/add_course" element={<AddCourse />} />
          <Route path="/view_course/:id" element={<CourseView/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
