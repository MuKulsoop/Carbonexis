import * as React from "react"
import cardImage from "../static/cardCarousel-temp/cardImage.png"
import zaCoin from "../static/cardCarousel-temp/zaCoin.jpg"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from 'lucide-react';
import './carousel.css'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CardCarousel(infoArr) {
    let heading = infoArr.infoArr.heading;
    infoArr = infoArr.infoArr.data;
  return (
    <>
    <p className="text-white pl-12 mt-14 text-2xl" >{heading}</p>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full m-auto mt-5 pl-9 pr-9"
    >
      <CarouselContent>
        {Array.from(infoArr).map((info, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1 text-m max-w-[80vw] m-auto">
              <Card className = "border-0 cardBG text-white">
                <CardContent className="flex flex-col gap-3 items-center justify-center p-6 ">
                    <img src={info.nftUri} className="carouselCard" alt="" />
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col gap-3">
                            <p>
                                {info.title}
                            </p>
                            <p>Price: {info.price} {info.tokenSymbol}</p>
                        </div>
                        <img className="w-16 h-16" src={info.tokenLogo} alt="" />
                    </div>
                    <button className="flex w-11/12 justify-between p-3 buyNowButtom rounded-sm">
                        <p>BUY NOW</p>
                        <ShoppingCart />
                    </button>
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className = "left-1 navigation" />
      <CarouselNext className = "right-1 navigation" />
    </Carousel>
    </>
  )
}
