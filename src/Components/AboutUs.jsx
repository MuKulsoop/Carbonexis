import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="AboutUs">
        <div className="Heading-AboutUs text-3xl bg-gradient-to-b from-#E50AA7 to-#FF17BD00 w-[37vh] m-auto rounded-lg p-4 text-white text-center mt-5">
          <h3>About Us</h3>
        </div>
        {/* <div className="ContainerOfAboutUs">
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
        </div> */}

        <div class="AboutUsFlex ">
          <div class=" grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20 w-5/6 text-center ">
            {/* <!-- Card 1 --> */}
            <div class="Mission rounded-2xl p-12 shadow-xl">
              <h2 class="text-3xl font-semibold text-white ">Our Mission</h2>
              <p class="text-white mt-2 text-lg">
                Accelerating carbon reduction by funding impactful
                sustainability projects with transparent, trackable
                contributions.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="WhatWeDo rounded-2xl p-12 shadow-xl">
              <h2 class="text-3xl font-semibold text-white  ">
                What We Do?
              </h2>
              <p class="text-white mt-2 text-lg">
              Promote a sustainable economy where every contribution helps
              reduce the global carbon footprint.
               
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="OurVision rounded-2xl p-12 shadow-xl">
              <h2 class="text-3xl font-semibold text-white ">Our Vision</h2>
              <p class="text-white mt-2 text-lg">
              Connect donors with ongoing projects in renewable energy,
                reforestation, and green technology that need financial support
                to reduce carbon emissions.
              </p>
            </div>

            {/* <!-- Card 4 --> */}
            <div class="WhyUs rounded-2xl p-12 shadow-xl">
              <h2 class="text-3xl font-semibold text-white ">Why Us?</h2>
              <p class="text-white mt-2 text-lg">
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
