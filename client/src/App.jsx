import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import AddCourse from './Components/AddCourse/AddCourse';

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
