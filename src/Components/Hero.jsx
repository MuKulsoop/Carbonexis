import React, { useDebugValue } from "react";
import "./Hero.css";
import { ArrowRight } from "lucide-react";
function Hero() {
  return (
    <>
      <main>
        <div className="Hero">
          <div className="HeroDescription">
            <div className="Heading-1">
              <p className="DescriptionOfHeading-1">
                Empowering Communities through Shared Solar Investment: A
                Blockchain-Based Sustainable Platform
              </p>
            </div>
            <div className="Heading-2All">
              <div className="Heading-2">
                <p className="DescriptionOfHeading-2">
                  A community solar sharing platform that enables individuals
                  and organizations to invest in solar projects and gain digital
                  ownership through NFTs.
                </p>
              </div>
              <div className="Button-GetStarted">
                <button>
                  <h2 className="DescriptionOfButtonGetStarted">Get Started</h2>{" "}
                </button>
              </div>
                <img src="Wavy.png" alt=""  className=" absolute mt-96 ml-28" />
              
            </div>
          </div>
          <div className="Earth ">
            <img src="EarthG.svg" alt="" />
            <div className="EarthBottomText">
              <div className="content">
                <h3 className="HeadingOfEarthBottomText">
                  Solar Project Support
                </h3>
                <p className="DescriptionOfEarthBottomText">
                  Join us in making renewable energy accessible for everyone.
                </p>
                {/* <div className="flex"> */}
                <button className=" items-center w-full h-full bg-green-500 rounded-[50%]"></button>

                <div className="flex items-center gap-8">
                  {/* Button container with glow effect */}
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-[#00ff66] opacity-20 blur-xl transform scale-125"></div>

                    {/* Main button */}
                    <button className="relative w-12 h-12 rounded-full bg-[#00ff66] flex items-center justify-center hover:scale-105 transition-transform duration-300 group">
                      <div className="bg-[#00ff66] w-8 h-8 rounded-full flex items-center justify-center">
                        {/* Arrow icon */}
                        <svg
                        color="#141432"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill=""
                          className="transform translate-x-0.5"
                        >
                          <path
                            d="M4 12H20M20 12L13 5M20 12L13 19"
                            stroke="#141432"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>

                  {/* Text with exact styling */}
                  <h1 className="text-[#00ff66] text-2xl font-light tracking-wide mr-11">
                    Discover More
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </main>
    </>
  );
}
export default Hero;
