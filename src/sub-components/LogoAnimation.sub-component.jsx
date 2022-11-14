import PropTypes from "prop-types";
import { motion } from "framer-motion";

import topographic from "../images/icons/topo-second.png";

const LogoAnimation = (props) => {
  const { width, height, additionalStyles } = props;
  return (
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
      width={width}
      height={height}
      className={`${additionalStyles} object-cover object-center`}
      alt="topographic logo"
    />
  );
};

LogoAnimation.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  additionalStyles: PropTypes.string,
};

export default LogoAnimation;
