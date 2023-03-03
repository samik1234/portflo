import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrayDestruct from '../public/assets/ProjectItem/arrayDestruct.jpg';
import InstallNode from '../public/assets/ProjectItem/installNode.jpg';
import ReactWeather from '../public/assets/ProjectItem/reactWeather.jpg';
import ReactParallax from '../public/assets/ProjectItem/reactParallax.jpg';
import UseState from '../public/assets/ProjectItem/useState.jpg';
import ChatAi from '../public/assets/ProjectItem/chatAi.jpg'
import ReactSmooth from '../public/assets/ProjectItem/reactSmooth.jpeg'
import BB from '../public/assets/ProjectItem/bb.jpeg';
import ProjectItem from './ProjectItem';




const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Travel Booking'
            backgroundImg={ArrayDestruct}
            projectUrl='/ArrayDestruct'
            tech='React Native'
          />

          <ProjectItem
            title='Food App'
            backgroundImg={InstallNode}
            projectUrl='/InstallNode'
            tech='React Native'
          />

          <ProjectItem
            title='Parallax'
            backgroundImg={ReactParallax}
            projectUrl='/ReactParallax'
            tech='React JS'
          />

          

          <ProjectItem
            title='keyforecast'
            backgroundImg={ReactWeather}
            projectUrl='/ReactWeather'
            tech='React JS'
          />

          <ProjectItem
            title='Youtube-clone'
            backgroundImg={UseState}
            projectUrl='/UseState'
            tech='React JS'
          />
          
          <ProjectItem
            title='Chat GPT OpenAi'
            backgroundImg={ChatAi}
            projectUrl='/'
            tech='Mern Stack'
          />
          
          <ProjectItem
            title='AI Image Generator'
            backgroundImg={ReactSmooth}
            projectUrl='/ReactSmooth'
            tech='Mern stack'
          />
        
        <ProjectItem
            title='Post App'
            backgroundImg={BB}
            projectUrl='/BB'
            tech='Mern stack'
          />
        </div>

      </div>
    </div>


  )
}

export default Projects;