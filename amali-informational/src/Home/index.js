import React, { useEffect } from "react";
import "./style.css";
import background1 from '../../src/images/kiprop.png';
import background2 from '../../src/images/eliudkipchoge.jpg';
import background3 from '../../src/images/chepngetich.png';
import background4 from '../../src/images/Rudisha.png';


const HomePage = () => {
  useEffect(() => {
    const backgrounds = [background1, background2, background3, background4];
    let currentBackgroundIndex = 0;
    const backgroundElement = document.querySelector(".background");

    const changeBackground = () => {
      backgroundElement.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    };

    
    
    const interval = setInterval(changeBackground, 3000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="background"></div>
      <div className="overlay"></div>
      <p className="caption">
        A little donation can have a ripple effect on athletes.
      </p>
    </div>
  );
};

export default HomePage;