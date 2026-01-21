import video from '../assets/daftpunkmv.mp4'

function Home() {
  return (
    <div className ="home-container">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="image-overlay"></div>
    <div className="home">
      <div className="intro-text">
        <div className = "header">
          <h1>WELCOME!</h1>
        </div>
      <p>Hi! I'm Ethan Zeng, an aspiring developer passionate about creating and exploring new technologies.This is my personal portfolio where I showcase my projects and share a bit about myself.</p>
      <p>I am still relatively new to all this but I'm excited to present my journey thus far. Feel free to explore my projects and learn more about me!</p>
    </div>
  </div>
</div>
  )
}

export default Home