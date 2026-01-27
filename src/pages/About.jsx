import video from '../assets/instantcrush.mp4'

import portrait from '../assets/portrait.jpg'
import Slider from '../components/slider/slider.jsx'
import brothers from '../components/slider/people-images/brothers.jpg';
import girlfriend from '../components/slider/people-images/girlfriend.jpg';
import sister from '../components/slider/people-images/sister.jpg';

import crowd1 from '../assets/background-light.png'
import crowd2 from '../assets/background-grey.png'
import crowd3 from '../assets/background-black.png'
import { useEffect} from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const images = [
  { imgURL: brothers, imgAlt: 'brothers' },
  { imgURL: girlfriend, imgAlt: 'girlfriend' },
  { imgURL: sister, imgAlt: 'sister' },
];

function About() {
  const scrollY = useMotionValue(0);
  
    useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  
  const backY = useTransform(scrollY, y => -y * 0.1);    
  const middleY = useTransform(scrollY, y => -y * 0.4);  
  const frontY = useTransform(scrollY, y => -y * 0.75); 
  return (
    <div className="about-page">
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
      <div className = "column">
        <motion.div 
        className="portrait-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 1 }}
        >
          <img src={portrait} alt="Ethan Zeng Portrait" className="portrait" />
        </motion.div>

        <motion.div 
        className="about-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 1.1 }}
        >
          <div className="about-content">
            <div className="header">
              <h2>who am i?</h2>
            </div>
            <p>
              I am an Asian American of Chinese/Korean descent, where I grew up in Florida for most of my life.
              Before my studies in Computer Science at the University of Florida, I always had an interesting in computers    
              and coding, as my father worked as a software engineer. This interest eventually led me to take my highschool's computer science
              AP courses, and from there I was hooked. Outside of coding, I enjoy playing video games and watching movies.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div 
      className="outside-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.4 }}
      
      >
          <div className="header">
            <h3>outside of class</h3>
          </div>
        <div className = 'column'>
          <div className="outside-slider">
            <Slider>
              {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
              })}
            </Slider>
          </div>
          <div className="outside-content">
            <p>
              Outside of coding, I enjoy spending time with my family and friends, 
              exploring the new places and trying out new things. Although when I'm not doing those, 
              I often find myself immersed in movies and video games.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
