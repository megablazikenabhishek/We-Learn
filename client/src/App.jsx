import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import AddCourse from './Components/AddCourse/AddCourse';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
          <Route path='/add_course' element={<AddCourse></AddCourse>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
