import "../Home/Home.scss";
import React from "react";
import mainImage from "../Images/Rectangle.png";
import creator from "../Images/Oval.png";
const Home = () => {
  return (
    <div className="home-section">
      <div className="main-item-wrapper">
        <div className="main-image">
          <i class="fas fa-eye"></i>
          <div className="view"></div>
          <img src={mainImage} alt="" />
        </div>
        <div className="main-info">
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="eth-wrapper">
            <div className="icon-price">
              <i class="fab fa-ethereum"></i>
              0.041 ETH
            </div>
            <div className="icon-clock">
              <i class="fas fa-clock"></i>3 days left
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="creator">
          <img className="creator-img" src={creator} alt="" />
          <p>Creation of</p> <span>Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
