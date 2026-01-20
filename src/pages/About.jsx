import portrait from '../assets/portrait.jpg'

function About() {
  return (
    <div className="about-page">

      <div className = "two-column">
        <div className="portrait-container">
          <img src={portrait} alt="Ethan Zeng Portrait" className="portrait" />
        </div>

        <div className="about-container">
          <div className="about-content">
            <div className="header">
              <h2>About Me</h2>
            </div>
            <p>
              Hi! I'm Ethan Zeng, an aspiring developer passionate about creating and exploring new technologies. 
              I am currently an undergraduate student at the University of Central Florida studying Computer Science. 
              I'm excited to share a bit about myself and my life both in and outside the world of computer science here.
            </p>
          </div>
        </div>
      </div>
      <div className="hobbies-container">
        <div className="header">
          <h3>Hobbies</h3>
        </div>
      </div>
    </div>
  )
}

export default About
