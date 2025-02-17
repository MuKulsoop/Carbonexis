import React from "react";
import "./GetInTouch.css"

function GetInTouch()
{
    return(
        <>
        <div className="GetInTouchSection">



        <div className="HeadingOfGTH-1 text-3xl bg-gradient-to-b from-#E50AA7 to-#FF17BD00 m-auto rounded-lg p-4 text-white text-center mt-5">
        <p className="LineOfGTH-1"> Get in Touch</p>
        </div>
        <div className="HeadingOfGTH-2">
        <p className="LineOfGTH-2">MAKE YOUR EFFORTS FOR THE GREENER FUTURE WITH US</p>
        </div>

        <div className="searchContainer">
            <div className="Email">
            <p className="Search-Line">Enter Your Email Address....</p>
        </div>
        </div>
        <div className="Button-GTH">
              <button ><h2 className="DescriptionOfButtonOfGTH">Contact Us</h2> </button>
              </div>

        </div>
        </>
    );
}export default GetInTouch