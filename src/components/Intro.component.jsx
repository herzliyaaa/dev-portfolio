import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className='flex justify-center items-center'>
      <section className='bg-white h-screen w-screen flex justify-center items-center'>
        <div className='w-screen h-screen bg-gray-900 justify-center items-center flex'>
          <motion.h1
            // animate={{ y: [0, 150, 150, 0] }}
            // transition={{ duration: 1, repeat: Infinity }}
            className='text-center text-white font-bold text-8xl'
          >
            HELLO WORLD. 
           
            </motion.h1>
        </div>

        {/* <div className='w-50vw h-screen bg-gray-900'></div> */}
      </section>
    </div>
  );
};

export default Intro;
