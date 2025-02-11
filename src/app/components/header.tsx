"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import { FaBars,FaTimes } from 'react-icons/fa';

function Header() {
    const [openMenu,setopenMenu]= useState(false);
    const toggleMenu=()=>{
        setopenMenu(!openMenu);
    };
    const scrolldown=(id: string)=>{
        const section= document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    };

  return (
    <div className='w-full bg-[#202020] p-2 md:p-4 flex justify-between items-center'>
        
{/* TITLE */}
        <div className='flex gap-2 md:gap-4 items-center cursor-pointer'>
            <button onClick={toggleMenu} className='block md:hidden text-gray-300 font-light'>
                {openMenu?(<FaTimes size={20}/>):(<FaBars size={20}/>)}
            </button>
            <img src="/images/mypic.jpeg" alt="img" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full'/>
            <h1 className='text-gray-100 font-semibold  md:text-2xl lg:text-3xl'>Mirshad Ashfaqur Rehman</h1>
        </div>

{/* Navbar */}
        <nav className='text-gray-200 md:text-sm lg:text-lg hidden md:flex gap-8 mr-4 '>
            <button onClick={()=>scrolldown("top")} className='hover:text-white'>Home</button>
            <button onClick={()=>scrolldown("projects")} className='hover:text-white'>Projects</button>
            <Link href="/resume/myresume.pdf" target='_blank'><button className='hover:text-white'>Resume</button></Link>
            <button onClick={()=>scrolldown("footer")} className='hover:text-white'>Contact</button>
        </nav>

{/* Menu sm  */}
        {openMenu&&(
            <div className='absolute md:hidden z-50 top-16 bg-[#404040] bg-opacity-95 text-white rounded-lg p-4 text-sm'>
                <ul className='flex flex-col gap-2'>
                    <li onClick={()=>scrolldown("top")} className=''>Home</li>
                    <li onClick={()=>scrolldown("projects")} className=''>Projects</li>
                    <Link href="/resume/myresume.pdf" target='_blank'><li className=''>Resume</li></Link>
                    <li onClick={()=>scrolldown("footer")} className=''>Contact</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Header;