import PropTypes from "prop-types";
import LogoAnimation from "../sub-components/LogoAnimation.sub-component";

const Footer = ({ name }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 w-full">
      <div className="sm:flex sm:items-center sm:justify-between">
        <p className="flex items-center mb-4 sm:mb-0">
          <LogoAnimation width={50} height={50} />
          {/* <img src={topographic} className="mr-3 h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </p>
        <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <p className="mr-4 hover:underline md:mr-6 ">About</p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6">Skills</p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6 ">Projects</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear}
        <p>{name}. All Rights Reserved.</p>
      </span>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Footer;
