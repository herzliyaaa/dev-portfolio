import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <div style={{ color: '#E0CB96' }}> {/* Change 'blue' to your desired color */}
      <Typewriter
        options={{ loop: true }} // Example: Add options if needed
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
