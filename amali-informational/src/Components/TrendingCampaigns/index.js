import React from "react";
import "./style.css";

const imagePaths = [
  "jepkemoi.png",
  "rudisha.png",
  "kipchoge.png",
];

const TrendingCampaigns = () => {
  const imagesWithText = [
    { imageName: imagePaths[0], text: "1500 Metres runner" },
    { imageName: imagePaths[1], text: "800 Metres runner" },
    { imageName: imagePaths[2], text: "42 Kilometres runner" },
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
              className="athletes"
              src={`/images/${item.imageName}`}
              alt={`winner-${index}`}
            />
            <div className="win">
              <ul className="donation">{item.text}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCampaigns;
