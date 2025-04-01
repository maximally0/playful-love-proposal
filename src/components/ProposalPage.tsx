
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "./FloatingHearts";

interface ProposalPageProps {
  onYesClick: () => void;
}

const ProposalPage: React.FC<ProposalPageProps> = ({ onYesClick }) => {
  const [declined, setDeclined] = useState(false);

  const handleNoClick = () => {
    setDeclined(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-romantic p-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="text-center max-w-md z-10 animate-slide-up-fade">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-love-dark glowing">
          Mauli, will you be my girlfriend?
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button
            onClick={onYesClick}
            className="text-xl md:text-2xl px-8 py-6 bg-love hover:bg-love-dark animate-pulse-gentle"
          >
            ✅ Yes
          </Button>
          
          {!declined ? (
            <Button
              onClick={handleNoClick}
              className="text-xl md:text-2xl px-8 py-6 bg-secondary hover:bg-secondary/80 hover:animate-shake"
            >
              ❌ No
            </Button>
          ) : (
            <Button
              onClick={onYesClick}
              className="text-xl md:text-2xl px-8 py-6 bg-secondary hover:bg-secondary/80 animate-pulse-gentle"
            >
              ✅ Please?
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
