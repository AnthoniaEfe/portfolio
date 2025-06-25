import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"
import * as motion from "motion/react-client"

const panelsData = [
  { id: 1,  title: "Full Stack Development", description: "I build complete web applications from front to back. Crafting intuitive user interfaces, robust server-side logic, and efficient databases whether it's a dynamic website or a complex platform, I ensure seamless performance and responsive design across all devices." },
  { id: 2, title: "No-Code Development", description: "I design and build powerful websites and applications using no-code tools like WordPress and Webflow. This approach allows for faster turnarounds, cost-effective solutions, and scalable results which are perfect for startups, landing pages, and MVPs without compromising on quality or functionality." },
  { id: 3, title: "Web (UI) Design", description: "I create clean, modern, and user-friendly interfaces that enhance user experience and reflect brand identity. With a focus on clarity, accessibility, and responsive design, I turn ideas into visually engaging layouts that work seamlessly across devices." },
  { id: 4, title: "SEO Optimization", description: "I optimize websites to rank higher on search engines through clean code, keyword strategy, fast performance, and structured content. From technical SEO to on-page improvements, I help drive organic traffic and improve visibility where it matters most." },
  { id: 5, title: "Tutorship", description: "I offer personalized tutoring in web development, programming, and digital tools—tailored to each learner’s pace and goals. I provide clear explanations, practical projects, and ongoing support to help you grow confidently." },
];

export default function Service() {
  const MotionDiv = motion.div;

  return (
    <div id="services" className="relative font-mono bg-off-white w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 md:p-0 my-20 md:my-50">

    <motion.span    
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
      }}

    className="flex justify-start items-center gap-4 my-8 md:my-14 " >
      <img src={leftBrace} alt="" className="h-10 md:h-14"/>
      
      <h2 className='text-left text-textblack text-3xl md:text-5xl '>Services I Offer</h2>
      <img src={rightBrace} alt="" className="h-10 md:h-14"/>
    </motion.span>
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto my-4 px-2 justify-between items-center">
        {panelsData.map((panel, index) => (
          <motion.div key={index} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              className="border-[1px] border-textblack rounded-2xl h-full p-6 md:p-8 gap-4 md:gap-6 flex flex-col justify-between items-start" >
              <h3 className='font-mono text-left font-semibold text-3xl'>{panel.title}</h3>
              <p>{panel.description}</p>
           </motion.div>
        ))}
      </div>
    </div>
  )
}
