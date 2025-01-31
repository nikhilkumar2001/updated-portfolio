import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function TextAnimation() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const isScreen = useMediaQuery({ query: "max-width:770px" });

  return (
    <div className="flex items-center justify-center overflow-x-hidden overscroll-x-contain">
      <motion.div
        className="flex text-white items-center justify-center w-full h-[100px] sm:h-[200px] sm:text-9xl bg-rocket bg-contain bg-no-repeat"
        initial={{ opacity: 0, y: 100 }} // Initial state before the element comes into view
        animate={{
          opacity: hasAnimated ? 1 : 0,
          y: hasAnimated ? [0, 5, null] : [100, 100],
          x: hasAnimated ? [0, 1, 100, 0] : [0, 0],
          scale: isScreen ? (hasAnimated ? [1.2, 1.8, 3.0] : [0]) : (hasAnimated ? [0.4, 0.6, 1.8] : [0]),
          backgroundPosition: hasAnimated
            ? ["0% 0%", "100% 100%", "0% 0%"]
            : ["0% 0%", "0% 0%", "0% 0%"], // Animating the background
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
        whileInView={{
          opacity: 1, // Ensure opacity is set to 1 when in view
          y: [0, 5, null], // Animate vertical position
          x: [0, 1, 100, 0], // Animate horizontal position
          scale: isScreen ? [1.2, 1.8, 3.0] : [0.4, 0.6, 1.8],
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        viewport={{
          once: true, // Trigger only once when it first enters the viewport
          amount: 0.5, // Trigger when 50% of the element is visible in the viewport
        }}
        onViewportEnter={() => {
          setHasAnimated(true); // Set state to true when animation happens for the first time
        }}
      >
        <span className="text-xs sm:text-3xl text-center">
          Step Inside a World of Innovation <br /> Explore My Exclusive Projects
        </span>

        <motion.span
          className="sm:text-4xl text-[11px] font-bold font-play-fair text-center"
          initial={{ opacity: 0, y: 100 }} // Initial state for the text
          animate={{
            y: hasAnimated ? [0, 5, 0] : [100, 100, 100], // Vertical movement for text
            x: hasAnimated ? [-1000, 0, 100] : [-1000, -1000, -1000], // Horizontal movement for text
            scale: hasAnimated ? [1.2, 1.8] : [0], // Scaling animation for text
            backgroundPosition: hasAnimated
              ? ["0% 0%", "100% 100%", "50% 50%"]
              : ["0% 0%", "0% 0%", "0% 0%"], // Animating background position for text
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
        </motion.span>
      </motion.div>
    </div>
  );
}

export default TextAnimation;
