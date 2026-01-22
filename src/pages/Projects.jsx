import video from '../assets/robotrock.mp4'
import crowd from '../assets/background.png'

function Projects() {
  return (
    <div className='projects-page'>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="crowd-container">
        <img src={crowd} alt="crowd" className="crowd-image" />
      </div> 
      <div className="projects-container">
        <div className="header">
          <h2>Projects</h2>
          </div>
        <p>Here are some of the things I’ve built so far :)</p>
        
      </div>
    </div>
  )
}

export default Projects