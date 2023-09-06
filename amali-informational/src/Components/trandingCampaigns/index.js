import React from "react";
import "./style.css";

const TrendingCampaigns = () => {
    
  const imagesWithText = [
    { imageName: "athlete4.png", text: "1500 Metres runner" },
    { imageName: "athlete5.png", text: "800 Metres runner" },
    { imageName: "kipchoge.png", text: "42 Kilometres runner" },
  ];

  return (
    <div>

      <h1 className="teams">Trending Campaigns</h1>
      <hr className="divider" />
      <div className="categories"></div>
      <div className="images-section">
        {imagesWithText.map((item, index) => (
          <div className="champion" key={index}>
            
            <img
              className="kenyan-athletes"
              src={`/images/${item.imageName}`} 
              alt={`winner-${index}`}
            />
            <div className="win">
              <ul className="my-donation">{item.text}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCampaigns;