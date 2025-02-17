import * as React from "react"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    setCurrentIndex(index)
  }
  
  // const imagePath = "../../src/static/marketplace/NFTM.png"
  // const images = Array.from({ length: 5 }).map(() => imagePath)

  return (
    <div className="relative">
      <Carousel className="m-auto max-w-[90vw]" onSelect={handleSlideChange}>
        <CarouselContent>
          {Array.from(bannerImages).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card 
                  className="bannerBGEffect border-none relative overflow-hidden"
                  style={{ 
                    backgroundImage: `url(${bannerImages[currentIndex]})`,
                    // maxHeight: '90vh'
                  }}
                >
                  <div className="relative z-20 flex justify-center items-center h-full">
                    <img 
                      className="max-h-[80vh] w-auto h-auto object-contain max-w-full" 
                      src={bannerImages[currentIndex]} 
                      alt="" 
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 navigation z-30" />
        <CarouselNext className="absolute right-3 navigation z-30" />
      </Carousel>
    </div>
  )
}