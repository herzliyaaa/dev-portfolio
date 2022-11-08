import React from "react";
import { motion } from "framer-motion";
import Parallax from "../sub-components/Parallax.sub-component";
import topographic from "../images/icons/topo.png";

const Intro = () => {
  return (
    <div className="flex justify-center items-center">
      <section className=" h-screen w-screen flex justify-center items-center">
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
                duration: 1,
                delay: 1,
                repeatType: "reverse",
                repeat: Infinity,
              }}
              width={200}
              height={200}
              className="object-cover object-center"
            />
          </Parallax>
          <Parallax>
            <motion.h1
              // animate={{ opacity: 1 }}
              animate={
                {
                  // y: [0, 150, 150, 0],
                }
              }
              transition={{
                duration: 1,
                delay: 1,
                repeatType: "reverse",
                repeat: Infinity,
              }}
              className="text-center font-bold text-8xl stroke-text"
            >
              HELLO WORLD.
            </motion.h1>
          </Parallax>
        </div>

        {/* <div className='w-50vw h-screen bg-gray-900'></div> */}
      </section>
    </div>
  );
};

export default Intro;
