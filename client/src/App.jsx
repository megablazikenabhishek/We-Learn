import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes,Route} from "react-router-dom";
import AddCourse from './Components/AddCourse/AddCourse';
import Homepage from './pages/HomePage';
// import QuestionRough from './Components/Questions/QuestionRough';
import Questions from './Components/Questions/Questions';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/add_course' element={<AddCourse/>}/>
          <Route path='/add_questions' element={<Questions></Questions>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
