import Socials from "./components/Socials";
import avatar from "./assets/avatar_blob.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Gmail } from "./assets/gmail.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";
import { ReactComponent as Github } from "./assets/github.svg";

const FileURL = "https://www.anthoniaefe.com/ANTHONIA_EFE_RESUME.pdf";

export default function Home() {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div
      className=" 
     w-screen h-screen text-vesta-3 bg-cover overflow-y-auto
     overflow-x-hidden relative md:px-12 px-8 font-akaya  
      "
    >
      {/* theme toggler */}
      <div
        id="theme-toggle"
        className="bg-vesta-3 rounded-2xl border-2 w-fit h-fit 
                  p-2 fixed right-4 top-2 text-sm text-white"
      > theme</div>

      {/* socials */}
      <div
        id="socials"
        className="bg-vesta-3 rounded-2xl border-2 w-fit h-fit flex flex-col 
                  p-2 fixed -left-3 top-1/4"
      >
        <a
          href="https://twitter.com/Anthonia_Efe"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="socials " />
        </a>

        <a
          href="https://www.linkedin.com/in/anthoniaefe/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="socials " />
        </a>

        <a
          href="https://github.com/AnthoniaEfe"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="socials " />
        </a>

        <a
          href="mailto:anthoniaefe36@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Gmail className="socials " />
        </a>
      </div>
      {/* welcome section */}
      <section id="welcome" className="grid grid-cols-2 items-center">
        {/* left half */}{" "}
        <div className="col-span-1 justify-center items-center  ">
          {" "}
          <img
            src={avatar}
            alt="avatar"
            className=" 
            transform hover:scale-105 hover-md:text-5xl 
            sticky transition-transform col-span-1 w-4/6 mx-auto my-8"
          />{" "}
        </div>
        {/* right half  */}
        <div className="col-span-1 justify-center items-center ">
          <div className="my-1 mx-1">
            <h2
              className="text-7xl font-blobbychug tracking-tighter mt-4
      "
            >
              Hi there,
            </h2>
            <h1
              className="text-8xl my-2 font-blobbychug tracking-tighter
      "
            >
              I'm Anthonia
            </h1>
            <p
              className="text-xl md:text-2xl 
      "
            >
              {" "}
              A front end developer and web designer.
            </p>
          </div>
        </div>{" "}
        <hr className="w-4/6 h-1 mx-auto"/>
      </section>
      <section id="about my-4 md:my-8 p-2 md:p-4">
        <h2 className="font-extrabold text-5xl my-2 md:my-4 ">
          ABOUT ME{" "}
        </h2>

        <p
          className="text-xl md:text-2xl mx-auto text-justify w-5/6 my-6 md:mt-0 
      "
        >
          I'm a software developer with a knack for front-end development and
          crafting eye-catching web designs. I'm all about pushing my boundaries
          in creating seamless digital experiences.
        </p>
        <button
          onClick={() => {
            downloadFileAtUrl(FileURL);
          }}
          className="font-bold flex text-lg md:text-2xl flex-row-reverse px-2 py-1
             md:p-2 transition duration-300 ease-in-out sticky
            w-fit hover:scale-105 border-2 border-vesta-6 rounded-lg hover:bg-vesta-6"
        >
          Resume
        </button>
        <hr />
      </section>

      <section id="projects">
        {" "}
        <h2 className="font-bold text-5xl">PROJECTS </h2>
        <hr />
      </section>
      <footer className="mb-0 mt-auto w-full  ">
        <Socials />
        <p className="font-mali mt-2">
          &copy; {new Date().getFullYear()} Anthonia Efe
        </p>{" "}
      </footer>
    </div>
  );
}
