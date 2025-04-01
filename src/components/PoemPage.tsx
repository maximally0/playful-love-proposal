
import React, { useState, useEffect } from "react";
import FloatingPetals from "./FloatingPetals";

interface PoemPageProps {
  onContinue: () => void;
}

const PoemPage: React.FC<PoemPageProps> = ({ onContinue }) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showClickPrompt, setShowClickPrompt] = useState(false);
  
  const poemLines = [
    "From the moment we met, I knew it was true,",
    "The world looked different, painted in hues.",
    "Time flies too fast when you're by my side,",
    "Every moment with you is a beautiful ride.",
    "",
    "Your laughter's a melody, a song so sweet,",
    "Every word you say makes my heart skip a beat.",
    "Even with flaws, even with scars,",
    "You shine brighter than a sky full of stars.",
    "",
    "The universe whispered, and I finally see,",
    "Mauli, you were always meant for me."
  ];
  
  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < poemLines.length) {
        setVisibleLines(prev => [...prev, currentLine]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowClickPrompt(true), 1000);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-full bg-gradient-poem p-6 relative cursor-pointer overflow-hidden"
      onClick={onContinue}
    >
      <FloatingPetals />
      
      <div className="text-center max-w-md md:max-w-lg z-10 bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
        <div className="font-romantic text-2xl md:text-3xl space-y-2 text-left">
          {poemLines.map((line, index) => (
            <div 
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                visibleLines.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {line === "" ? <br /> : line}
              {index === poemLines.length - 1 && visibleLines.includes(index) && (
                <span className="inline-block animate-pulse-gentle">❤️</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {showClickPrompt && (
        <div className="absolute bottom-8 text-center text-sm text-love-dark opacity-70 animate-fade-in">
          Click anywhere to continue
        </div>
      )}
    </div>
  );
};

export default PoemPage;
