import React from 'react'

function Skills() {
  return (
    <div className='pt-6 md:pt-12 pb-2 md:pb-4 px-2 md:px-8'>
        <h1 className='text-lg md:text-2xl text-gray-200 font-semibold md:font-bold'>SKILLS</h1>
        <div className='pt-4 flex flex-col md:flex-row md:justify-around gap-2 md:gap-8 px-1 md:px-6'>
{/* Web section */}
            <div className='w-full md:w-1/2  max-md:bg-[url("/images/skills_img1.png")] bg-cover bg-no-repeat rounded-sm md:hover:-translate-y-2 transition-transform duration-300'>
            <div className=' md:bg-[#404040] bg-black max-md:bg-opacity-70 p-3 md:p-4 rounded-sm'>
                <h2 className='text-base md:text-lg font-semibold text-gray-200'>Web Development</h2>
                <div className='flex h-full items-center'>
                    <div className='text-gray-300 md:mt-4 ml-4 w-full md:w-1/3'>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>FRONTEND</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Tailwindcss</li>
                            </ul>
                        </div>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>BACKEND</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>FastApi (python)</li>
                                <li>Django (python)</li>
                                <li>Postman (api testing)</li>
                            </ul>
                        </div>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>DATABASE</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden md:block w-2/3'>
                        <img src="/images/skills_img1.png" alt="img" className='w-72 m-auto'/>
                    </div>
                </div>
            </div>
            </div>
{/* Android section */}
            <div className='w-full md:w-1/2 max-md:bg-[url("/images/skills_img2.png")] bg-cover bg-no-repeat rounded-sm md:hover:-translate-y-2 transition-transform duration-300'>
            <div className=' p-3 md:p-4 md:bg-[#404040] bg-black max-md:bg-opacity-70 rounded-sm'>
                <h2 className='text-base md:text-lg font-semibold text-gray-200'>Android Development</h2>
                <div className='flex h-full items-center'>
                    <div className='text-gray-300 md:mt-4 ml-4 w-full md:w-1/3'>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>FRONTEND</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>Android Studio (XML)</li>
                            </ul>
                        </div>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>BACKEND</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>Android Studio (KOTLIN)</li>
                            </ul>
                        </div>
                        <div className='my-2 md:my-3'>
                            <h3 className='text-sm md:text-base font-semibold'>DATABASE</h3>
                            <ul className='mt-1 md:mt-0 ml-1 md:ml-2 text-xs md:text-sm'>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden md:block w-2/3 '>
                        <img src="/images/skills_img2.png" alt="img" className='w-72 m-auto' />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills