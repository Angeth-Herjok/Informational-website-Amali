import React from "react";
import './style.css'
import background from '../../src/images/yegon.png';

const HomePage = () =>{
    return(
        <div>
            <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
            <div className="overlay"></div>
            <p className="caption">A little donation can have ripple<br/>effect on athletes.</p>
            </div>
    )
};
export default HomePage;

