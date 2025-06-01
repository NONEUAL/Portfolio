// src/components/AnimatedItem.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Col } from 'react-bootstrap'; // IMPORTANT: Import Col here for Tag="Col"

const AnimatedItem = ({ children, animationDelay = "0s", className = "", Tag = "div", ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Determine the component to render based on the 'Tag' prop
  const ComponentToRender = Tag === "Col" ? Col : Tag;

  const animatedClasses = `${className} animated-item ${inView ? "is-visible" : ""}`;

  return (
    <ComponentToRender
      ref={ref}
      className={animatedClasses}
      style={{ transitionDelay: animationDelay }}
      {...props} 
    >
      {children}
    </ComponentToRender>
  );
};

export default AnimatedItem;