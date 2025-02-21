import React from 'react'
import Sidebar from '@/Components/Sidebar'
import { ProjectImageCarousel } from '@/Components/projectImageCarousel'
import CrazyCard from './crazyCard'
import CrazyCard2 from './crazyCard2'
import BannerCarousel from '../Components/bannerCarousel'
import { DropDown } from '@/Components/dropDown'
import NavBar from '@/Components/Navbar'

function ProjectList() {
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
            <BannerCarousel  />
            <CrazyCard />
        </div>
        <div className=" text-center m-4 text-3xl font-bold bg-gradient-to-r from-[white] to-[#0038FF] text-transparent bg-clip-text">
           Top Upvoted Projects
        </div>
          {/* <h1 className='text-white text-4xl m-4' >Explore</h1> */}
          <div className="flex w-full justify-center gap-4 mb-4">

          <DropDown className="flex-1" topic="Timeframe: All-time" />
          <DropDown className="flex-1"  topic="People: All" />
          <DropDown className="flex-1"  topic="Topic: All" />

          </div>
        <div className=" projectList grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {
            Array.from([1,2,3,4,5,6,7,8,9]).map((item) => (
              <CrazyCard2 key={item}/>
            ))
          }
        </div>
    </>
  )
}

export default ProjectList