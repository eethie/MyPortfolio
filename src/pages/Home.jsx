import video from '../assets/aroundtheworld.mp4'
import crowd1 from '../assets/background-light.png'
import crowd2 from '../assets/background-grey.png'
import crowd3 from '../assets/background-black.png'
import { useEffect} from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

function Home() {
const scrollY = useMotionValue(0);

  useEffect(() => {
  const handleScroll = () => scrollY.set(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []); 

const backY = useTransform(scrollY, y => -y * 0.1);    
const middleY = useTransform(scrollY, y => -y * 0.4);  
const frontY = useTransform(scrollY, y => -y * 0.9);   
  return (
    <div className ="home-page">
      <video autoPlay loop muted playsinline className="video">
        <source src={video} type="video/mp4" />
      </video>

      <div className = "crowd-parallax">
        <motion.div className="layer layer-back"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, delay: 0.4 }}
          style={{ y: backY }}
        >
          <img src={crowd1} alt="crowd" className="crowd-image" />
      </motion.div> 

      <motion.div className="layer layer-middle"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, delay: 0.5 }}
          style={{ y: middleY }}
      >
          <img src={crowd2} alt="crowd" className="crowd-image" />
      </motion.div> 

      <motion.div className="layer layer-front"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, delay: 0.6 }}
          style={{ y: frontY }}
      >
          <img src={crowd3} alt="crowd" className="crowd-image" />
      </motion.div> 
      </div>   

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