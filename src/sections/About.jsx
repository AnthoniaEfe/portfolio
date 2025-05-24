import aboutImage from "../assets/about-image.jpeg"
import {motion} from "framer-motion"
import RippleLink from "../components/RippleLink";

export default function About() {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <motion.section id="about" className="justify-between px-8 md:px-20 lg:px-24 gap-16 mb-10 md:mb-14"
    initial={{ opacity: 0, y: 50 }}     
    animate={{ opacity: 1, y: 0 }}       
    transition={{ duration: 0.5 }}  >
      <div className="w-full md:w-4/5 h-full ">
        <img src={aboutImage} alt="object-cover"/>
      </div>

      <div className="w-full h-full flex flex-col justify-around items-start gap-8 md:gap-12 p-0">
        <h2> About me </h2>
        <p className="font-mono text-base">
        Hi! I'm Anthonia, a software developer with a passion for creating
        beautiful and functional websites. I have a strong foundation in
        JavaScript and React. I am currently learning new a helpful
        technologies as they roll out. When I'm not coding you'd find me
        enjoying nature with friends or playing games 😊 Feel free to{" "}
        <a
          href="#contact" className="text-purple-light hover:underline">
          contact me
        </a>{" "}
          me if you have any questions or just want to chat!
        </p>

        <RippleLink href="/public/TandC.pdf" 
          target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ">
          Read my Ts & Cs
          </RippleLink>
      </div>
    </motion.section>
  );
}
