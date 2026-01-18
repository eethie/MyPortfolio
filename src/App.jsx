import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import resume from './assets/ez_resume.pdf'

import './App.css' 

function App() {
  return (
    <Router>
      <header>
        <nav className="nav-row">
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

        </nav>
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