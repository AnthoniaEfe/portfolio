import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { id: 1, color:"bg-gradient-to-tr from-black via-purple-950 to-purple-darker",  text: "Full Stack Development", description: "I build complete web applications from front to back—crafting intuitive user interfaces, robust server-side logic, and efficient databases. Whether it's a dynamic website or a complex platform, I ensure seamless performance and responsive design across all devices." },
  { id: 2, color:"bg-gradient-to-br from-black via-purple-950 to-purple-darker", text: "No-Code Development", description: "I design and build powerful websites and applications using no-code tools like Webflow, Bubble, and WordPress. This approach allows for faster turnarounds, cost-effective solutions, and scalable results—perfect for startups, landing pages, and MVPs without compromising on quality or functionality." },
  { id: 3, color:"bg-gradient-to-bl from-black via-purple-950 to-purple-darker", text: "Web (UI) Design", description: "I create clean, modern, and user-friendly interfaces that enhance user experience and reflect brand identity. With a focus on clarity, accessibility, and responsive design, I turn ideas into visually engaging layouts that work seamlessly across devices." },
  { id: 4, color:"bg-gradient-to-tl from-black via-purple-950 to-purple-darker", text: "SEO Optimization", description: "I optimize websites to rank higher on search engines through clean code, keyword strategy, fast performance, and structured content. From technical SEO to on-page improvements, I help drive organic traffic and improve visibility where it matters most." },
  { id: 5, color:"bg-gradient-to-br from-black via-purple-950 to-purple-darker", text: "Tutorship", description: "I offer personalized tutoring in web development, programming, and digital tools—tailored to each learner’s pace and goals. Whether you're a beginner or looking to deepen your skills, I provide clear explanations, practical projects, and ongoing support to help you grow confidently." },
];

export default function LayeredPinningPage() {
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
    <div id="services" className="relative w-full font-mono">
      <div className="relative w-full">
        {panelsData.map((panel, index) => (
          <section
            key={index}
            className={`panel ${panel.color} w-screen h-screen flex flex-col justify-center items-center p-8
              rounded-2xl  backdrop-blur-2xl  border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.6)] text-white mx-auto`}
          >
       
            <h2 className="drop-shadow-lg text-white">
              {panel.text}
            </h2>
      
          {panel.description &&
            <p className="max-w-2xl mx-auto text-sm text-white drop-shadow-md">
              {panel.description}
            </p>
          }
        
          </section>
        ))}
      </div>
    </div>
  );
}

