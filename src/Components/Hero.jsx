import React, { useDebugValue } from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <main>
        <div className="Hero">
             <div className="HeroDescription">
            
           
            <div className="Heading-1"><p className="DescriptionOfHeading-1">
              Empowering Communities through Shared Solar Investment: A
              Blockchain-Based Sustainable Platform
            </p>
            </div>
           
            <div className="Heading-2All">
              <div className="Heading-2">
            <p className="DescriptionOfHeading-2">
              A community solar sharing platform that enables individuals and
              organizations to invest in solar projects and gain digital
              ownership through NFTs.
            </p>
            </div>
            <div className="Button-GetStarted">
          <button ><h2 className="DescriptionOfButtonGetStarted">Get Started</h2> </button>
          </div>
          <div className="Wavy ">
          <img  src="Wavy.png" alt="" />
         
          </div>
          </div>
            </div>
           <div className="Earth ">
            <img  src="EarthG.svg" alt="" />
            <div className="EarthBottomText">
              <h3 className="HeadingOfEarthBottomText">Solar Project Support</h3>
              <p className="DescriptionOfEarthBottomText">
              Join us in making renewable energy accessible for everyone.
              </p>
              <p className="DiscoverMore">Discover More</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Hero;
