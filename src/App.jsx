import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import resume from './assets/ez_resume.pdf'

// eslint-disable-next-line no-unused-vars
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
          <NavLink to="/" end className="nav-link">{({ isActive }) => <>{isActive && <motion.span className="nav-glow" layoutId="nav-glow" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}<span className="nav-label">Home</span></>}</NavLink>
          <NavLink to="/about" className="nav-link">{({ isActive }) => <>{isActive && <motion.span className="nav-glow" layoutId="nav-glow" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}<span className="nav-label">About</span></>}</NavLink>
          <NavLink to="/projects" className="nav-link">{({ isActive }) => <>{isActive && <motion.span className="nav-glow" layoutId="nav-glow" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}<span className="nav-label">Projects</span></>}</NavLink>
          </div>

          <div className="nav-icons">
            <a aria-label="GitHub" href="https://github.com/eethie" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub className="icon" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ethanzzeng/" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="icon" />
            </a>
            <a aria-label="Download résumé" href={resume} target="_blank" rel="noopener noreferrer">
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
