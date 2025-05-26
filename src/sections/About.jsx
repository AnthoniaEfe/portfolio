import aboutImage from "../assets/about-image.jpeg"
import RippleLink from "../components/RippleLink";

export default function About() {

  return (
    <section  id="about" className="justify-between px-8 md:px-20 lg:px-24 gap-16 mb-10 md:mb-14"
 >
          <div className="w-full md:w-4/5 h-full ">
        <img src={aboutImage} alt="object-cover"/>
      </div>

      <div className="w-full h-full flex flex-col justify-around items-start gap-8 md:gap-12 p-0">
        <h2> About me </h2>
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
