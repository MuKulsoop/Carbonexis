import * as React from "react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages = [
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
  ]

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <Carousel className="m-auto max-w-[90vw]" onSelect={handleSlideChange}>
        <CarouselContent>
          {bannerImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  className="bannerBGEffect relative overflow-hidden border-none carouselCard"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>

                  {/* Image Container */}
                  <div className="relative z-20 flex justify-center items-center h-full">
                    <img
                      className="max-h-[80vh] w-auto h-auto object-contain max-w-full rounded-md shadow-2xl transition-transform duration-500 ease-in-out"
                      src={image}
                      alt={`Banner ${index + 1}`}
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="navigation absolute left-3 z-30" />
        <CarouselNext className="navigation absolute right-3 z-30" />
      </Carousel>
    </div>
  );
}
