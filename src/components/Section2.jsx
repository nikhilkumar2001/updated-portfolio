import React from "react";

const Section2 = () => {
  return (
    <div className="relative sm:pt-40 pt-10 flex flex-col items-center justify-center sm:pl-36 pl-7 sm:pr-36 pr-7 gap-11 bg-black">
      <div className="">
        <p className="text-amber-50 text-center sm:text-8xl text-3xl font-play-fair font-semibold ">
        BUILDING ICONIC BRANDS & <br />
        HIGH-PERFORMANCE WEBSITES
        </p>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-40 gap-16 items-center">
        <div>
          <p className="text-white sm:text-left text-md sm:text-2xl leading-8 font-poppin">
            I specialize in crafting high-converting landing pages and websites
            for SaaS, Web3 & AI startups. I'm passionate about building software
            that makes a difference.
            <br />
            <br />
            Beyond my work as a frontend developer, I am an active leader and
            contributor in tech communities, where I collaborate with
            like-minded professionals to share knowledge, mentor aspiring
            developers, and stay at the forefront of industry trends.
            <br />
            <br />
            When I'm not coding, I enjoy exploring my creative side through
            watching anime, spending time with friends, supported
            Manchester United, and discovering new music across genres like ColdPlay,
            90s Western, and Irish folk song. These interests keep me inspired and
            balanced, fueling my passion for both work and leisure.
            <br />
            <br />
            I'm currently working on some exciting projects that I can't wait to
            share with you.
          </p>
        </div>
        <div className="pb-6">
          <ul className="grid gap-14">
            <li className="border-slate-400 border-t-2 pt-9">
              <h5 className="text-2xl text-slate-100 mb-1">
                Frontend Tools & CMS
              </h5>
              <p className="sm:text-xl text-slate-300">
                JavaScript (ES6+), React, TypeScript, Shopify, Wordpress,
                Learnyst, Redux, Redux Toolkit, React Testing Library,
                HTML5, Zustand, Axios, React Router
                DOM.
              </p>
            </li>
            <li className="border-slate-400 border-t-2  pt-9">
              <h5 className="text-2xl text-slate-100 mb-1">UI Libraries</h5>
              <p className="sm:text-xl text-slate-300">
                CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion,
                Bootstrap, UI Verse.
              </p>
            </li>
            <li className="border-slate-400 border-t-2  pt-9">
              <h5 className="text-2xl text-slate-100 mb-1">
                Backend Tech, Database & API
              </h5>
              <p className="sm:text-xl text-slate-300">
                Node.js, Express.js, Git/GitHub, NextAuth, MongoDB, Postman, ThunderClient
              </p>
            </li>
            <li className="border-slate-400 border-t-2 border-b-2 pb-10 pt-9">
              <h5 className="text-2xl text-slate-100 mb-1">Hosting Platform</h5>
              <p className="sm:text-xl text-slate-300">
                DigitalOcean, Cloudways, Bluehost, Hostinger, Heroku, Hostinger, Vercel, Netlify, GoDaddy.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
