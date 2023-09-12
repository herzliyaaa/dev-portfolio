import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Loader from "../images/icons/heart.gif";
const Container = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <main className=" flex min-h-screen justify-center items-center flex-col">
          <img src={Loader} width={300} alt="" />
        </main>
      ) : (
        <main className=" flex min-h-screen justify-center items-center flex-col">
          {children}
        </main>
      )}
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
