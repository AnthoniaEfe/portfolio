// HorizontalScroll.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/image.png"

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    const totalSections = sections.length;

    const tween = gsap.to(sections, {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        snap: 1 / (totalSections - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tween.kill();
    };
  }, []);

  const colors = [ "bg-off-white", "bg-textblack", "bg-off-white", "bg-textblack", "bg-off-white"];
  const textColors = [ "text-textblack", "text-off-white", "text-textblack", "text-off-white", "text-textblack"];

  const slides = [
  {title: "project 0",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', 'front end dev'],
    stack: ['HTML', 'css', 'js'],
    image: image
  },
  {title: "project 1",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },
  {title: "project 2",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },
  {title: "project 3",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },
  {title: "project 4",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },
];


  return (
    <div id="projects"
      className="flex w-[500vw] h-screen"
      ref={containerRef}
    >
      {colors.map((bg, i) => (
        <section
          key={i}
          ref={el => (sectionsRef.current[i] = el)}
          className={`w-screen h-screen flex flex-col gap-8 items-center justify-center ${textColors[i]} ${bg}
          `}
        >
         <h2>{slides[i].title}</h2>
         <p>{slides[i].description}</p>
         <p className="text-purple-light">{slides[i].tags}</p>
         <img src={slides[i].image} alt=""/>
        </section>
      ))}
    </div>
  );
}
