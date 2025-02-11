import React from 'react'
import Experience_data from '../data/Experience_data'

function Experience() {
  return (
    <div className='pt-6 md:pt-12 pb-2 md:pb-4 px-2 md:px-8 md:hover:-translate-y-2 transition-transform duration-300'>
        <h1 className='text-lg md:text-2xl text-gray-200 font-semibold md:font-bold'>EXPERIENCE</h1>
        {Experience_data.map((experience)=>(
            <div key={experience.id} className='mt-4 mx-1 md:mx-6 rounded-sm bg-[url("/images/experience_background.jpg")] bg-no-repeat bg-cover text-gray-300'>
            <div className='bg-black bg-opacity-60  p-4 '>
                <h2 className='md:font-semibold text-base md:text-xl'>{experience.title}</h2>
                <p className='text-xs md:text-sm mt-2'><i>{experience.organization}</i></p>
                <p className='text-xs md:text-sm'>{experience.startdate} - {experience.enddate}, {experience.duration}</p>
                <p className='mt-4 text-xs md:text-base'>{experience.description}</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Experience