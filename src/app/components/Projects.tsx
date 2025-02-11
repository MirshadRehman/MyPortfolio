import React,{useState} from 'react'
import Slide_project from './Slide_project'
import Project_data from '../data/Project_data';

function Projects() {
  const [category,setcategory]=useState('all');
  const filteredprojects= category==='all'?Project_data:Project_data.filter(project=>project.catagory.toLowerCase()===category.toLowerCase());

  return (
    <div id='projects' className='pt-6 md:pt-12 pb-2 md:pb-4 px-2 md:px-8'>
        <h1 className='text-lg md:text-2xl text-gray-200 font-semibold md:font-bold'>PROJECTS</h1>
        <div className='flex gap-1 md:gap-4 pt-4 px-1 md:px-6 text-gray-300'>
          <button className={`hover:bg-[#404040] text-xs md:text-base p-2 rounded-lg ${category==='all'?'bg-[#404040]':''}`}
                  onClick={()=>setcategory('all')}>all projects</button>
          <button className={`hover:bg-[#404040] text-xs md:text-sm lg:text-base p-2 rounded-lg ${category==='web application'?'bg-[#404040]':''}`}
                  onClick={()=>setcategory('web application')}>Web</button>
          <button className={`hover:bg-[#404040] text-xs md:text-sm lg:text-base p-2 rounded-lg ${category==='android application'?'bg-[#404040]':''}`}
                  onClick={()=>setcategory('android application')}>Android</button>
        </div>
        <div className='pt-2 px-1 md:px-6'>
          <Slide_project projects={filteredprojects}/>
        </div>
    </div>
  )
}

export default Projects