import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';

function Circle() {
  const isScreenSmall = useMediaQuery({ maxWidth: "770px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // IntersectionObserver hook to check if the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it triggers only once when it enters the view
    threshold: 0.5, // Only trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      setHasAnimated(true); // Trigger the animation when the component is in view
    }
  }, [inView]);

  return (
    <div
      ref={ref} // Attach the observer to this div
      className={isScreenSmall ? "h-32 w-32 text-white mx-auto mt-[10cm]" : "h-28 w-28 text-white bg-white rounded-full mx-auto mt-[16cm]"}
    >
      {inView && (
        <motion.div
          animate={hasAnimated ? {
            opacity: isScreenSmall ? null : 1,
            y: [30, 20, 40, 30, 20],
            x: [-50, -20, 30, 30, 40, 20, 10, 0, -20, -30]
          } : {}}
          initial={{
            opacity: 0,
            y: 0,
            x: -100,
          }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
          className="bg-black h-24 w-24 rounded-full"
        ></motion.div>
      )}
    </div>
  );
}

export default Circle;
