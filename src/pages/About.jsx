import portrait from '../assets/portrait.jpg'
import Slider from '../components/slider/slider.jsx';

import brothers from '../components/slider/people-images/brothers.jpg';
import girlfriend from '../components/slider/people-images/girlfriend.jpg';
import sister from '../components/slider/people-images/sister.jpg';

const images = [
  { imgURL: brothers, imgAlt: 'brothers' },
  { imgURL: girlfriend, imgAlt: 'girlfriend' },
  { imgURL: sister, imgAlt: 'sister' },
];

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
              <h2>who am i?</h2>
            </div>
            <p>
              I am an Asian American of Chinese/Korean descent, where I grew up in Florida for most of my life.
              Before my studies in Computer Science at the University of Florida, I always had an interesting in computers    
              and coding, as my father worked as a software engineer. This interest eventually led me to take my highschool's computer science
              AP courses, and from there I was hooked. Outside of coding, I enjoy playing video games and watching movies.
            </p>
          </div>
        </div>
      </div>
      <div className="hobbies-container">
          <div className="header">
            <h3>Hobbies</h3>
          </div>
        <div className = 'two-column'>
          <div className="hobbies-slider">
            <Slider>
              {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
              })}
            </Slider>
          </div>
          <div className="hobbies-content">
            <p>
              Outside of coding, I enjoy spending time with my family and friends, 
              exploring the new places and trying out new things. Although when I'm not doing those, 
              I often find myself immersed in movies and video games.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
