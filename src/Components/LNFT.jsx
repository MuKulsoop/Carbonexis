import React from "react";
import "./LNFT.css";
function LNFT() {
  return (
    <>
      <div className="NFTSection">
        <div className="NFTHeadings">
          <h3 className="Popular">Most Popular</h3>
          <h3 className="NFT"> NFTs</h3>
        </div>
        <div className="AllCards">




          <div class="card-container">
            <div class="card">
              <img src="NFT-3.png"></img>
              <div class="card-content">
                <h2 class="card-title">BIOVERSE #666</h2>
                <button class="card-button" onclick="toggleModal(1)">
                  View
                </button>
              </div>
            </div>
          </div>


{/* 
          <div className="card">
            <img className="Image-2" src="image.png" alt="" />
            <div className="Description">
              <h3>
                <b>BIOVERSE#666</b>
              </h3>
            </div>
          </div>
          <div className="card">
            <img className="Image-3" src="NFT-3.png" alt="" />
            <div className="Description">
              <h3>
                <b>BIOVERSE#666</b>
              </h3>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default LNFT;
