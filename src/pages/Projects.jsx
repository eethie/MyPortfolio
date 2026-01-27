import { useState } from "react"

import video from '../assets/robotrock.mp4'

import logo from '../assets/truthmeter.png'
import logo2 from '../assets/pngpal.png'
import crowd1 from '../assets/background-light.png'
import crowd2 from '../assets/background-grey.png'
import crowd3 from '../assets/background-black.png'
import { useEffect} from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

function Projects() {
  const scrollY = useMotionValue(0);
  
    useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  
  const backY = useTransform(scrollY, y => -y * 0.1);    
  const middleY = useTransform(scrollY, y => -y * 0.4);  
  const frontY = useTransform(scrollY, y => -y * 0.75); 
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className='projects-page'>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className = "crowd-parallax">
              <motion.div className="layer layer-back"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
                style={{ y: backY }}
              >
                <img src={crowd1} alt="crowd" className="crowd-image" />
            </motion.div> 
      
            <motion.div className="layer layer-middle"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
                style={{ y: middleY }}
            >
                <img src={crowd2} alt="crowd" className="crowd-image" />
            </motion.div> 
      
            <motion.div className="layer layer-front"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
                style={{ y: frontY }}
            >
                <img src={crowd3} alt="crowd" className="crowd-image" />
            </motion.div> 
            </div>   
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
        <motion.div
          className="project-card-wrapper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1 }}>
        <div className="column">
          <motion.div 
          className="project-card"
          onClick={() => setActiveProject("TruthMeter")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          >
            <div className = 'column'>      
              <img src={logo} alt="TruthMeter Logo" className="project-logo"/>
            <div className='header'>
             <h3>TruthMeter</h3>
              </div>
            </div>
            <h4>(TruthMeter)</h4>
            <p>TruthMeter is a browser extension that uses AI to analyze and fact-check online content in real time. 
              It helps users better evaluate the credibility of the information they consume by generating transparency-driven credibility scores and explanations for claims found on webpages. 
            </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Google ADK</span>
                <span className="tag">Python</span>
              </div>
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
              Built during Knight Hacks VIII, this project blends engaging voice interaction with specialized AI reasoning to help users ask and explore financial questions with confidence.
            </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">ElevenLabs API</span>
                <span className="tag">Python</span>
              </div>
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
            <p>This is my personal portfolio website designed to showcase me, my projects, and soon my experience in a visually appealing way.
            </p>
              <div className="tags">
                <span className="tag">React</span>
              </div>
          </motion.div>

        </div>
        </motion.div>
      {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <motion.div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button className="modal-close" onClick={() => setActiveProject(null)}>
                ×
              </button>

              <h2>{activeProject}</h2>
              

              {activeProject === "TruthMeter" && (
                <>
                <img src={logo} alt="TruthMeter Logo" className = "portrait"/>
                <h4>Project Overview</h4>
                TruthMeter is a browser extension that uses AI to analyze and fact-check online content in real time. 
                It helps users better evaluate the credibility of the information they consume by generating transparency-driven credibility scores and explanations for claims found on webpages.
                <h4>ShellHacks 2025</h4>
                <p>TruthMeter is my first hackathon project and also one of my earliest software projects, and its design reflects my experience level at the time. 
                  Due to to my intention submit at least a working project, it resulted in a simple browser extension design with minimal functionality. 
                  Although simple, it served as an important introduction to building real-world applications under time constraints. 
                  Through this project, I learned the basics of working with web development, structuring a small project, and collaborating in a team environment. 
                  While the project itself is limited, it represents a starting point in my growth as a developer and helped motivate me to continue improving my technical skills.</p>
                <h4>Technologies Used:</h4> 
                <p>React, JavaScript, HTML, CSS, OpenAI API, Google ADK, Fast API</p>
                  <a
                    href="https://devpost.com/software/TruthMeter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Devpost
                  </a>
                </>
              )}

              {activeProject === "pngPal" && (
                <>
                <img src={logo2} alt="pngPal Logo" className = "portrait"/>
                <h4>Project Overview</h4>
                <p>pngPal is an interactive AI assistant designed to provide judgment-free financial consultation through a conversational interface. 
              Built during Knight Hacks VIII, this project blends engaging voice interaction with specialized AI reasoning to help users ask and explore financial questions with confidence.</p>
                <h4>KnightHacks 8</h4>
                <p>pngPal was my second hackathon project and with one less team mate and more experience I was thus a little more involved compared to the first.
                  In this project, I focused on designing the text to speech and the frontend interface to create a unique and seemless user experience.
                  Due to its unique voice interaction, I wanted to ensure at least the basic functionality was there to showcase the concept, so I prioritized building a smooth and engaging conversational flow through a minimized design.
                  I also contributed to the backend logic to ensure smooth communication between the frontend and the AI models.
                </p>
                <h4>Technologies Used:</h4> 
                <p>React, Typescript, HTML, CSS, Python, ElevenLabs API, Gemini AI</p>
                  <a
                    href="https://devpost.com/software/pngpal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Devpost
                  </a>
                </>
              )}

              {activeProject === "Portfolio" && (
                <>
                <p>You're viewing my portfolio project.
                  Check out the repo if you're interested.
                </p>
                <a
                    href="https://github.com/eethie/MyPortfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Github
                  </a>
                </>
              )}

            </motion.div>
          </div>
        )}

    </div>
  )
}

export default Projects