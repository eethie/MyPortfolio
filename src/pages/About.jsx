import portrait from '../assets/portrait.jpg'

function About() {
  return (
    <div>
      <img src={portrait} alt="Ethan Zeng" className="portrait" />
      <h2>About Me</h2>
      <p>Hi! I'm Ethan Zeng, a software developer passionate about creating and exploring new technologies. I am currently an undergraduate student at the University of Central Florida studying Computer Science. 
        I am still relatively new to all this but I'm excited to present my journey thus far.</p>
    </div>
  )
}

export default About