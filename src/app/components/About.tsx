import React from 'react'

function About() {
  return (
    <div className='flex items-center justify-center' id='top'>
        <div className='w-full md:w-1/2 max-md:bg-[url("/images/about_img.png")] bg-cover bg-no-repeat'>
            <div className=' text-gray-200 flex flex-col gap-4 pt-6 pb-4 px-8 bg-black bg-opacity-80 md:bg-opacity-0'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-semibold md:font-bold'>Hi, myself <span className='text-xl md:text-2xl lg:text-3xl'>Mirshad</span></h1>
                <p className='text-sm md:text-base'>I am a computer science professional with a Master of Computer Application degree
                    from Dibrugarh University(2024) and a B.Sc. in Mathematics from 
                    Jorhat Institute of Science and Technology(2021). Skilled in C, python, JavaScript, Kotlin 
                    and database management, specializes in <b>Web</b> and <b>Android</b> development. I have built 
                    DoctorQuick, a medical service app (locally), also have knowledge in ReactJS and tailwindcss, fastApi 
                    for the backend and currently learning Next.js with TypeScript.  
                    I am also learning PostgreSQL for the data handling.</p>
            </div>
        </div>
        <div className='w-1/2 p-4 hidden md:flex'>
            <img src="/images/about_img.png" alt="img" className='w-2/3 mx-auto'/>
        </div>
    </div>
  )
}

export default About;