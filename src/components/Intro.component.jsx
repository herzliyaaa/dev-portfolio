import { motion } from "framer-motion";
import LogoAnimation from "../sub-components/LogoAnimation.sub-component";
import PropTypes from "prop-types";

const Intro = () => {
  const underConstruction = "under construction";

  return (
    <div className="flex justify-center items-center">
      <section className="h-screen flex justify-center items-center">
        <div className="justify-center items-center flex flex-col">
          <LogoAnimation width={200} height={200} />
          <div className="flex flex-col pt-7">
            <div className="flex">
              <motion.h1
                transition={{
                  duration: 1,
                  delay: 5,
                  repeatType: "reverse",
                  repeat: Infinity,
                }}
                className="text-center font-bold xl:text-7xl lg:text-6xl sm:text-5xl xs: text-4xl stroke-text"
              >
                {underConstruction.toUpperCase()},
              </motion.h1>
            </div>
            <div className="flex lg:justify-end xl:justify-end sm:justify-center xs: justify-center">
              <p className="text-white text-right xl:text-xl lg:text-xl sm:text-xl xs: text-lg">
                thanks
                {/* your developer. */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Intro.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Intro;
