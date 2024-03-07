import LogoAnimation from '../sub-components/LogoAnimation.sub-component';
import Typewriter from '../sub-components/TypingEffect.sub-component'
import PropTypes from 'prop-types';

const HomePage = name => {
  return (
    <section className="flex flex-row flex-nowrap h-screen w-screen gap-2">
      <div className="flex w-1/3 flex-col justify-center items-end p-2 bg-red-500">
        <div className="p-2 m-2">
          <LogoAnimation width={200} height={200} />
        </div>

        <div className="flex items-end p-2 m-2">
        <Typewriter/>
        </div>
      </div>

      <div className="flex w-2/3 flex-col justify-center items-center p-2 bg-indigo-500">
        <div className="flex justify-center items-center m-3 p-2 bg-brown h-70vh w-60vw">

        </div>
      </div>
    </section>
    
  );
};

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HomePage;
