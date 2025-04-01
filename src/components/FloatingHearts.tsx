
import React from "react";

const FloatingHearts: React.FC = () => {
  // Create an array of 20 hearts with random positions and animations
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${4 + Math.random() * 6}s`,
    animationDelay: `${Math.random() * 5}s`,
    scale: 0.5 + Math.random() * 0.5,
    opacity: 0.1 + Math.random() * 0.7,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-float"
          style={{
            left: heart.left,
            bottom: "-20px",
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            opacity: heart.opacity,
          }}
        >
          <div
            className="text-love"
            style={{
              fontSize: `${20 * heart.scale}px`,
            }}
          >
            ❤️
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
