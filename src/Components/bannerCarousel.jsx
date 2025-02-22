import * as React from "react";
import { Card } from "@/Components/ui/card";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import PropTypes from 'prop-types';


export default function BannerCarousel({projects, currentProjectIndex, setCurrentProjectIndex}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)

  

  const handleSlideChange = (index) => {
    console.log(index)
    setCurrentIndex(index);
    setCurrentProjectIndex(index);

  };

  return (
    <div className="relative">
      <Carousel className="m-auto max-w-[90vw]" 
        // onValueChange={(value) => handleSlideChange(value)}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  className="bannerBGEffect relative overflow-hidden border-none carouselCard"
                  style={{
                    backgroundImage: `url(${project.image})`,
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
                      src={project.image}
                      alt={`Banner ${index + 1}`}
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

      
      <CarouselPrevious className="navigation absolute left-3 z-30"     onSelect={handleSlideChange} />
        <CarouselNext className="navigation absolute right-3 z-30" />
      </Carousel>
    </div>
  );
}

BannerCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      completion: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  currentProjectIndex: PropTypes.number.isRequired,
  setCurrentProjectIndex: PropTypes.func.isRequired
};

BannerCarousel.defaultProps = {
  projects: []
};
