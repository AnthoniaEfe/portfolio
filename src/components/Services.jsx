import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { id: 1, color:  "bg-off-white", textColor:  "text-textblack", text: "Layered pinning", description: "Use pinning to layer panels on top of each other as you scroll." },
  { id: 2, color: "bg-textblack", textColor:  "text-off-white", text: "ONE" },
  { id: 3, color: "bg-off-white", textColor:  "text-textblack", text: "TWO" },
  { id: 4, color: "bg-textblack", textColor:  "text-off-white", text: "THREE" },
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
    <div id="services" className="relative w-full">
   

      <div className="relative w-full">
        {panelsData.map((panel, index) => (
          <section
            key={index}
            className={`panel ${panel.color} w-full h-screen flex justify-center items-center ${panel.textColor} text-xl font-semibold text-center px-4`}
          >
            <div>
              <h1 className="text-3xl font-bold mb-4">{panel.text}</h1>
              {panel.description && <p className="max-w-2xl mx-auto">{panel.description}</p>}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
