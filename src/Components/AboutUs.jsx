import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <div className="AboutUs">
        <div className="Heading-AboutUs">
          <h3>About Us</h3>
        </div>
        <div className="ContainerOfAboutUs">
          <div className="Container-R1">
            <div className="Mission">
              <h2 className="Heading-M">Our Mission</h2>
              <p className="DescriptionOfMission">
                Accelerating carbon reduction by funding impactful
                sustainability projects with transparent, trackable
                contributions.
              </p>
            </div>
            <div className="WhatWeDo">
              <h2 className="Heading-WWD">What We Do?</h2>
              <p className="DescriptionOfWWD">
                Connect donor with ongoing projects in renewable energy,
                reforestation, and green technology that need financial support
                to reduce carbon emission
              </p>
            </div>
          </div>

          <div className="Container-R2">
            <div className="OurVision">
              <h2 className="OurVision-H">Our Vision</h2>
              <p className="DescriptionOfVision">
                Promote a sustainable economy where every contribution helps
                reduce the global carbon footprint
              </p>
            </div>

            <div className="WhyUs">
              <h2 className="WhyUs-H">Why Us?</h2>
              <p className="DescriptionOfWhyUs">
                We focus on real-world impact through collective action,
                ensuring every donation leads to measurable environmental
                benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </>
  );
}
export default AboutUs;
