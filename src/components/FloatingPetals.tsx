
import React from "react";

const FloatingPetals: React.FC = () => {
  // Create an array of petals with random positions and animations
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${7 + Math.random() * 13}s`,
    animationDelay: `${Math.random() * 5}s`,
    scale: 0.6 + Math.random() * 0.4,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: petal.left,
            top: "-20px",
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        >
          <div
            style={{
              fontSize: `${20 * petal.scale}px`,
            }}
          >
            🌸
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
