import React from 'react';
import './style.css';
const AboutUs = () => {
  return (
    <div  className='all'>
      <h1 className='team'>About Amali</h1>
      <hr className="section-divides" />
      <div className="about-us-container">
      <div className="image-container">
        <img src="/Images/wireframe.png" alt="Company Team" className='frame' />
      </div>
      <div className="text-container">
        <h2 className='headingAbout'>Our Mission</h2>
        <p className='mission'>
          Amali is the essential app for athletes, providing a unique space<br/> to connect,
          collaborate and thrive together. Whether you're a beginner or a<br/> seasoned pro,
          Amali offers a vibrant community where you can share experiences,<br/> find mentorship 
          and access vital resources. Join us in revolutionizing athlete support<br/>,creating
          a stronger and more united athletic world. Empower yourself, connect with <br/>like-minded
          individuals and take your athletic journey to new heights with Amali.
        </p>
      </div>
    </div>
    </div>
  );
}
export default AboutUs;