import React from 'react'
import NavBar from "../Components/Navbar"

import Hero from "../Components/Hero"
import LNFT from "../Components/LNFT"
import BlockChain from "../Components/BlockChain"
import TradeSection from "../Components/TradeSection"
import AboutUs from "../Components/AboutUs"
import GetInTouch from "../Components/GetInTouch"
import Footer from "../Components/Footer"
function Home() {
  return (
    <>
    <NavBar/> 
    <Hero />
    <LNFT />
    <BlockChain />
    <TradeSection />
    <AboutUs />
    <GetInTouch />
    <Footer/>
    
    </>
  )
}

export default Home



