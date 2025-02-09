import React from "react";
import "./TradeSection.css";

function TradeSection() {
  return (
    <>
      <div className="Trade">    
        <div className="Heading-T">
          <h3>Trade Carbon Credit</h3>
        </div>

        <div className="TCC">

          <div 
           className="TradeSection">
             <p className="Description-T">
              <b>
                {" "}
                Unlock the Future of Carbon Credit Trading Join a marketplace
                where your sustainable choices make real impact. Offset your
                carbon footprint and connect with a community of innovators
                driving change. Transform your green initiatives into meaningful
                contributions. The future of sustainable trading awaits—
              </b>
            </p>
            <img className="Image1" src="Trade.png" alt="" />
            </div>

            <div>
              <button className="Button-T">Trade Now </button>
            </div>
        
        </div>
      </div>
    </>
  );
}
export default TradeSection;
