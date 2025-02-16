"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { FaBars,FaTimes } from 'react-icons/fa';
import { useTranslations,useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

function Header() {
    const [selectedlang, setselectedlang]= useState('en');
    const [openMenu,setopenMenu]= useState(false);
    const router= useRouter();
    const currentlang=useLocale();
    const t= useTranslations('Header');


    const toggleMenu=()=>{
        setopenMenu(!openMenu);
    };
    const scrolldown=(id: string)=>{
        const section= document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    };
    const changeLang=(lang:string)=>{
        setselectedlang(lang);
        router.push(`/${lang}`);
    };
    useEffect(()=>{
        setselectedlang(currentlang);
    },[currentlang]);

  return (
    <div className='w-full bg-[#202020] p-2 md:p-4 flex justify-between items-center'>
        
{/* TITLE */}
        <div className='flex gap-2 md:gap-4 items-center cursor-pointer'>
            <button onClick={toggleMenu} className='block md:hidden text-gray-300 font-light'>
                {openMenu?(<FaTimes size={20}/>):(<FaBars size={20}/>)}
            </button>
            <img src="/images/mypic.jpeg" alt="img" className='w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full'/>
            <h1 className='text-gray-100 font-semibold  md:text-2xl lg:text-3xl'>{t('name')}</h1>
        </div>

        <div className='flex gap-4'>
{/* Navbar */}
        <nav className='text-gray-200 md:text-sm lg:text-lg hidden md:flex gap-8 mr-4 '>
            <button onClick={()=>scrolldown("top")} className='hover:text-white'>{t('home')}</button>
            <button onClick={()=>scrolldown("projects")} className='hover:text-white'>{t('projects')}</button>
            <Link href="/resume/myresume.pdf" target='_blank'><button className='hover:text-white'>{t('resume')}</button></Link>
            <button onClick={()=>scrolldown("footer")} className='hover:text-white'>{t('contact')}</button>
        </nav>
        <select
            className='hidden md:block p-1 rounded-lg bg-transparent text-gray-300 border border-gray-700 text-xs md:text-sm hover:border-gray-400 duration-500 hover:text-gray-200'
            value={selectedlang}
            onChange={(e)=>changeLang(e.target.value)}>
                <option value="en" className='text-gray-700'>Eng</option>
                <option value="hi" className='text-gray-700'>हिंदी</option>
                <option value="as" className='text-gray-700'>অসমীয়া</option>
        </select>
        <select
            className='md:hidden p-1 rounded-lg bg-transparent text-gray-300 border border-gray-700 text-xs md:text-sm hover:border-gray-400 duration-500 hover:text-gray-200'
            value={selectedlang}
            onChange={(e)=>changeLang(e.target.value)}>
                <option value="en" className='text-gray-700'>En</option>
                <option value="hi" className='text-gray-700'>Hi</option>
                <option value="as" className='text-gray-700'>As</option>
        </select>
        </div>
{/* Menu sm  */}
        {openMenu&&(
            <div className='absolute md:hidden z-50 top-16 bg-[#404040] bg-opacity-95 text-white rounded-lg p-4 text-sm'>
                <ul className='flex flex-col gap-2'>
                    <li onClick={()=>scrolldown("top")} className=''>{t('home')}</li>
                    <li onClick={()=>scrolldown("projects")} className=''>{t('projects')}</li>
                    <Link href="/resume/myresume.pdf" target='_blank'><li className=''>{t('resume')}</li></Link>
                    <li onClick={()=>scrolldown("footer")} className=''>{t('contact')}</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Header;