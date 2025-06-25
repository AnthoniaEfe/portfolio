import aboutImage from "../assets/about-image.jpeg"
import RippleLink from "../components/RippleLink";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"
import * as motion from "motion/react-client"

export default function About() {
  const MotionDiv = motion.div;

  return (
    <section id="about" className="justify-between mb-10 md:mb-14 w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 my-20 md:my-50 py-8 md:p-0">
      <motion.div 
      initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
        }}
        className="w-full md:w-4/5 h-full ">
        <img src={aboutImage} alt="object-cover"/>
      </motion.div>

      <div className="w-full h-full flex flex-col justify-around items-start gap-8 md:gap-12 p-0">
        <motion.span 
          initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-start items-center gap-4 my-8 " >
        <img src={leftBrace} alt="" className="h-10 md:h-14"/> 
        <h2 className='text-left text-textblack text-2xl md:text-4xl '>Get to know me</h2>
        <img src={rightBrace} alt="" className="h-10 md:h-14"/>
      </motion.span>

        <motion.p 
         initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-mono text-base">
        Hi! I'm Anthonia, a software developer with a passion for creating
        beautiful and functional websites. I have a strong foundation in
        JavaScript and React. I am currently learning new and helpful
        technologies as they roll out. When I'm not coding you'd find me
        enjoying nature with friends or playing games 😊 Feel free to{" "}
        <a
          href="#contact" className="text-purple-light hover:underline">
          reach out
        </a>{" "}
         if you have any questions or just want to chat!
        </motion.p>

      <motion.div initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}>
        <RippleLink  
              href="/T_&_C_Anthonia_Efe–Developer.pdf" 
          target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ">
          Read my Ts & Cs
          </RippleLink>
          </motion.div>
      </div>
    </section>
  );
}
