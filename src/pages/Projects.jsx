import video from '../assets/robotrock.mp4'
import crowd from '../assets/background.png'

import { motion } from "motion/react"

function Projects() {
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
          <div className="project-card">
            <div className='header'>
              <h3>TruthMeter</h3>
            </div>
            <h4>(TruthMeter)</h4>
            <p>TruthMeter is a browser extension that uses AI to analyze and fact-check online content in real time. 
              It helps users better evaluate the credibility of the information they consume by generating transparency-driven credibility scores and explanations for claims found on webpages. 
            </p>
            <p></p>
          </div>

          <div className="project-card">
            <div className='header'>
              <h3>PngPal</h3>
            </div>
            <h4>(PngPal)</h4>
            <p>pngPal is an interactive AI assistant designed to provide judgment-free financial consultation through a conversational interface. 
              Built during Knight Hacks VIII, this project blends engaging voice interaction with specialized AI reasoning to help users ask and explore financial questions with confidence.</p>
          </div>

          <div className="project-card">
            <div className='header'>
              <h3>Personal Portfolio</h3>
            </div>
            <h4>(this website!)</h4>
            <p>This is my personal portfolio website designed to showcase me, my projects, and soon my experience in a visually appealing way.</p>
          </div>

        </div>
    </div>
  )
}

export default Projects