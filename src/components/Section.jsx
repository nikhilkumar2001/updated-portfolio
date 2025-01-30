import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pic1 from '../assets/pic.jpeg';
import debounce from 'lodash.debounce';
import { useMediaQuery } from 'react-responsive';

const Section = () => {
  const isScreenSmall = useMediaQuery({ maxWidth: "770px" });


  useEffect(() => {
    AOS.init({
      duration: 3000, // Duration of animations (in ms)
      once: true, // Whether animation should happen only once while scrolling
    });

    const refreshFunc = debounce(() => {
      AOS.refresh();
    }, 100);

    window.addEventListener('scroll', refreshFunc);
    return () => {
      window.removeEventListener('scroll', refreshFunc);
    };
  }, []);

  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 w-full items-center justify-center top-0 bottom-0 pt-36'>
      <div className='flex items-center justify-center' data-aos='fade-right'>
        <h4 className='text-blue-50 text-center font-play-fair sm:text-2xl absolute top-[12cm] hover:skew-x-12'>
          Frontend Developer specializing in creating <br /> seamless web experiences at ScaleAcres.
        </h4>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='text-blue-50 font-lato sm:text-9xl text-5xl text-center font-extrabold uppercase transition-colors ease-in-out '>
          <span className='hover:text-cyan-500'>N</span>
          <span className='hover:text-purple-500'>i</span>
          <span className='hover:text-orange-500'>k</span>
          <br />
          <span className='hover:text-yellow-300'>S</span>
          <span className='hover:text-pink-300'>H</span>
          <span className='hover:text-cyan-300'>A</span>
          <span className='hover:text-purple-300'>K</span>
          <span className='hover:text-amber-700'>y</span>
          <span className='hover:text-green-500'>a</span>
        </h4>
        <img
          data-aos='fade-down'
          src={Pic1}
          alt='cover'
          className= {isScreenSmall ? "w-72 sm:w-80 absolute sm:top-96 top-64 rounded-lg transition-filter duration-500 ease-in-out filter-none" : "w-80 absolute sm:top-96 top-64 rounded-xl transition-filter duration-500 ease-in-out border-gray-300 border-4 hover:grayscale"}
        />
      </div>
      <div data-aos='fade-left' className='flex items-center justify-center'>
        <h4 className='text-blue-50 text-center font-play-fair sm:text-2xl absolute top-[12cm] hover:skew-x-12'>
          Transforming Ideas into Stunning Websites, <br /> Impactful Brands, and Engaging Content.
        </h4>
      </div>
    </div>
  );
};

export default Section;
