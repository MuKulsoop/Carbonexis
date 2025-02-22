import React from "react";
import "./LNFT.css";
import CardCarousel from "./cardCarousel";

function LNFT() { 


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
        nftUri: "https://nftnow.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-28-at-4.46.22-PM.png",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Greenie Weenie #101",
        nftUri: "https://nftnow.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-28-at-4.45.28-PM.png",
        price: 0.013991,
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
      {
        title: "Bioverse Explorer#106",
        nftUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBYze7LTt9yWDjDtzdurmmZydSvFRHJf7CA&s",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoQuest: Genesis #105",
        nftUri: "https://i.ibb.co/s98vrKJT/card-Image.png",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Greenie Weenie #101",
        nftUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARg4lRggfSJyJ8csl-1Ukr6e0sXZd9XKJ4w&s",
        price: 0.013991,
        tokenSymbol: "ETH",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "CyberRelic: Gaia's Legacy #105",
        nftUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HDTZ5lS9ILvyPyFCubsQyIHnC8RdvOMHtA&s",
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
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoQuest: Genesis #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARg4lRggfSJyJ8csl-1Ukr6e0sXZd9XKJ4w&s",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "CyberRelic: Gaia's Legacy #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HDTZ5lS9ILvyPyFCubsQyIHnC8RdvOMHtA&s",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Hello world #105",
        nftUri:
          "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Hello world #105",
        nftUri:
          "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Hello world #105",
        nftUri:
          "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Hello world #105",
        nftUri:
          "https://i.ibb.co/YFq27kDV/4b625d2356aa61a0e99387a3286a24d3.png",
        price: 2.01981,
        tokenSymbol: "POL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
    ],
  };

  let trendingInMusic = {
    heading: "Trending in Music",
    data: [
      {
        title: "Music is GREAT #231",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZzbFBrX4dsJwmfkvlN85kwsPEBCYGZHa875k17lJk302yIv8-F_tCmLwFcFbdukZVSY&usqp=CAU",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Bioverse Explorer#106",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBYze7LTt9yWDjDtzdurmmZydSvFRHJf7CA&s",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "EcoQuest: Genesis #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARg4lRggfSJyJ8csl-1Ukr6e0sXZd9XKJ4w&s",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "CyberRelic: Gaia's Legacy #105",
        nftUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HDTZ5lS9ILvyPyFCubsQyIHnC8RdvOMHtA&s",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Music is GREAT #231",
        nftUri:
          "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Music is GREAT #231",
        nftUri:
          "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Music is GREAT #231",
        nftUri:
          "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
      {
        title: "Music is GREAT #231",
        nftUri:
          "https://i.ibb.co/VWYLphxP/b35359c422a1e001f79c3b8799a53390.png",
        price: 0.00025,
        tokenSymbol: "SOL",
        tokenLogo: "https://i.ibb.co/Y75vB3MJ/zaCoin.png",
      },
    ],
  };
  return (
    <>
    <div className="NFTSection">
    <div className="NFTHeadings text-3xl bg-gradient-to-b from-#E50AA7 to-#FF17BD00 w-[37vh] m-auto rounded-lg p-4 text-white text-center mt-5">
      <h4 className="Popular">Most Popular</h4>
      <h4 className="NFT">NFT</h4>
      </div>

      <CardCarousel infoArr={trendingInArt} />
      <h1 className="ExploreProjects text-3xl bg-gradient-to-b from-[#E50AA7] to-[#FF17BD00] w-[37vh] m-auto rounded-lg p-4 text-white text-center mt-5">
        Explore Projects
      </h1>

      <CardCarousel infoArr={trendingInMusic} />
      </div>
    </>
  );
}
export default LNFT;
