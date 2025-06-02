import aboutImage from "../assets/about-image.jpeg"
import RippleLink from "../components/RippleLink";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"

export default function About() {

  return (
    <section  id="about" className="justify-between my-12 mb-10 md:mb-14 w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 py-6 md:p-0">
      <div className="w-full md:w-4/5 h-full ">
        <img src={aboutImage} alt="object-cover"/>
      </div>

      <div className="w-full h-full flex flex-col justify-around items-start gap-8 md:gap-12 p-0">

        <span className="flex justify-start items-center gap-4 my-8 " >
        <img src={leftBrace} alt="" className="h-10 md:h-14"/> 
        <h2 className='text-left text-textblack text-2xl md:text-4xl '>Get to know me</h2>
        <img src={rightBrace} alt="" className="h-10 md:h-14"/>
      </span>

        <p className="font-mono text-base">
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
        </p>

        <RippleLink href="/T_&_Anthonia_Efe–Developer.pdf" 
          target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ">
          Read my Ts & Cs
          </RippleLink>
      </div>
    </section>
  );
}
