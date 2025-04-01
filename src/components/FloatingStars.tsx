
import React from "react";

const FloatingStars: React.FC = () => {
  // Create an array of 30 stars with random positions and animations
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${2 + Math.random() * 4}s`,
    scale: 0.3 + Math.random() * 0.7,
    opacity: 0.1 + Math.random() * 0.9,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse-gentle"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
            opacity: star.opacity,
          }}
        >
          <div
            style={{
              fontSize: `${12 * star.scale}px`,
            }}
          >
            ✨
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingStars;
