import React from 'react'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BannerCarousel from '../Components/bannerCarousel'
import CardCarousel from '../Components/cardCarousel'
import './marketPlace.css'

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
            nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
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
        {
            title: "Greenie Weenie #101",
            nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
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
        {
            title: "Greenie Weenie #101",
            nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
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
        {/* <NavBar /> */}
        <BannerCarousel />
        <h1 className='text-4xl font-bold  text-white text-center mt-5 max-md:text-2xl' >Discover This Green NFT World</h1>
        <hr className='bg-red-500 h-1 border-none w-[20%] text-center m-auto mt-1 min-w-[150px]' />
        <CardCarousel infoArr={trendingInArt} />
        <CardCarousel infoArr={trendingInGame} />
        <CardCarousel infoArr={trendingInMusic} />


        beech ka maal
        {/* <Footer /> */}
        </>
    )
}