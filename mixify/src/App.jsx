import {Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home.jsx"
import Features from "./pages/Features.jsx"
import About from "./pages/About.jsx"
import "./App.css"


export default function App() {
  
  return(
  <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/about" element={<About/>} />     
      </Routes>
  </>
  )
  
}
