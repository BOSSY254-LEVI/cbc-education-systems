import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  repeat?: boolean;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  repeat = true,
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;

    const type = () => {
      if (charIndex <= text.length) {
        setDisplayedText(text.substring(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(type, speed);
      } else {
        setIsComplete(true);
        if (repeat) {
          // Reset and start typing again after 2 seconds
          timeoutId = setTimeout(() => {
            charIndex = 0;
            setDisplayedText('');
            setIsComplete(false);
            timeoutId = setTimeout(type, speed);
          }, 2000);
        }
      }
    };

    // Initial delay before starting
    timeoutId = setTimeout(() => {
      type();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, repeat]);

  return displayedText;
};
