import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
// import NavBar from "./components/Navbar";
// import Profile from "./components/Profile";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
// import { Link } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CourseView from "./components/CourseView/CourseView";
import Questions from "./Components/Questions/Questions";
import AddCourse from "./Components/AddCourse/AddCourse";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import TeacherHomePage from "./pages/TeacherHomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/teacher_home" element={<TeacherHomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/verify/:id" element={<EmailVerify />} />
          <Route path="/add_course" element={<AddCourse />} />
          <Route path="/view_course/:id" element={<CourseView />} />
          <Route path="/add_question/:id" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
