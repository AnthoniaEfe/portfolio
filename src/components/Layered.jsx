import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {title: "project 0",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', 'front end dev'],
    stack: ['HTML', 'css', 'js']
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

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
       
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3500",
       markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // const bgimages = [image, image2, image3]

  return (
    <div className="w-[600vw] h-screen flex" ref={containerRef}>
      {slides.map((slide, i) => (
        <section
          key={i}
          ref={el => (sectionRefs.current[i] = el)}
          className={`panel w-screen h-screen flex items-center justify-center text-white text-3xl font-bold 
          bg-textblack `}
       
        >
          {slide.title}
        </section>
      ))}
    </div>
  );
}
