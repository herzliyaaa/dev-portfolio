import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <main className=" flex min-h-screen justify-center items-center flex-col">
      {children}
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
