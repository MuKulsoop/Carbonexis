import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerCarousel from "../Components/bannerCarousel";
import CardCarousel from "../Components/cardCarousel";
import "./marketPlace.css";

import NFTInsta from "./NFTIntsa";

export default function MarketPlace() {
  let trendingInArt = {
    heading: "Trending in Art",
    data: [
      {
        title: "Greenie Weenie #101",
        nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoHorizon #101",
        nftUri:
          "https://nftnow.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-28-at-4.46.22-PM.png",
        price: 0.011502,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "FrozenEcho #101",
        nftUri:
          "https://nftnow.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-28-at-4.45.28-PM.png",
        price: 0.023681,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoGlowSanctuary #101",
        nftUri: "NFT.png",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
    ],
  };

  let trendingInGame = {
    heading: "Trending in Game",
    data: [
      {
        title: "Hello world #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZzbFBrX4dsJwmfkvlN85kwsPEBCYGZHa875k17lJk302yIv8-F_tCmLwFcFbdukZVSY&usqp=CAU",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Bioverse Explorer#106",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBYze7LTt9yWDjDtzdurmmZydSvFRHJf7CA&s",
        price: 1.642468,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoQuest: Genesis #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARg4lRggfSJyJ8csl-1Ukr6e0sXZd9XKJ4w&s",
        price: 2.379842,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "CyberRelic: Gaia's Legacy #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HDTZ5lS9ILvyPyFCubsQyIHnC8RdvOMHtA&s",
        price: 1.046343,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Hello world #105",
        nftUri:
          "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
        price: 1.054681,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
    ],
  };

  let trendingInMusic = {
    heading: "Trending in Music",
    data: [
      {
        title: "Echoes of the Earth",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBYze7LTt9yWDjDtzdurmmZydSvFRHJf7CA&s",
        price: 0.002345,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Wind & Strings",
        nftUri:
          "https://i.pinimg.com/474x/2c/54/2f/2c542f495de2406286e3946b5d26a7b5.jpg",
        price: 0.024365,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Tree of Harmony",
        nftUri:
          "https://i.pinimg.com/736x/25/8c/f3/258cf3856592e20031c6fe32beb17649.jpg",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Melody in Bloom",
        nftUri:
          "",
        price: 0.0025465,
        tokenSymbol: "SOhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAhmXdOF1LyPaNrk-pK8S5dV39Cu3UgtLeA&sL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
    ],
  };
  return (
    <>
      <div className="bg-[#0A021A] min-h-screen text-white">
        <NavBar />
        <BannerCarousel />

        <div className="text-center my-8 ">
          <h1 className="text-5xl font-extrabold  text-white mb-6 bg-clip-text ">
            Discover This Green NFT World
          </h1>
          <hr className="bg-red-500 h-1 border-none w-[20%] text-center m-auto mt-1 min-w-[150px]" />
        </div>

        <CardCarousel infoArr={trendingInArt} />
        <CardCarousel infoArr={trendingInGame} />
        <CardCarousel infoArr={trendingInMusic} />

        <Footer />
      </div>
    </>
  );
}
