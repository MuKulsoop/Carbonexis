import React, { useState } from 'react'
import Sidebar from '@/Components/Sidebar'
import { ProjectImageCarousel } from '@/Components/projectImageCarousel'
import CrazyCard from './crazyCard'
import CrazyCard2 from './crazyCard2'
import BannerCarousel from '../Components/bannerCarousel'
import { DropDown } from '@/Components/dropDown'
import NavBar from '@/Components/Navbar'

function ProjectList() {

  let projects = [
    {
      title: "Demetra",
      owner: "GreenSolution",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      postDate: "2024-02-22T14:30:00Z",
      description: "DEMETRA by Green Code reduces food waste and carbon footprint with sustainable cost-effective storage",
      target: 2400,
      raised: 1873,
      ownerImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      votes: 20
    },
    {
      title: "EcoGrow",
      owner: "EcoLife",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
      postDate: "2024-02-18T12:15:00Z",
      description: "EcoGrow promotes sustainable farming solutions to maximize yield with minimal environmental impact.",
      target: 3500,
      raised: 2900,
      ownerImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      votes: 35
    },
    {
      title: "SolarNet",
      owner: "BrightFuture",
      image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
      postDate: "2024-01-30T08:45:00Z",
      description: "SolarNet is a decentralized solar energy grid empowering communities with renewable energy.",
      target: 5000,
      raised: 3200,
      ownerImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      votes: 50
    },
    {
      title: "RecycLoop",
      owner: "RecycleTech",
      image: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg",
      postDate: "2024-02-12T14:00:00Z",
      description: "RecycLoop enhances recycling efficiency through AI-driven waste sorting technology.",
      target: 1800,
      raised: 1350,
      ownerImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      votes: 28
    },
    {
      title: "AquaHarvest",
      owner: "BlueTech",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      postDate: "2024-01-15T10:30:00Z",
      description: "AquaHarvest revolutionizes sustainable aquaculture practices to protect marine biodiversity.",
      target: 4100,
      raised: 2750,
      ownerImage: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      votes: 40
    },
    {
      title: "SmartGrid",
      owner: "PowerSolutions",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      postDate: "2024-03-01T09:00:00Z",
      description: "SmartGrid optimizes electricity consumption with AI-powered grid balancing technology.",
      target: 6200,
      raised: 5000,
      ownerImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      votes: 60
    },
    {
      title: "GreenRoof",
      owner: "EcoBuild",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      postDate: "2024-02-05T16:30:00Z",
      description: "GreenRoof enables urban buildings to reduce heat and improve air quality through rooftop gardens.",
      target: 2600,
      raised: 1950,
      ownerImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      votes: 25
    },
    {
      title: "WindHarvest",
      owner: "BreezeTech",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      postDate: "2024-01-28T14:45:00Z",
      description: "WindHarvest provides cost-effective wind turbines for small communities and businesses.",
      target: 4000,
      raised: 2800,
      ownerImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      votes: 45
    },
    {
      title: "BioPack",
      owner: "EcoFriendly",
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg",
      postDate: "2024-01-22T11:20:00Z",
      description: "BioPack develops biodegradable packaging solutions to reduce plastic waste.",
      target: 2100,
      raised: 1600,
      ownerImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      votes: 30
    },
    {
      title: "CarbonSync",
      owner: "GreenFuture",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      postDate: "2024-02-10T18:30:00Z",
      description: "CarbonSync offers blockchain-based carbon offset tracking for businesses and individuals.",
      target: 5000,
      raised: 3500,
      ownerImage: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      votes: 55
    },
    {
      title: "OceanGuard",
      owner: "MarineSafe",
      image: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg",
      postDate: "2024-03-05T13:00:00Z",
      description: "OceanGuard builds AI-driven solutions to detect and prevent ocean pollution.",
      target: 7000,
      raised: 5800,
      ownerImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      votes: 65
    },
    {
      title: "EcoTrack",
      owner: "SustainTech",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
      postDate: "2024-01-10T15:45:00Z",
      description: "EcoTrack provides smart sensors for tracking carbon footprints in real time.",
      target: 3200,
      raised: 2500,
      ownerImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      votes: 38
    }
  ];
  projects = projects.map((project) => ({
    ...project,
    completed: ((project.raised / project.target) * 100).toFixed(2)
}))

  projects.sort((a,b) => b.votes - a.votes);
  const topProjects = projects.slice(0,5);
  const restProjects  = projects.slice(5,projects.length);
  
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

 
  return (
    <>
        <NavBar />
        <hr className='mx-4' /> 
        {/* <Sidebar /> */}
        {/* <div id='topProjects' className='w-full flex justify-center h-[419px]'>
            <h1 className='text-white'>TOP UPVOTED PROJECTS</h1>
            <div className="projectImage">
                <BannerCarousel />

            </div>
            <div className="projectDetails">
                <CrazyCard />

            </div>
        </div> */}
        <div className=" text-center m-4 text-3xl font-bold bg-gradient-to-r from-[white] to-[#0038FF] text-transparent bg-clip-text">
           Top Upvoted Projects
        </div>
        {/* <h1 className='text-4xl text-white text-center my-4' ></h1> */}
        <div className = " h-[497px] overflow-hidden flex box-border mx-4">
            <BannerCarousel projects={topProjects} currentProjectIndex={currentProjectIndex} setCurrentProjectIndex={setCurrentProjectIndex} />
            <CrazyCard  project = {topProjects[currentProjectIndex]} />
        </div>
        <div className=" text-center m-4 text-3xl font-bold bg-gradient-to-r from-[white] to-[#0038FF] text-transparent bg-clip-text">
           Explore
        </div>
          {/* <h1 className='text-white text-4xl m-4' >Explore</h1> */}
          <div className="flex w-full justify-center gap-4 mb-4">

          <DropDown className="flex-1" topic="Timeframe: All-time" />
          <DropDown className="flex-1"  topic="People: All" />
          <DropDown className="flex-1"  topic="Topic: All" />

          </div>
        <div className=" projectList grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {
            Array.from(restProjects).map((project, index) => (
              <CrazyCard2 key={index} projectDets={project} />
            ))
          }
        </div>
    </>
  )
}

export default ProjectList