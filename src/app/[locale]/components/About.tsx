import React from 'react'
import { useTranslations } from 'next-intl';

function About() {
  const t=useTranslations('About');
  return (
    <div className='flex items-center justify-center' id='top'>
        <div className='w-full md:w-1/2 max-md:bg-[url("/images/about_img.png")] bg-cover bg-no-repeat'>
            <div className=' text-gray-200 flex flex-col gap-4 pt-6 pb-4 px-8 bg-black bg-opacity-80 md:bg-opacity-0'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-semibold md:font-bold'>{t('title-1')}<span className='text-xl md:text-2xl lg:text-3xl'>{t('title-2')}</span></h1>
                <p className='text-sm md:text-base'>{t('content')}</p>
            </div>
        </div>
        <div className='w-1/2 p-4 hidden md:flex'>
            <img src="/images/about_img.png" alt="img" className='w-2/3 mx-auto'/>
        </div>
    </div>
  )
}

export default About;