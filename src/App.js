import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./helpers/Sidebar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
