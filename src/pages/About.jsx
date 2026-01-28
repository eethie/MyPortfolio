import video from '../assets/loseyourself.mp4'

import portrait from '../assets/portrait.jpg'
import Slider from '../components/slider/slider.jsx'
import brothers from '../components/slider/about-images/brothers.jpg';
import brothers2 from '../components/slider/about-images/brothers2.jpg';
import girlfriend from '../components/slider/about-images/girlfriend.jpg';
import girlfriend2 from '../components/slider/about-images/girlfriend2.jpg';
import sister from '../components/slider/about-images/sister.jpg';
import fishing from '../components/slider/about-images/fishing.jpg';
import fishing2 from '../components/slider/about-images/fishing2.jpg';
import kh from '../components/slider/about-images/kh8.jpg';
import shell from '../components/slider/about-images/shellhacks.jpg';
import fam from '../components/slider/about-images/family.jpg'


import crowd1 from '../assets/background-light.png'
import crowd2 from '../assets/background-grey.png'
import crowd3 from '../assets/background-black.png'
import { useEffect} from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const knighthacks = [
  { imgURL: kh, imgAlt: 'knighthacks' },
  { imgURL: shell, imgAlt: 'shellhacks' },

]

const me = [
  { imgURL: girlfriend, imgAlt: 'girlfriend' },
  { imgURL: girlfriend2, imgAlt: 'girlfriend2' },
  { imgURL: fishing, imgAlt: 'fishing' },
  { imgURL: fishing2, imgAlt: 'fishing2' },

];

const family = [
  { imgURL: fam, imgAlt: 'fam' },
  { imgURL: brothers, imgAlt: 'brothers' },
  { imgURL: brothers2, imgAlt: 'brothers2' },
  { imgURL: sister, imgAlt: 'sister' },
]

function About() {
  //scroll effect
  const scrollY = useMotionValue(0);
  
    useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  
  const backY = useTransform(scrollY, y => -y * 0.1);    
  const middleY = useTransform(scrollY, y => -y * 0.4);  
  const frontY = useTransform(scrollY, y => -y * 0.9); 
  //
  return (
    <div className="about-page">
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
      <div className = "row-layout">
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
              and coding. This stems from my ongoing interesting in video games and my father worked as a software engineer. 
              This interest eventually led me to take my highschool's computer science
              AP courses, and from there I was hooked.
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
            <h3>my people</h3>
          </div>
          <div className="outside-slider">
            <Slider>
              {family.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
              })}
            </Slider>
          </div>
          <div className="outside-content">
            <p>
              This is my family, and as you can see, it’s quite large. 
              Growing up with as a family of 8 has shaped the person I am today, teaching me responsibility, resilience, and, of course, no shortage of humility. 
              I am grateful for their endless support, as without them, I don’t know how I could’ve navigated through life and pursue my passions. 
            </p>
          </div>
      </motion.div>

      <div className ="outside-container">
          <div className='header'>
            <h3> Outside of school </h3>
          </div>
        <div className="outside-slider">
            <Slider>
              {me.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
              })}
            </Slider>
          </div>
        <div className="outside-content">
            <p>
              Outside of computer science, I enjoy spending time with my family and friends, exploring new places, and trying out new experience.
              I love finding new spots to eat and hang out with girlfriend.
              When I'm not out and about I still exercise my passion of video games but additionally movies and creating new things.
              I’m grateful to be able to experience and appreciate these joys. 
            </p>
          </div>
      </div>

      <div className ="outside-container">
          <div className='header'>
            <h3>KnightHacks</h3>
           </div>
        <div className="outside-slider">
            <Slider>
              {knighthacks.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
              })}
            </Slider>
          </div>
          <div className="outside-content">
            <p>
            KnightHacks is a club at UCF that I’m truly grateful to be a part of. 
            At a school as large as UCF, it can be challenging to meet and connect with like-minded people, but KnightHacks creates a space where creativity, collaboration, and learning thrive. 
            The members are incredible, they nurture such an encouraging environment that inspires me to push my limits, explore new ideas, and build projects I never would have thought otherwise. 
            I’m excited to continue growing with this community and contributing to the amazing projects and experiences we create together.
            </p>
          </div>
      </div>
    </div>
  )
}

export default About
