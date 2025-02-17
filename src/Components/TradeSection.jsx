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
          <div className="TradeSection">
            <div className="LineOfTradeSection">
              <p className="Description-T">
                <b>
                  {" "}
                  Unlock the Future of Carbon Credit Trading Join a marketplace
                  where your sustainable choices make real impact. Offset your
                  carbon footprint and connect with a community of innovators
                  driving change. Transform your green initiatives into
                  meaningful contributions. The future of sustainable trading
                  awaits—
                </b>
              </p>
              <div className=" Button-T">
                <button>
                  <h2 className="DescriptionOfButton">TRADE NOW</h2>{" "}
                </button>
              </div>
            </div>

            <div>
              <img className="Image1" src="Trade.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TradeSection;
