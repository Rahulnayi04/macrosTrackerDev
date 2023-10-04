import React, { useState, useEffect } from "react";

const Typewriter = ({ textArray }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (currentCharIndex < textArray[currentTextIndex].length) {
      interval = setInterval(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 50); // Adjust the interval to control the typing speed
    } else {
      clearInterval(interval);

      setTimeout(() => {
        if (currentTextIndex === textArray.length - 1) {
          setCurrentTextIndex(0);
        } else {
          setCurrentTextIndex(prev => prev + 1);
        }
        setCurrentCharIndex(0);
      }, 1000); // Adjust the timeout before starting the next statement
    }

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, textArray]);

  return <div className="typewriter">
    <h2>{textArray[currentTextIndex].slice(0, currentCharIndex)}</h2>
    
    </div>;
};

export default Typewriter;
