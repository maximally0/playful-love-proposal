
import React, { useEffect, useState } from "react";
import FloatingStars from "./FloatingStars";

interface MessagePageProps {
  onContinue: () => void;
}

const MessagePage: React.FC<MessagePageProps> = ({ onContinue }) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible1(true), 300);
    const timer2 = setTimeout(() => setVisible2(true), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-full bg-gradient-romantic p-6 relative cursor-pointer"
      onClick={onContinue}
    >
      <FloatingStars />
      
      <div className="text-center max-w-md md:max-w-lg lg:max-w-2xl z-10">
        <div className={`transition-opacity duration-1000 ease-in-out ${visible1 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-handwritten leading-relaxed">
            Even though we haven't known each other forever, I just know you are the one. 
            With you, time moves too fast, yet every second is worth a lifetime. 
            Everything feels effortless, perfect, and exactly how it's meant to be. 
            I never believed in destiny, but now, I can't ignore it. 
            You make the world brighter, and every flaw, every imperfection, 
            just feels right when I'm with you.
          </p>
        </div>
        
        <div className={`transition-opacity duration-1000 ease-in-out ${visible2 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-romantic text-love-dark animate-pulse-gentle glowing">
            Mauli, you are the one.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-center text-sm text-love-dark opacity-70">
        Click anywhere to continue
      </div>
    </div>
  );
};

export default MessagePage;
