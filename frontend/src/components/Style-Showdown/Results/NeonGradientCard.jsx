"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import BlurIn from "./BlurIn";
import "./Results.css"; // Ensure you import the CSS file

const NeonGradientCard = ({
  className,
  children,
  heading,
  imageSrc,
  subtitle,
  description,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#0951BD",
    secondColor: "#F13AB1",
  },
  height = "550px", // Default height
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
  }, [heading, imageSrc, subtitle, description]);

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
        "neon-gradient-card relative z-10 w-full rounded-[var(--border-radius)] hover-shake", // Add hover-shake class
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] bg-white p-6 flex flex-col justify-center items-center", // Centering content vertically and horizontally
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-backgroundPositionSpin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-backgroundPositionSpin"
        )}
      >
        <BlurIn
          word={heading}
          className="text-3xl md:text-4xl lg:text-5xl font-bold my-10 text-center bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text"
          duration={2}
        />
        {imageSrc && (
          <div className="mb-4">
            <img src={imageSrc} alt={subtitle} className="w-full rounded" />
            <p className="text-center mt-2">{subtitle}</p>
          </div>
        )}
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
