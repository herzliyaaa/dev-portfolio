import React from "react";
import { motion } from "framer-motion";
import Parallax from "../sub-components/Parallax.sub-component";
import topographic from "../images/icons/topo.png";

const Intro = () => {
  return (
    <div className="flex justify-center items-center">
      <section className=" h-screen w-screen flex justify-center items-center">
        <div className="w-screen h-screen  justify-center items-center flex flex-col">
          <Parallax>
            <motion.img
              src={topographic}
              animate={{ opacity: 1, filter: "white" }}
              width={400}
              height={400}
            />
          </Parallax>
          <Parallax>
            <motion.h1
              animate={{ opacity: 1 }}
              // animate={{ y: [0, 150, 150, 0] }}
              // transition={{ duration: 1, repeat: Infinity }}
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
