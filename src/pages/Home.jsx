import video from '../assets/aroundtheworld.mp4'
import crowd from '../assets/background.png'

import { motion } from "motion/react"

function Home() {
  return (
    <div className ="home-page">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <motion.div 
      className="crowd-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
      >
      <img src={crowd} alt="crowd" className="crowd-image" />
      </motion.div>    
      <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.4 }}
      >
      <div className="intro-text">
        <div className = "header">
          <h1>WELCOME!</h1>
        </div>
      <p>Hi! I'm Ethan Zeng, an aspiring developer passionate about creating and exploring new technologies.This is my personal portfolio where I showcase my projects and share a bit about myself.</p>
      <p>I am still relatively new to all this but I'm excited to present my journey thus far. Feel free to explore my projects and learn more about me!</p>
    </div>
  </motion.div>
</div>
  )
}

export default Home