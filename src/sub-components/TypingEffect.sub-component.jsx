import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <div>
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString('Web Developer')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Herzlia Jane Barangan')
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriter;
