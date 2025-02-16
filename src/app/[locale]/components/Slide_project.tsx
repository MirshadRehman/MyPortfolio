
"use clients";
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  catagory: string;
  start_date: string;
  end_date: string;
  organization: string;
  frontend: string;
  backend: string;
  database: string;
  background: string;
  image:string;
}

function Slide_project({projects}:{projects:Project[]}) {
  return(
    <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        transitionTime={700}
        renderArrowPrev={(onClickHandler,hasPrev,label)=>
          hasPrev&&(
            <button type='button' onClick={onClickHandler} aria-label={label}
                    className='hidden md:block absolute z-10 text-gray-400 h-full ml-1 text-2xl'>
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler,hasNext,label)=>
          hasNext&&(
            <button type='button' onClick={onClickHandler} aria-label={label}
                    className='hidden md:block absolute z-10 right-0 top-0 text-gray-400 h-full mr-1 text-2xl'>
              &gt;
            </button>
          )
        }
    >
       
        {projects.map((project)=>(
            <div key={project.id} 
                 style={{backgroundImage: `url(${project.background})` }}
                 className='text-gray-200 relative h-full bg-cover bg-no-repeat w-full rounded-sm text-left hover:cursor-pointer'
              >
            <div className='bg-black bg-opacity-80 md:bg-opacity-60 px-4 md:px-12 py-2 h-full md:py-6'>
{/* Title */}
              <h2 className='text-lg md:text-xl text-gray-100 font-semibold'>{project.title}</h2>
              <p className='text-xs mb-4'>{project.start_date} - {project.end_date}</p>
              <div className='flex flex-col md:flex-row'>
{/* Body-left */}
                <div className='w-full md:w-1/2'>
                  <p className='text-xs md:text-sm'>{project.catagory}</p>
                  <p className='text-xs md:text-sm'>{project.organization}</p>
        
                  <p className='mt-2 text-xs md:text-sm'>{project.description}</p>

                  <p className='mt-1 text-xs md:text-sm'><b>Frontend :</b> {project.frontend}</p>
                  <p className='text-xs md:text-sm'><b>Backend  :</b> {project.backend}</p>
                  <p className='text-xs md:text-sm'><b>Database :</b> {project.database}</p>
                  <p className='mt-1 text-sm'><b>Status:</b> {project.status}</p>
                </div>
{/* Body-right */}
                <div className='w-full md:w-1/2 grid items-center justify-center'>
                  <img src={project.image} alt="screenshot" className=''/>
                </div>
              </div>
            </div>
            </div>
        ))}
           
    </Carousel>
  )
}

export default Slide_project