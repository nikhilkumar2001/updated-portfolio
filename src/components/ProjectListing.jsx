import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiFeatheredWing } from "react-icons/gi";
import debounce from "lodash.debounce";
import { motion } from "framer-motion";
import P1 from "../assets/project/p1.png";
import P2 from "../assets/project/p2.png";
import P3 from "../assets/project/p3.png";
import P4 from "../assets/project/p4.png";
import P6 from "../assets/project/p6.png";
import P7 from "../assets/project/p7.png";
import P8 from "../assets/project/p8.png";
import P9 from "../assets/project/p9.png";
import P10 from "../assets/project/p12.png";

const ProjectListing = () => {
  const [showMore, setShowMore] = useState(false);

  const projectData = [
    {
      id: 1,
      title: "MWB Store",
      description:
        "I designed and developed a fully customized, visually engaging e-commerce website for the MWB Store using Shopify. This project involved a combination of Shopify's robust platform features and extensive frontend development to create a seamless, user-friendly shopping experience.",
      image: P1,
      tech: ["Shopify", "Custom Shopify Liquid", "Scss"],
      link: "https://mwbstore.com/",
      github: "https://mwbstore.com/",
    },
    {
      id: 3,
      title: "EEA Svepindia",
      description:
        "Building a website for EEA.Svepindia, a event group, using WordPress combined with custom coding. The site showcases their projects and services while ensuring a user-friendly interface, responsive design, and seamless navigation, reflecting the group's technical expertise and professionalism.",
      image: P2,
      tech: ["Wordpress", "Resolution-slider", "Scss", "PHP"],
      link: "http://eaa.svepindia.in/",
      github: "http://eaa.svepindia.in/",
    },
     {
      id: 4,
      title: "Lorien Finance",
      description:
      "Developed the Lorien Finance website using React.js, Next.js, Chakra UI, and Tailwind CSS. Features include keyword-based search, product browsing with filters, image optimization, responsive design, and front-end integration with the back-end API.",
        image: P10,
      tech: ["React.js", "Next.js", "ChakraUI", "Tailwind.Css", "MongoDb"],
      link: "https://www.lorien.finance/",
      github: "https://www.lorien.finance/",
    },
    {
      id: 5,
      title: "MediagraphicPR",
      description:
      "MediagraphicPR is a sleek, WordPress-based platform designed for managing media campaigns with an elegant and user-friendly interface, perfect for effective brand promotion.",
      image: P3,
      tech: ["Wordpress", "GSAP"],
      link: "https://mediagraphicspr.com/",
      github: "https://mediagraphicspr.com/",
    },
    {
      id: 6,
      title: "Modern UI Portfolio",
      description:
        "I have designed a modern UI concept portfolio inspired from Bentolio for my favorite singer, Zayn Malik. This project is built using Vite, React.js, and Remix, showcasing my design and development skills while celebrating Zayn's musical artistry.",
      image: P4,
      tech: ["React.js", "Tailwind Css", "Magic UI", "Remix"],
      link: "https://modern-ui-portfolio-concept.vercel.app",
      github: "https://github.com/nikhilkumar2001/Modern-UI-Portfolio-Concept",
    },
    {
      id: 7,
      title: "LetsMovin",
      description:
      " LetsMovin is an elegant property listing platform built on WordPress. Featuring a sleek and beautiful design, the website offers a user-friendly experience for browsing properties, with a focus on simplicity and functionality.",
      image: P6,
      tech: ["Wordrpess","Resolution-slider"],
      link: "https://letsmovin.com",
      github:"https://letsmovin.com"
    },
    {
      id: 8,
      title: "BizLoan",
      description:
      "BizLoan is an innovative loan platform built by you, utilizing a blend of WordPress, custom HTML, 3D UI libraries, and custom JavaScript code. The website offers a seamless, dynamic user experience, with its database securely connected to AWS for efficient data management.",
      image: P7,
      tech: ["Wordpress", "Custom Javascript", "SQL", "AWS"],
      link: "https://bizloanindia.com",
      github:"https://bizloanindia.com"
    },
    {
      id: 9,
      title: "RUDROM",
      description:
      "Building a website for RPS Rudrom, a developer group, using WordPress combined with custom coding. The site showcases their projects and services while ensuring a user-friendly interface, responsive design, and seamless navigation, reflecting the group's technical expertise and professionalism.",
      image: P8,
      tech: ["Wordpress", "Scss", "PHP"],
      link: "https://rudromgroup.in",
      github:"https://rudromgroup.in"
    },
    {
      id: 10,
      title: "African Safari",
      description:
        "I designed and developed a modern, user-friendly website for Media PR, showcasing their services and expertise in public relations, with a clean, responsive layout tailored to enhance brand visibility and client engagement.",
      image: P9,
      tech: ["HTML5", "Scss", "Babel", "JavaScript"],
      link: "https://safarika-visit.netlify.app/",
      github: "https://github.com/nikhilkumar2001/Safarika-Visit",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    const refreshFunc = debounce(() => {
      AOS.refresh();
    }, 100);
    window.addEventListener("scroll", refreshFunc);
    return () => {
      window.removeEventListener("scroll", refreshFunc);
    };
  }, []);

  const handleShowButton = () => {
    setShowMore(true);
  };

  // to show all or limited number of projects
  const isDisplayProject = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center sm:gap-40 gap-16 md:mt-[12cm] pt-10 pb-10 sm:pl-44 sm:pr-44 pl-10 pr-10 bg-black ">
      {isDisplayProject.map((project, index) => (
        <div
          data-aos="fade-up"
          key={project.id}
          className="grid grid-cols-1 w-full max-w-[30cm] lg:grid-cols-2 sm:grid-cols-1 gap-10 bg-project-bg bg-cover shadow-lg shadow-slate-100 rounded-2xl md:p-10 p-2"
        >
          <div className="grid grid-col-2 ">
            <div className="flex sm:justify-start justify-center gap-6 sm:mb-20 mb-5">
              <a href={project.link} className="">
                <FaLink className="md:w-20 w-12  md:h-20 h-12 rounded-full bg-yellow-50 sm:px-6 px-2 hover:bg-black hover:text-white hover:border-white hover:border-4 transition-bg duration-300 ease-in-out" />
              </a>
              <a href={project.link} className="">
                <FaGithub className="md:w-20 w-12  md:h-20 h-12 rounded-full bg-yellow-50 md:px-6 px-2 hover:bg-black hover:text-white hover:border-white hover:border-4 transition-bg duration-300 ease-in-out" />
              </a>
            </div>
            <div className="grid sm:gap-6 gap-6">
              <h5 className="text-white font-play-lato text-2xl sm:text-8xl text-wrap break-words overflow-hidden text-center sm:text-left font-semibold">
                {project.title}
              </h5>
              <p className="text-gray-300 font-poppin text-xs sm:text-sm sm:text-left text-wrap break-words overflow-hidden text-center">
                {project.description}
              </p>
              <ul className="text-slate-100 flex gap-6 sm:grid sm:grid-cols-3 font-lato sm:text-xl text-sm sm:text-center sm:justify-start justify-center xt uppercase">
                {project.tech.map((item, index) => (
                  <li className="text-center text-xs sm:text-sm" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* image */}
          <div className="flex items-center justify-center">
            <img
              src={project.image}
              key={index}
              alt={project.image}
              className="w-full sm:h-80 h-48 object-cover rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          </div>
        </div>
      ))}
      {!showMore && (
        <motion.a
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="text-transparent bg-gradient-to-r from-cyan-600 via-purple-500 to-red-500 bg-clip-text flex text-2xl items-center text-center gap-3"
          animate={{
            backgroundImage: [
              "linear-gradient(to right, #ff7e5f, #feb47b)",
              "linear-gradient(to left, #fff, #feb47b)",
              "linear-gradient(to right, #feb47b, #fff)",
            ],
            scale: [1, 1.4, 2, 2.3, 1.4, 1],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          initial={{
            backgroundImage: [""],
          }}
        >
          <GiFeatheredWing className="text-white w-7 h-7 " />
          <button className="text-xs sm:text-4xl" onClick={handleShowButton}>
            Explore More Project
          </button>
        </motion.a>
      )}
    </div>
  );
};

export default ProjectListing;
