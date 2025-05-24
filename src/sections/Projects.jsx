import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anthoniaefe from "../assets/anthonia.png"
import kiara from "../assets/kiara.png" 
import frame from "../assets/frame.png"
import calc from "../assets/calc.png"
import ecommerce from "../assets/ecommerce.png"
import contact from "../assets/contact.png"
import RippleLink from "../components/RippleLink";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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
  {title: "Kiara Properties Ltd",
    description: "Informational website for Kiara Properties Ltd, premier real estate agency in Abuja, built on WordPress with Elementor page builder.",
    tags: [' Wordpress', 'Animation', 'Responsive design', 'No Code Dev'],
    image: kiara,
    siteLink: "https://kiarapropertiesltd.com/",
   
  },
  {title: "The Frame Agency",
    description: "Clone of The Frame Agency informational website, all female marketing agency, built on WordPress with Elementor page builder.",
    tags: ['Headless Wordpress','Animation', 'Responsive design', 'No Code Dev'],
    image: frame,
    siteLink: "https://dev-the-frame-agency.pantheonsite.io/",
  },
  {title: "Anthonia Efe Portfolio",
    description: "Personal professional portfolio for Anthonia Efe, software developer. Built with ReactJS, styled with TailwindCSS and animations with GSAP & Motion.  ",
    tags: ['React','TailwindCSS', 'GSAP', 'Motion', 'Responsive Design',  ],
    image: anthoniaefe,
    siteLink: "https://www.anthoniaefe.com/",
    repoLink : "https://github.com/AnthoniaEfe/portfolio"
  },
    {title: "E-commerce Product Page component",
    description: "Reusable E-commerce product page component with lightbox feature built with ReactJS and styles with TailwindCSS",
    tags: ['React','TailwindCSS','Responsive Design',  ],
    image: ecommerce,
    siteLink: "https://ecommerce-product-page-lovat-three.vercel.app/",
    repoLink : "https://github.com/AnthoniaEfe/ecommerce-product-page"
  },
  {title: "Tip Calculator Component",
    description: "Reusable tip calculator component build with ReactJS and styled with SCSS",
    tags: ['ReactJS', 'SCSS', 'Responsive Design', ],
    image: calc,
    siteLink: "https://tip-calc-app-wheat.vercel.app/",
    repoLink : "https://github.com/AnthoniaEfe/tip_calc_app"
  },
  {title: "Contact Form Card ",
    description: "Reusable contact form card with lightbox feature built with ReactJS and styles with TailwindCSS",
    tags: ['React','TailwindCSS','Responsive Design',  ],
    image: contact,
    siteLink: "https://contact-form-card-one.vercel.app/",
    repoLink : "https://github.com/AnthoniaEfe/contact-form-card"
  },
];


  return (
    <div id="projects"
      className={`flex w-[${slides.length * 100}vw] h-screen`} 
      ref={containerRef}
    >
   {slides.map((slide, i) => (
  <section
    key={i}
    ref={el => (sectionsRef.current[i] = el)}
    className={`w-screen min-h-screen md:h-screen flex flex-col gap-6 items-center justify-center ${textColors[i]} ${colors[i]} text-center px-6 pb-10 pt-16`}
  >
    <img src={slide.image} alt="" className="object-cover max-h-[45%]" />
    <h2>{slide.title}</h2>
    <p className="w-full md:max-w-[70%] text-base">{slide.description}</p>
    <p className="text-purple-light text-sm">{slide.tags.join(" | ")}</p>

    <div className="flex flex-row gap-4 items-center justify-center w-fit">
      {slide.repoLink && (
        <RippleLink href={slide.repoLink} target="_blank">
          <p className="text-xs md:text-sm">View Repo</p>
        </RippleLink>
      )}
      <RippleLink href={slide.siteLink} target="_blank">
        <p className="text-xs md:text-sm">View Site</p>
      </RippleLink>
    </div>
  </section>
))}

    </div>
  );
}
