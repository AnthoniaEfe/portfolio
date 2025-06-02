import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anthoniaefe from "../assets/anthonia.png"
import kiara from "../assets/kiara.png" 
import frame from "../assets/frame.png"
import calc from "../assets/calc.png"
import ecommerce from "../assets/ecommerce.png"
import contact from "../assets/contact.png"
import RippleLink from "../components/RippleLink";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
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

export default function Project() {
  useEffect(() => {
    const panels = gsap.utils.toArray(".stack-panel");

    panels.forEach((panel, i) => {
      gsap.fromTo(
        panel,
        { y: 100, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "10% 40%",
            end: "100% 40%",
            scrub: 1,
            snap: {
              snapTo: 1,
              duration: 0.5,
              ease: "power1.inOut",
            },
            id: `panel-${i}`,  
            pin: i === panels.length - 1 ? false : true,
            pinSpacing: false,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div id="projects" className="relative min-h-screen w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 md:p-0 my-20 md:my-50">

      <span className="flex justify-start items-center gap-4" >
        <img src={leftBrace} alt="" className="h-10 md:h-14"/>
        
        <h2 className='text-left text-textblack text-3xl md:text-5xl '>Some Projects</h2>
        <img src={rightBrace} alt="" className="h-10 md:h-14"/>
      </span>

      {panelsData.map(({ id, image, title, description, tags, repoLink, siteLink }) => (
        <section
          key={id}
          className="stack-panel w-full md:w-[80vw] h-[80vh] mx-auto rounded-3xl overflow-hidden shadow-xl/40 text-shadow-xs relative"
        >
          {/* Background Image */}
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Solid Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

          {/* Text Content */}
          <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center p-8 gap-6 md:gap-8 text-off-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h2>
            <p className="text-base md:text-lg font-medium max-w-2xl drop-shadow-lg">
              {description}
            </p>
            <p className="text-purple-light text-sm drop-shadow-lg">{tags.join(" | ")}</p>

            <div className="flex flex-row gap-4 items-center justify-center w-fit">
      {repoLink && (
        <RippleLink href={repoLink} target="_blank">
          <p className="text-xs md:text-sm">View Repo</p>
        </RippleLink>
      )}
      <RippleLink href={siteLink} target="_blank">
        <p className="text-xs md:text-sm">View Site</p>
      </RippleLink>
    </div>
          </div>
        </section>
      ))}
    </div>
  );
}
