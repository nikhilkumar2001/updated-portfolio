import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  //function for the scroll
  const [isScroll,setIsScroll] =  useState(false);
  useEffect(()=>{
    const handleBar = ()=>{
      if(window.screenY < 50){
        setIsScroll(true);
      }
      else{
        setIsScroll(false);
      }
    };
    //attach a evenlistener
    window.addEventListener('scroll',handleBar);
    return ()=>{
      window.removeEventListener('scroll',handleBar);
    }
  },[])
  return (
    <div className={`w-full z-10 fixed flex justify-around items-center gap-10 duration-300 ease-out border-b-2 border-[#c5c5c576] ${isScroll ? 'backdrop-blur-md duration-300 ease-out' : 'backdrop-blur-none'} `}>
        <div className=''>
            <img data-aos="fade-up" src={logo} alt="logo" className='w-20 bg-transparen hover:grayscale' />
        </div>
        <div className='flex gap-14 text-white  text-3xl uppercase'>
            <a href='https://github.com/nikhilkumar2001'>GH</a>
            <a href='https://www.linkedin.com/feed/'>LI</a>
            <a href='#'></a>
        </div>
    </div>
  )
}

export default Header