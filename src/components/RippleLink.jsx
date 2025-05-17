import { useRef } from "react";
import { gsap } from "gsap";

const RippleLink = ({ href, children, className = "" }) => {
  const linkRef = useRef(null);
  const fillRef = useRef(null);

  const handleMouseEnter = (e) => {
    const link = linkRef.current;
    const fill = fillRef.current;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(fill, { x, y });
    gsap.to(fill, {
      scale: 50,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(fillRef.current, {
      scale: 0,
      duration: 0.3,
      ease: "power3.inOut",
    });
  };

  return (
    <a
      href={href}
      ref={linkRef}
      className={` relative inline-block px-8 py-6 overflow-hidden font-semibold text-textblack
         bg-off-white border-[1px] border-textblack rounded-full group ${className} hover:text-off-white transition-colors duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={fillRef}
        className="absolute inset-0 w-4 h-4 bg-textblack mx-10 rounded-full scale-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transformOrigin: "center",  transition: "transform 0.3s, opacity 1s", }}
      />
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default RippleLink;
