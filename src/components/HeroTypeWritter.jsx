import React from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const currentWord = words[currentWordIndex];

  React.useEffect(() => {
    let charIndex = 0;

    const typintInterval = setInterval(() => {
      if (charIndex <= currentWord?.length) {
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        //  word typed out, clier and move to the next word
        clearInterval(typintInterval);

        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, speed);

    return () => {
      clearInterval(typintInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7">
      {currentText}
    </span>
  );
};

export default HeroTypeWritter;
