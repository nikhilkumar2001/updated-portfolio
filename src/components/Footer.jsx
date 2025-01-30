import React from "react";
import Heart from "../assets/heartIcon.png";
import { easeInOut, motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black sm:pt-48 pt-0 sm:pl-36 pl-3 sm:pr-36 pr-3 pb-5">
      <div className="bg-black flex flex-col items-center justify-center">
        <h4 className="text-9xl text-amber-50 text-center font-play-fair font-bold">
          Let's Talk
        </h4>
        <motion.img
          className="relative -top-[2cm] w-28"
          src={Heart}
          alt="heartIcon"
          animate={{ scale: [1, 1.2, 1.3,1.2,1] }}
          transition={{ duration: 5,
            repeat:Infinity,
            easings:  easeInOut,
           }}
        />
      </div>
      <div className="flex sm:justify-between sm:flex-row flex-col">
        <div className="grid gap-6 pb-8">
           <p className="text-white uppercase text-md sm:text-xl sm:text-left text-center">Got a question, proposal, project, or <br /> want to work together on something?</p>
           <span className="text-white uppercase text-sm sm:text-md sm:text-left sm:content justify-center text-center gap-4"> <a href="mailto:mickyroy85@gmail.com" className="mb-1 border-b-2">Send Me An Email</a> or <a href="tel:+919718834044" className="mb-1 border-b-2">BooK A Call</a></span>
        </div>
        <div>
           <ul className="flex sm:justify-start justify-center gap-10 text-4xl text-white">
            <li><a href="https://github.com/nikhilkumar2001">GH</a></li>
            <li><a href="https://www.linkedin.com/feed/">LI</a></li>
            <li><a href="https://www.instagram.com/_coding_santa/?utm_source=qr">IG</a></li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
