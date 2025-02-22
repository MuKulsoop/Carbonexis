import React from "react";
import { ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

export default function CardCarousel({ infoArr }) {
  return (
    <div className="mt-10 px-2">
      <h2 className="text-3xl font-bold text-white mb-4">{infoArr.heading}</h2>
      
      <Carousel className="w-full">
        <CarouselContent>
          {infoArr.data.map((info, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 cursor-pointer">
              <div className="p-3">
                <div className="bg-[#1A0828] border border-purple-500 shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  
                  <img src={info.nftUri} className="w-auto my-4 rounded-lg h-56 object-cover m-auto" alt="NFT" />
                  
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400">Price: {info.price} {info.tokenSymbol}</p>
                      <img src={info.tokenLogo} alt="Token" className="w-10 h-10" />
                    </div>

                    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:shadow-xl transition-all duration-300">
                      <span>BUY NOW</span>
                      <ShoppingCart size={20} />
                    </button>
                  </div>

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-white hover:text-purple-500 transition" />
        <CarouselNext className="text-white hover:text-purple-500 transition" />
      </Carousel>
    </div>
  );
}
