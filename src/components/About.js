import Skills from "../components/Skills";


const FileURL = "https://www.anthoniaefe.com/ANTHONIA_EFE_RESUME.pdf";

export default function About() {
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
    <div>
      <section
        id="about"
        className="md:grid grid-cols-2 items-center pt-10 md:pt-20
        md:px-16 px-8 pb-10 md:pb-10 bg-slate-100"
      >
        {/* left half */}{" "}
        <div className="col-span-1 justify-center items-center  ">
          <h2 className="heading ">ABOUT ME </h2>

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
            fugiat non nisi officia amet ullamco qui consequat minim. 
          </p>
        </div>
        {/* right half  */}
        <div className="col-span-1 justify-center items-center ">
          <Skills
            className="justify-center items-center"
          />
    
          <button
            onClick={() => {
              downloadFileAtUrl(FileURL);
            }}
            className="resume"
          >
            Download my resume
          </button>
        </div>{" "}
    
      </section>
    </div>
  );
}
