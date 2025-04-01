
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FloatingStars from "./FloatingStars";

interface FinalPageProps {
  onRestart: () => void;
}

const FinalPage: React.FC<FinalPageProps> = ({ onRestart }) => {
  const [showBloom, setShowBloom] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBloom(true), 300);
    const timer2 = setTimeout(() => setShowText1(true), 1000);
    const timer3 = setTimeout(() => setShowText2(true), 2500);
    const timer4 = setTimeout(() => setShowButton(true), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-final p-6 relative">
      <FloatingStars />
      
      {showBloom && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-8xl animate-bloom">🌸</div>
        </div>
      )}
      
      <div className="text-center max-w-md md:max-w-lg z-10 space-y-8">
        <div className={`transition-opacity duration-1000 ease-in-out ${showText1 ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-romantic shimmer-text animate-shimmer">
            You are the one for me, Mauli.
          </h1>
        </div>
        
        <div className={`transition-opacity duration-1000 ease-in-out ${showText2 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl mt-4 text-love-dark">
            No matter what happens, no matter where we go, I just know—life is better with you.
          </p>
        </div>
      </div>
      
      <div className={`absolute bottom-10 transition-opacity duration-500 ease-in-out ${showButton ? 'opacity-100' : 'opacity-0'}`}>
        <Button 
          onClick={onRestart}
          className="text-xl px-6 py-3 bg-love hover:bg-love-dark"
        >
          🔄 Restart
        </Button>
      </div>
    </div>
  );
};

export default FinalPage;
