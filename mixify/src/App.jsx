import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import About from "./pages/About.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="flexbox">
      <Navbar />
      <div className="overlay" id="overlay"></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
