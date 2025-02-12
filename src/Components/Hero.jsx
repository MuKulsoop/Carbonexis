import React, { useDebugValue } from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <main>
        <div className="Hero">
             <div className="HeroDescription">
             <div>
            {" "}
            <p className="Heading">
              Empowering Communities through Shared Solar Investment: A
              Blockchain-Based Sustainable Platform
            </p>
            </div>
            <div>
            <p className="Heading2">
              A community solar sharing platform that enables individuals and
              organizations to invest in solar projects and gain digital
              ownership through NFTs.
            </p>
            </div>
            <div className="Button-GetStarted">
          <button ><h2 className="DescriptionOfButton-GetStarted">SignUp</h2> </button>
          </div>
            </div>
           <div className="Earth ">
            <img  src="EarthG.svg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
export default Hero;
