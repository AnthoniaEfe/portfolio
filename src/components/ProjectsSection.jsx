import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { title: "Portfolio Website", description: "Built with React and Tailwind." },
  { title: "Weather App", description: "Uses OpenWeatherMap API." },
  { title: "Blog Platform", description: "Custom CMS with Next.js." },
  { title: "E-commerce Store", description: "Built with Stripe and Sanity." },
  { title: "Chat App", description: "Built with Firebase and React." },
];

const ProjectsSection = () => {
  const MotionDiv=motion.div;
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Translate horizontal container based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  // Convert mouse wheel scroll to horizontal scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section ref={containerRef} className="h-[300vh] bg-gray-100 px-4 py-20">

      <div className="relative top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="h-full flex"
        >
          <div
            ref={scrollContainerRef}
            className="flex h-full w-screen overflow-x-scroll snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-screen h-[80vh] bg-white p-8 rounded-xl shadow-md flex flex-col justify-center items-center"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-center">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
