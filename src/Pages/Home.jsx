import React from 'react'
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LNFT from "../Components/LNFT"
import BlockChain from "../Components/BlockChain"

import TradeSection from "../Components/TradeSection"
// import Icon from "../Components/Icon"
import AboutUs from "../Components/AboutUs"
import GetInTouch from "../Components/GetInTouch"
function Home() {
  return (
    <>
    <div className=' h-[100%] w-[100%] overflow-hidden'></div>
    <NavBar/> 
    <Hero />
    <LNFT />
    <BlockChain />
    <TradeSection />
    {/* <Icon /> */}
    <AboutUs />
    <GetInTouch />
    <Footer/>
    
    </>
  )
}

export default Home