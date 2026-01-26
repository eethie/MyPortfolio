import { useState } from "react"

import video from '../assets/robotrock.mp4'
import crowd from '../assets/background.png'

import logo from '../assets/truthmeter.png'
import logo2 from '../assets/pngpal.png'
import { motion } from "motion/react"

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className='projects-page'>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <motion.div className="crowd-container"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
      >
        <img src={crowd} alt="crowd" className="crowd-image" />
      </motion.div> 
      <motion.div 
      className="projects-container"
      initial = {{ y: -100, opacity: 0}}
      animate = {{ y:0, opacity: 1}}
      transition = {{ ease: "easeOut", delay: 1.1}}
      >
        <div className="header">
          <h2>Projects</h2>
        </div>
        <p>Here are some of the things I’ve built so far :)</p>
      </motion.div>

        <div className="column">
          <motion.div 
          className="project-card"
          onClick={() => setActiveProject("TruthMeter")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          >
            
            <div className='header'>
              <div className = 'column'>
              <img src={logo} alt="TruthMeter Logo" className="project-logo"/>
             <h3>TruthMeter</h3>
              </div>
            </div>
            <h4>(TruthMeter)</h4>
            <p>TruthMeter is a browser extension that uses AI to analyze and fact-check online content in real time. 
              It helps users better evaluate the credibility of the information they consume by generating transparency-driven credibility scores and explanations for claims found on webpages. 
            </p>
            <p></p>
          </motion.div>

          <motion.div 
          className="project-card"
          onClick={() => setActiveProject("pngPal")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          
          >
            <div className = 'column'>
            <img src = {logo2} alt="pngPal Logo" className= "project-logo"/>
            <div className='header'>
              <h3>PngPal</h3>
            </div>
            </div>
            <h4>(PngPal)</h4>
            <p>pngPal is an interactive AI assistant designed to provide judgment-free financial consultation through a conversational interface. 
              Built during Knight Hacks VIII, this project blends engaging voice interaction with specialized AI reasoning to help users ask and explore financial questions with confidence.</p>
          </motion.div>

          <motion.div 
          className="project-card"
          onClick={() => setActiveProject("Portfolio")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}>
            <div className='header'>
              <h3>Personal Portfolio</h3>
            </div>
            <h4>(this website!)</h4>
            <p>This is my personal portfolio website designed to showcase me, my projects, and soon my experience in a visually appealing way.</p>
          </motion.div>

        </div>
      {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <motion.div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2>{activeProject}</h2>

              {activeProject === "TruthMeter" && (
                <p>Extended info about TruthMeter goes here.</p>
              )}

              {activeProject === "PngPal" && (
                <p>Extended info about PngPal goes here.</p>
              )}

              {activeProject === "Portfolio" && (
                <p>Extended info about your portfolio goes here.</p>
              )}

              <button onClick={() => setActiveProject(null)}>Close</button>
            </motion.div>
          </div>
        )}

    </div>
  )
}

export default Projects