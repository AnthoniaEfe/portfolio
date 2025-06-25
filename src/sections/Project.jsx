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
import * as motion from "motion/react-client"

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
  const MotionDiv = motion.div;

  return (
    <div id="projects" className="relative min-h-screen w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 md:p-0 my-20 md:my-50">

         <motion.span    
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
            }} className="flex justify-start items-center gap-4" >
        <img src={leftBrace} alt="" className="h-10 md:h-14"/>
        
        <h2 className='text-left text-textblack text-3xl md:text-5xl '>Some Projects</h2>
        <img src={rightBrace} alt="" className="h-10 md:h-14"/>
      </motion.span>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto my-4 px-2 justify-between items-center">
      {panelsData.map(({ index, title, description, tags, repoLink, siteLink }) => (
        <motion.div
          key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
          className=" w-full border-[1px] border-textblack rounded-3xl mx-auto overflow-hidden relative"
        >
          {/* Background Image */}
          {/* <img
            src={image}
            className="absolute inset-0 w-full object-cover z-0"
          /> */}

          {/* Solid Overlay */}
          {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" /> */}

          {/* Text Content */}
          <div className="relative z-20 h-full w-full flex flex-col items-start justify-center p-8 gap-4 text-textblack">
            <h2 className="text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-base font-medium max-w-2xl mb-2">
              {description}
            </p>
            <p className="text-purple-light text-sm">{tags.join(" | ")}</p>

            <div className="flex flex-row gap-4 items-center justify-center w-fit mt-4">
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
        </motion.div>
      ))}
       </section>
    </div>
  );
}
