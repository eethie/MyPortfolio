import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Links from './pages/Links'

import './App.css'  // for navbar styles

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/links" className="nav-link">Links</NavLink> 
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App