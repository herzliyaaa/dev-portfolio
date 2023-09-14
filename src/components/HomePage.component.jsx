import { motion } from "framer-motion";
import LogoAnimation from "../sub-components/LogoAnimation.sub-component";
import PropTypes from "prop-types";

const HomePage = () => {
  const underConstruction = "under construction";

  return (
    <>
      <div className="flex justify-center items-center">
        <section className="h-screen flex justify-center items-center">
          <div className="flex justify-start items-center flex-row">
            <LogoAnimation width={200} height={200} />
          </div>
        </section>
      </div>
    </>
  );
};

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HomePage;
