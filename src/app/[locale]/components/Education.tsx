import React from 'react'
import { useTranslations } from 'next-intl'

function Education() {
  const t=useTranslations('Education')
  return (
    <div className='pt-6 md:pt-12 pb-2 md:pb-6 px-2 md:px-8 '>
        <h1 className='text-lg md:text-2xl text-gray-200 font-semibold md:font-bold'>{t('title')}</h1>
        <div className='flex justify-around flex-col md:flex-row gap-6 bg-[#404040] mt-4 mx-1 md:mx-6 p-2 md:p-4 rounded-sm text-gray-300'>
{/* left box */}
            <div className='w-full md:w-1/2  bg-[url("/images/education_img1.jpg")] bg-cover bg-no-repeat rounded-sm md:hover:-translate-y-2 transition-transform duration-300'>
            <div className='bg-black py-2 md:py-8 bg-opacity-60 grid justify-center h-full rounded-sm'>
                <h2 className='text-base md:text-xl font-semibold text-center'>{t('pg.title')}</h2>
                <h3 className='mt-4 md:text-lg font-semibold'>{t('pg.course')}</h3>
                <p className='mt-2'><i>{t('pg.institute')}</i></p>
                <p>{t('pg.grade')}</p>
                <p className='mt-2'>{t('pg.date')}</p>
            </div>
            </div>
{/* right box */}
            <div className='w-full md:w-1/2 bg-[url("/images/education_img2.jpg")] bg-cover bg-no-repeat rounded-sm md:hover:-translate-y-2 transition-transform duration-300'>
            <div className='py-2 md:py-8 grid justify-center bg-black bg-opacity-60 rounded-sm '>
                <h2 className='text-base md:text-xl font-semibold text-center'>{t('ug.title')}</h2>
                <h3 className='mt-4 md:text-lg font-semibold'>{t('ug.course')}</h3>
                <p className='mt-2'><i>{t('ug.institute')}</i></p>
                <p>{t('ug.grade')}</p>
                <p className='mt-2'>{t('ug.date')}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Education