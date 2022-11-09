import React from "react";
import { motion } from "framer-motion";
import Parallax from "../sub-components/Parallax.sub-component";
import topographic from "../images/icons/topo-second.png";

const Intro = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="h-screen flex justify-center items-center">
        <div className="justify-center items-center flex flex-col">
          <Parallax>
            <motion.img
              src={topographic}
              animate={{
                opacity: 1,
                filter: "white",
                backgroundColor: ["#60F", "#09F", "#FA0"],
              }}
              transition={{
                type: "spring",
                duration: 5,
                delay: 1,
                repeatType: "reverse",
                repeat: Infinity,
              }}
              width={200}
              height={200}
              alt="topographic logo"
              className="object-cover object-center"
            />
          </Parallax>
          <Parallax>
            <div className="flex flex-col">
              <div className="flex">
                <motion.h1
                  animate={
                    {
                      // y: [0, 150, 150, 0],
                      // opacity: 1
                    }
                  }
                  transition={{
                    duration: 1,
                    delay: 1,
                    repeatType: "reverse",
                    repeat: Infinity,
                  }}
                  className="text-center font-bold xl:text-7xl lg:text-6xl sm:text-5xl xs: text-4xl stroke-text"
                >
                  HERZLIA JANE BARANGAN,
                </motion.h1>
              </div>

              <div className="flex lg:justify-end xl:justify-end sm:justify-center xs: justify-center">
                <p className="text-white text-right xl:text-xl lg:text-xl sm:text-xl xs: text-lg">
                  your developer.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </div>
  );
};

export default Intro;
