import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function TimelineScroll() {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)",
      },
    })
      .to(".ball02, .text01", {}, 0.2)
      .to(".ball03, .text02", {}, 0.33)
      .to(".ball04, .text03", {}, 0.46);

    const main = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: svgRef.current,
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    main
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-[400vh] bg-black text-white font-sans">
      
      <svg
        ref={svgRef}
        className="max-w-[600px] mt-[60vh] mx-auto overflow-visible"
        viewBox="0 0 600 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="line line01" d="M 10 200 600 200" />
        <path className="line line02" d="M 10 400 600 400" />
        <path className="line line03" d="M 10 600 600 600" />
        <path className="line line04" d="M 10 800 600 800" />
        <path className="line line05" d="M 10 1000 600 1000" />

        <text className="text01" x="30" y="190">2018</text>
        <text className="text02" x="30" y="390">2019</text>
        <text className="text03" x="30" y="590">2020</text>

        <path
          className="theLine"
          d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
          fill="none"
          stroke="white"
          strokeWidth="10"
        />

        <circle className="ball ball01" r="20" cx="50" cy="100" />
        <circle className="ball ball02" r="20" cx="278" cy="201" />
        <circle className="ball ball03" r="20" cx="327" cy="401" />
        <circle className="ball ball04" r="20" cx="203" cy="601" />
      </svg>
    </div>
  );
}
