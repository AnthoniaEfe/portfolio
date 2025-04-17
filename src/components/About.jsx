export default function About() {
  return (
    <div
      className=" pt-10 md:pt-20 md:px-16 px-8 pb-10 md:pb-10"
      id="about"
    >
      <h2 className=""> Get to know me </h2>
      <hr className="" />
      <section className="flex flex-col justify-center items-center md:grid grid-cols-2 gap-4 md:gap-10 ">
        {/* left half */}{" "}
        <div className="col-span-1 flex justify-center md:justify-end items-end content-end  ">
          <p className=" ">
            Hi! I'm Anthonia, a software developer with a passion for creating
            beautiful and functional websites. I have a strong foundation in
            JavaScript and React. I am currently learning new a helpful
            technologies as they roll out. When I'm not coding you'd find me
            enjoying nature with friends or playing games 😊 Feel free to{" "}
            <a href="#contact" className="text-blue-500">
              email
            </a>{" "}
            me if you have any questions or just want to chat!
          </p>
        </div>
        {/* right half  */}
        <div
   
          className="col-span-1 grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-y-12 md:gap-x-8 sm:mb-4 md:mb-2
            w-10/12 md:w-8/12  mx-auto md:mx-0 py-2 justify-around items-center"
        >
          {" "}
    
        </div>{" "}
        <div className="col-span-2 mt-8 mb-4 md:my-4">
          <a
            className="resume"
            href="https://drive.google.com/file/d/19pht_UMUtU_kwSKTubTdYx6hQu_jIMor/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
        </div>
      </section>{" "}
    </div>
  );
}
