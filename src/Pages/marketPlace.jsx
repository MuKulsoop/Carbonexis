import React from 'react'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BannerCarousel from '../Components/bannerCarousel'
import CardCarousel from '../Components/cardCarousel'
import './marketPlace.css'



import NFTInsta from './NFTIntsa'

export default function MarketPlace(){

    let trendingInArt = {
        heading: "Trending in Art", 
        data: [
        {
            title: "Greenie Weenie #101",
            nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
            price: 0.013991,
            tokenSymbol: "ETH",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Greenie Weenie #101",
            nftUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKUZ4gCR0WQUWGaApCocaEGFj2tW9pN2lRA&s",
            price: 0.013991,
            tokenSymbol: "ETH",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Greenie Weenie #101",
            nftUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmU4j86emx1gmRULy5BlliaUolpRV-0cCXmA&s",
            price: 0.013991,
            tokenSymbol: "ETH",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Greenie Weenie #101",
            nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
            price: 0.013991,
            tokenSymbol: "ETH",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
    ]}


    let trendingInGame = {
        heading: "Trending in Game", 
        data: [
        {
            title: "Hello world #105",
            nftUri: "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
            price: 2.01981,
            tokenSymbol: "POL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Hello world #105",
            nftUri: "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
            price: 2.01981,
            tokenSymbol: "POL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Hello world #105",
            nftUri: "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
            price: 2.01981,
            tokenSymbol: "POL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Hello world #105",
            nftUri: "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
            price: 2.01981,
            tokenSymbol: "POL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Hello world #105",
            nftUri: "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
            price: 2.01981,
            tokenSymbol: "POL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        
        
    ]}

    let trendingInMusic = {
        heading: "Trending in Music", 
        data: [
        {
            title: "Music is GREAT #231",
            nftUri: "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
            price: 0.00025,
            tokenSymbol: "SOL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Music is GREAT #231",
            nftUri: "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
            price: 0.00025,
            tokenSymbol: "SOL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Music is GREAT #231",
            nftUri: "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
            price: 0.00025,
            tokenSymbol: "SOL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        {
            title: "Music is GREAT #231",
            nftUri: "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
            price: 0.00025,
            tokenSymbol: "SOL",
            tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png"
        },
        
    ]}
    return (
        <>
        <div className="bg-[#0A021A] min-h-screen text-white">
            <NavBar />
            <BannerCarousel />

            <div className="text-center my-8 ">
                <h1 className="text-5xl font-extrabold  text-white mb-6 bg-clip-text ">
                    Discover This Green NFT World
                </h1>
                <hr className='bg-red-500 h-1 border-none w-[20%] text-center m-auto mt-1 min-w-[150px]' />
            </div>

            <CardCarousel infoArr={trendingInArt} />
            <CardCarousel infoArr={trendingInGame} />
            <CardCarousel infoArr={trendingInMusic} />

            <Footer />
        </div>

        </>
    )
}