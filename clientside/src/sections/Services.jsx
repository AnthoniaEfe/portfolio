import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage1 from "../assets/bg-image-1.jpg"
import bgImage2 from "../assets/bg-image-2.jpg"
import bgImage3 from "../assets/bg-image-3.jpg"
import bgImage4 from "../assets/bg-image-4.jpg"
import bgImage5 from "../assets/bg-image-5.jpg"

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { id: 1, bgImage: bgImage1,  text: "Full Stack Development", description: "I build complete web applications from front to back—crafting intuitive user interfaces, robust server-side logic, and efficient databases. Whether it's a dynamic website or a complex platform, I ensure seamless performance and responsive design across all devices." },
  { id: 2, bgImage: bgImage2, text: "No-Code Development", description: "I design and build powerful websites and applications using no-code tools like Webflow, Bubble, and WordPress. This approach allows for faster turnarounds, cost-effective solutions, and scalable results—perfect for startups, landing pages, and MVPs without compromising on quality or functionality." },
  { id: 3, bgImage: bgImage3, text: "Web (UI) Design", description: "I create clean, modern, and user-friendly interfaces that enhance user experience and reflect brand identity. With a focus on clarity, accessibility, and responsive design, I turn ideas into visually engaging layouts that work seamlessly across devices." },
  { id: 4, bgImage: bgImage4, text: "SEO Optimization", description: "I optimize websites to rank higher on search engines through clean code, keyword strategy, fast performance, and structured content. From technical SEO to on-page improvements, I help drive organic traffic and improve visibility where it matters most." },
  { id: 5, bgImage: bgImage5, text: "Tutorship", description: "I offer personalized tutoring in web development, programming, and digital tools—tailored to each learner’s pace and goals. Whether you're a beginner or looking to deepen your skills, I provide clear explanations, practical projects, and ongoing support to help you grow confidently." },
];

export default function Services() {
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray(".panel");

  if (!panels || !Array.isArray(panels) || panels.length === 0) return;

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: i === panels.length - 1 ? false : true,
      pinSpacing: false,
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

 return (
  <div id="services" className="relative w-full font-mono bg-off-white">
    <div className="relative w-full bg-off-white">
      {panelsData.map((panel, index) => (
        <section
          key={index}
          className={`panel w-screen h-screen flex flex-col justify-center items-center p-8 bg-cover bg-center bg-no-repeat
            rounded-3xl md:rounded-4xl backdrop-blur-2xl border-white/20  text-white mx-auto`}
          style={{ backgroundImage: `url(${panel.bgImage})` }} 
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs rounded-3xl md:rounded-4xl " />

          <h1 className="drop-shadow-lg text-white z-10">
            {panel.text}
          </h1>

          {panel.description && (
            <p className="max-w-2xl mx-auto text-base text-center text-white drop-shadow-md z-10 ">
              {panel.description}
            </p>
          )}
        </section>
      ))}
    </div>
  </div>
);
}