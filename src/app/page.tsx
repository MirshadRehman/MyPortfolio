"use client";
import React from 'react';
import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function page() {
  return (
    <div className='bg-[#292929]'>
      <Header/>  
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default page;