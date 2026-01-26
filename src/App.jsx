import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import resume from './assets/ez_resume.pdf'

import { motion } from "motion/react"

import ScrollToTop from './ScrollToTop'
import './App.css' 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <motion.nav 
          className="nav-row"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.8 }}
          >
          <div className="nav-links">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          </div>

          <div className="nav-icons">
            <a href="https://github.com/eethie">
              <FaSquareGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ethanzzeng/">
              <AiOutlineLinkedin className="icon" />
            </a>
            <a href={resume} download="ez_resume.pdf">
              <HiIdentification className="icon" />
            </a>
          </div>

        </motion.nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App