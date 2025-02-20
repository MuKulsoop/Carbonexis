import * as React from "react"

import { Card, CardContent } from "@/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"

export function ProjectImageCarousel() {
  const bannerImages = [
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
    "../../src/static/marketplace/NFTM.png",
  ]
  return (
    <Carousel className="w-full max-w-xs m-auto">
      <CarouselContent>
        {Array.from(bannerImages).map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <img src={image} className="w-full"  alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 top-full bottom-2" />
      <CarouselNext className="right-0 top-full bottom-2" />
    </Carousel>
  )
}
