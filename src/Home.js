import Socials from "./components/Socials";
import Break from "./components/Break";
import Skills from "./components/Skills";
import avatar from "./assets/avatar_blob.svg";
import wave from "./assets/wave.png";
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
     overflow-x-hidden relative font-akaya  
      "
    >
      <main className=" md:px-12 px-8 ">
        {/* theme toggler */}
        <div
          id="theme-toggle"
          className="bg-vesta-3 rounded-2xl border-2 w-fit h-fit 
                  p-2 fixed right-4 top-2 text-sm text-white"
        >
          {" "}
          theme
        </div>

        {/* socials */}
        <div
          id="socials"
          className="bg-vesta-3 rounded-2xl border-2 w-fit h-fit flex flex-col 
                  p-2 gap-2 fixed -left-3 top-1/4"
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
              className=" w-4/6 mx-auto my-8"
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
          <Break />
        </section>

        <section id="about my-4 md:my-8 p-2 md:p-4">
          <h2 className="font-extrabold text-5xl my-2 md:my-4 ">ABOUT ME </h2>

          <p
            className="text
      "
          >
            I'm a software developer with a knack for front-end development and
            crafting eye-catching web designs. I'm all about pushing my
            boundaries in creating seamless digital experiences. Dolore proident
            nulla esse culpa non aute minim reprehenderit anim sunt. Fugiat
            culpa non ea consequat ut tempor ex sunt Lorem non labore cillum
            incididunt deserunt. Aliquip culpa labore veniam sint ad et eu
            cillum cupidatat esse do. Ipsum ullamco culpa excepteur elit velit
            qui officia occaecat laborum occaecat minim reprehenderit aliqua.
            Excepteur labore ea ullamco cupidatat cupidatat. Commodo do magna
            ipsum nostrud et ipsum minim laboris mollit ea ut mollit. Labore
            fugiat non nisi officia amet ullamco qui consequat minim. Ex ut sunt
            elit in. Consequat laboris pariatur ipsum non voluptate deserunt in
            eiusmod excepteur aliquip fugiat ex. Adipisicing tempor tempor ea
            non pariatur laborum.
          </p>
          <Skills
            className="justify-center 
  items-center mx-auto my-2"
          />
          <p className="text text-center"> Download my resume:</p>
          <button
            onClick={() => {
              downloadFileAtUrl(FileURL);
            }}
            className="font-bold text-lg md:text-2xl px-2 py-1 mb-2 md:mb-4
             md:p-2 transition duration-300 ease-in-out w-fit hover:text-white
              hover:scale-105 border-2 border-vesta-6 rounded-lg hover:bg-vesta-6"
          >
            Resume
          </button>
          <Break />
        </section>

        <section id="projects">
          {" "}
          <h2 className="font-bold text-5xl">PROJECTS </h2>
          <p className="text">
            Voluptate cupidatat eu proident enim nostrud proident elit labore
            et. Sint ullamco dolore laboris aliqua veniam ex magna. Et officia
            sunt magna deserunt irure officia sunt anim laborum enim. Anim
            exercitation tempor voluptate voluptate Lorem pariatur ullamco ea
            elit aute velit. Consectetur minim sunt cupidatat ad. Mollit mollit
            do irure est commodo eiusmod nulla qui ad incididunt ex dolore
            aliquip. Adipisicing laborum dolore deserunt cupidatat laborum do
            duis ex elit nulla aute ex. Cupidatat ad do cillum nulla aliqua amet
            velit. Cillum est Lorem pariatur amet laboris deserunt reprehenderit
            quis occaecat. Cupidatat laborum consectetur do cupidatat nisi
            reprehenderit.
          </p>
         
        </section>
      </main>

      <img src={wave} alt="" className=" h-1/6 w-full mt-2 md:mt-6 mb-0" />
      <footer className="my-0 w-full bg-atsev-1">
        <Socials />
        <p className="font-mali mt-2 md:mt-4">
          &copy; {new Date().getFullYear()} Anthonia Efe
        </p>{" "}
      </footer>
    </div>
  );
}
