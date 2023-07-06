import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";
import NavBar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <NavBar/>
    </>
  );
}

export default App
