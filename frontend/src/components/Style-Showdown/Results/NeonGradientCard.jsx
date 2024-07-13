// src/components/Results/NeonGradientCard.jsx

"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#0951BD",
    secondColor: "#F13AB1",
  },
  height = '550px', // Default height
  ...props
}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      const updateDimensions = () => {
        if (containerRef.current) {
          const { offsetWidth, offsetHeight } = containerRef.current;
          setDimensions({ width: offsetWidth, height: offsetHeight });
        }
      };
  
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
  
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }, []);
  
    useEffect(() => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    }, [children]);
  
    return (
      <div
        ref={containerRef}
        style={{
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${dimensions.width / 3}px`,
          height: height, // Set the height here
        }}
        className={classNames(
          "relative z-10 w-full rounded-[var(--border-radius)]",
          className,
        )}
        {...props}
      >
        <div
          className={classNames(
            "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] bg-white p-6",
            "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
            "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
            "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
            "before:animate-backgroundPositionSpin",
            "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
            "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
            "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
            "after:animate-backgroundPositionSpin",
          )}
        >
          {children}
        </div>
      </div>
    );
  };
  
  export { NeonGradientCard };