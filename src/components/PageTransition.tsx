
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  visible: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, visible }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
