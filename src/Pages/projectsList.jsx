import React from 'react'
import Sidebar from '@/Components/Sidebar'
import { ProjectImageCarousel } from '@/Components/projectImageCarousel'
import CrazyCard from './crazyCard'
import CrazyCard2 from './crazyCard2'
function ProjectList() {
  return (
    <>
        {/* <Sidebar /> */}
        <div id='topProjects' >
            <div className="projectImage">
                {/* <ProjectImageCarousel /> */}
                {/* <CrazyCard /> */}
                <CrazyCard2 />

            </div>
            <div className="projectDetails">

            </div>
        </div>
    </>
  )
}

export default ProjectList