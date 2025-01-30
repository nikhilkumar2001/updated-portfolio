import React from "react";
import "./index.css";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import Section from "./components/Section";
import "aos/dist/aos.css";
import ProjectListing from "./components/ProjectListing";
import Circle from "./framer/circle";
import TextAnimation from "./framer/TextAnimation";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="relative bg-custom-bg object-center sm:h-[210rem] h-[140rem] bg-cover bg-no-repeat scroll-smooth">
        <AnimatedCursor
          innerSize={9}
          outerSize={40}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={2}
          outerScale={2}
          trailingSpeed={8}
        />
        <Header />
        <Navigation />
        <section id="home">
        <Section />
        </section>

        <section id="work">
        <Circle />
        </section>
        <TextAnimation />
        <ProjectListing />
        <section id="about">
        <Section2 />
        </section>
        <section id="contact">  
        <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
