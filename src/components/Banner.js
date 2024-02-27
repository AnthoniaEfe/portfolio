import avatar from "../assets/Group5.png";

export default function Banner() {
  return (
    <section id="welcome" className="bg-slate-50 dark:bg-vesta-9">
      <div
        className="md:grid grid-cols-2 items-center pt-20 pb-10 md:pb-0 
      md:px-12 px-8 bg-70% bg-right bg-no-repeat md:custom-bg"
      >
        {/* left half */}{" "}
        <div className="col-span-1  ">
          {" "}
          <img src={avatar} alt="avatar" className=" w-5/6 mx-auto " />{" "}
        </div>
        {/* right half  */}
        <div className="col-span-1 justify-center items-center ">
          <div className="my-1 mx-1">
            <h2
              className="text-4xl md:text-7xl tracking-tighter mt-4
      "
            >
              Hello 👋🏽{" "}
            </h2>
            <h1
              className="text-4xl md:text-6xl my-2 tracking-tighter
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
            <p
              className="text-xl md:text-2xl 
      "
            >
              Let's{" "}
              <a href="#footer" className="hover:underline underline-offset-2">
                connect!
              </a>{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
