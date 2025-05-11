
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImage from "../assets/about-image.jpeg"  
import bannerImage from "../assets/banner-image.jpg"  

gsap.registerPlugin(ScrollTrigger);
const slides = [
  {bookmark: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage],
    tags: ['interactive design', 'responsive design', 'front end dev'],
    stack: ['HTML', 'css', 'js']
  },
  {bookmark: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage],
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },
];

export default function ProjectsSection() {
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
        scrub: 1,
        snap: 1 / (totalSections - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tween.kill();
    };
  }, []);

  const colors = ["bg-white", "bg-black", "bg-white", "bg-black", "bg-white", "bg-black", "bg-white", "bg-black"];

  return (
    <section
      id="projects"
      className="flex w-[400vw] overflow-x-hidden h-screen"
      ref={containerRef}
    >
      {colors.map((bg, i) => (
        <div
          key={i}
          ref={el => (sectionsRef.current[i] = el)}
          className={`w-screen h-screen flex items-center justify-center text-white text-5xl font-bold ${bg}`}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-screen flex-shrink-0 flex flex-col p-4 md:p-8 lg:p-10 gap-10 md:gap-12">
            
            </div>
          ))}    
        </div>
      ))}
    </section>
  );
}
