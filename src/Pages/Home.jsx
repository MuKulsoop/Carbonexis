import React from 'react'
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LNFT from "../Components/LNFT"
import TradeSection from "../Components/TradeSection"
import AboutUs from "../Components/AboutUs"

function Home() {
  return (
    <>
    <NavBar/>
    <p>Hello From Home Page </p>  
    <Hero />
    <LNFT />
    <TradeSection />
    <AboutUs />
    <Footer/>
    
    </>
  )
}

export default Home