import Skills from "../components/Skills";

export default function About() {
  return (
    <div
      className=" pt-10 md:pt-20
    md:px-16 px-8 pb-10 md:pb-10 dark:bg-vesta-9"
      id="skills"
    >
      <h2 className="heading"> SKILLS & EXPERIENCES </h2>
      <section className="md:grid grid-cols-2 items-center gap-0  ">
        {/* left half */}{" "}
        <div className="col-span-1 justify-center items-center  ">
          <p className="text ">
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
        <div className="col-span-1 flex justify-center items-center mb-8 ">
          <Skills className="justify-center items-center " />
        </div>{" "}
      </section>{" "}
    </div>
  );
}
