import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingWave() {
  const charsRef = useRef([]);

  useEffect(() => {
    gsap.from(charsRef.current, {
      y: 16,
      opacity: 0,
      stagger: {
        each: 0.08,
        repeat: -1,
        yoyo: true,
      },
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, []);

  const text = ".....";

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className="text-textblack text-6xl font-bold flex gap-1">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (charsRef.current[i] = el)}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
