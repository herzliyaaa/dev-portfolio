import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const words = ["This is a typing animation.", "Now it erases.", "And types another word."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const word = words[currentWordIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= word.length) {
        setText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setText("");
        }, 1000); // Delay before typing the next word
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500); // Blinking speed

    return () => clearInterval(caretInterval);
  }, []);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {text}
          {showCaret && '|'}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};


export default TypingAnimation;
