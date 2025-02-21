import React from 'react'
import Sidebar from '@/Components/Sidebar'
import { ProjectImageCarousel } from '@/Components/projectImageCarousel'
import CrazyCard from './crazyCard'
import CrazyCard2 from './crazyCard2'
import BannerCarousel from '../Components/bannerCarousel'
import { DropDown } from '@/Components/dropDown'

function ProjectList() {
  return (
    <>
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
          <h1 className='text-white text-4xl' >Explore</h1>
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