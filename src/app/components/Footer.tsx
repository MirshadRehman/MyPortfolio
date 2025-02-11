import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='flex flex-col' id='footer'>
{/* section 1 */}
        <div className='bg-[#202020] flex items-center justify-center gap-4 md:gap-6 pt-6'>
            <Link href="https://www.instagram.com/the_mirshad?igsh=MXZsdHFqOWo3dXUzNQ%3D%3D&utm_source=qr" target='_blank'><img src="/images/instagram_logo.png" alt="instagram" className='w-14 md:w-16 lg:w-24 hover:cursor-pointer'/></Link>
            <Link href="https://www.facebook.com/share/1As6ehZEbR/?mibextid=wwXIfr" target='_blank'><img src="/images/facebook_logo.png" alt="facebook" className='w-7 md:w-9 lg:w-14 hover:cursor-pointer'/></Link>
            <Link href="https://github.com/MirshadRehman" target='_blank'><img src="/images/github_logo.png" alt="github" className='w-10 md:w-12 lg:w-20 hover:cursor-pointer'/></Link>
            <Link href="https://www.linkedin.com/in/mirshad-ashfaqur-rehman-4b2131147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'><img src="/images/linkedin_logo.png" alt="linkedin" className='w-10 md:w-12 lg:w-20 hover:cursor-pointer'/></Link>
            <Link href="https://x.com/MirshadRehman" target='_blank'><img src="/images/twitter_logo.jpg" alt="twitter" className='w-7 md:w-9 lg:w-14 hover:cursor-pointer'/></Link>
        </div>
        <div className='bg-[#202020] flex flex-col md:flex-row justify-center pt-14 pb-14'>
            <div className='text-center text-sm md:text-base text-gray-200 w-full md:w-1/3 my-6 md:my-0'>
                <p className='font-semibold text-lg'>Email</p>
                <p className='mt-1 md:mt-4'>mirshadrehman009@gmail.com</p>
            </div>
            <div className='text-center text-sm md:text-base text-gray-200 w-full md:w-1/3 my-6 md:my-0'>
                <p className='font-semibold text-lg'>Mobile</p>
                <p className='mt-1 md:mt-4'>7002390763</p>
            </div>
            <div className='text-center text-sm md:text-base text-gray-200 w-full md:w-1/3 my-6 md:my-0'>
                <p className='font-semibold text-lg'>Address</p>
                <p className='mt-1 md:mt-4'>Assam, India</p>
            </div>
        </div>
       
{/* section 2 */}
        <div className='bg-[#353535] text-center py-4 md:py-8 text-xs md:text-sm text-gray-200'>
            <p>©2025 MyPortfolio. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer