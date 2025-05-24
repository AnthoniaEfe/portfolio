import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Screenshot from "../assets/Screenshot (1).png";
import Screenshot2 from "../assets/Screenshot (2).png";
import Screenshot3 from "../assets/Screenshot (3).png";
import Screenshot5 from "../assets/Screenshot (4).png";
import Screenshot4 from "../assets/Screenshot2.png";
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
  {title: "E-commerce Product Page",
    description: "Users should be able to: View the optimal layout for the site depending on their device's screen size, See hover states for all interactive elements on the page, Open a lightbox gallery by clicking on the large product image, Switch the large product image by clicking on the small thumbnail images, Add items to the cart, View the cart and remove items from it",
    tags: ['interactive design', 'responsive design', 'front end dev'],
    stack: ['React', 'Tailwindcss'],
    image: Screenshot,
    siteLink: "https://chatgpt.com/",
    repoLink : "https://github.com/AnthoniaEfe"
  },
  {title: "Results Summary Component",
    description: "The challenge Users should be able to: View the optimal layout for the interface depending on their device's screen size, See hover and focus states for all interactive elements on the page bonus: Use the local JSON data to dynamically populate the content",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js'],
    image: Screenshot2,
    siteLink: "https://chatgpt.com/",
    repoLink : "https://github.com/AnthoniaEfe"
  },
  {title: "project 2",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js'],
    image: Screenshot3,
    siteLink: "https://chatgpt.com/",
    repoLink : "https://github.com/AnthoniaEfe"
  },
  {title: "project 3",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js'],
    image: Screenshot4,
    siteLink: "https://chatgpt.com/",
    repoLink : "https://github.com/AnthoniaEfe"
  },
  {title: "project 4",
    description: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js'],
    image: Screenshot5,
    siteLink: "https://chatgpt.com/",
    repoLink : "https://github.com/AnthoniaEfe"
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
          className={`w-screen min-h-screen md:h-screen flex flex-col gap-6 items-center justify-center ${textColors[i]} ${bg}
          text-center px-6 pb-10 pt-16 `}
        >     
          <img src={slides[i].image} alt="" className="object-cover max-h-[45%]"/>
          <h2>{slides[i].title}</h2>
          <p className="w-full md:max-w-[70%] text-base">{slides[i].description}</p>
          <p className="text-purple-light text-sm ">{slides[i].tags.join(" | ")} </p>

          <div className="flex flex-row gap-4 items-center justify-center w-fit">
            <RippleLink href={slides[i].repoLink} target="_blank"> 
             <p className="text-xs md:text-sm">View Repo</p>
            </RippleLink >  
            <RippleLink href={slides[i].siteLink} target="_blank">  
             <p className="text-xs md:text-sm">View Site</p> 
            </RippleLink> 
          </div>
      
        </section>
      ))}
    </div>
  );
}
