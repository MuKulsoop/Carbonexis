import React from 'react'
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LNFT from "../Components/LNFT"
import TradeSection from "../Components/TradeSection"
import Icon from "../Components/Icon"
import AboutUs from "../Components/AboutUs"
import GetInTouch from "../Components/GetInTouch"



function Home() {
  return (
    <>
    <NavBar/>
    <p>Hello From Home Page </p>  
    <Hero />
    <LNFT />
    <TradeSection />
    <Icon />
    <AboutUs />
    <GetInTouch />
    <Footer/>
    
    </>
  )
}

export default Home