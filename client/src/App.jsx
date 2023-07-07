import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";
import HomePage from './pages/HomePage';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
