import React from 'react'
import Sidebar from '@/Components/Sidebar'
import { ProjectImageCarousel } from '@/Components/projectImageCarousel'
import CrazyCard from './crazyCard'
function ProjectList() {
  return (
    <>
        {/* <Sidebar /> */}
        <div id='topProjects' >
            <div className="projectImage">
                {/* <ProjectImageCarousel /> */}
                <CrazyCard />
            </div>
            <div className="projectDetails">

            </div>
        </div>
    </>
  )
}

export default ProjectList