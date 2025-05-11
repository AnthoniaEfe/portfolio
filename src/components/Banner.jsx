import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TypewriterScroll() {
  const sectionRef = useRef(null);
  const [text, setText] = useState("");
  const message = "Hii, I'm Anthonia Efe!";
  const speed = 100; // typing speed
  const delay = 300; // delay after scroll in

  useEffect(() => {
    let timeout;
    let index = 0;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true, // trigger only once
      onEnter: () => {
        timeout = setTimeout(() => {
          type();
        }, delay);
      },
    });

    function type() {
      if (index < message.length) {
        setText((prev) => prev + message.charAt(index));
        index++;
        timeout = setTimeout(type, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
     id="banner"
      ref={sectionRef}
      className="h-[60vh] lg:h-screen flex items-center justify-center bg-off-white"
    >
      <h1 className="text-textblack text-xl md:text-2xl lg:text-5xl  font-mono whitespace-nowrap border-r-2 border-white pr-2 animate-blink text-wrap">
        {text}
      </h1>
    </section>
  );
}
