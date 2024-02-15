import avatar from "../assets/Group5.png";

export default function Banner() {
  return (
    <section
      id="welcome"
      className="md:grid grid-cols-2 items-center pt-10 md:pt-20
      md:px-12 px-8  0"
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
            className="text-5xl md:text-8xl my-2 tracking-tighter
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
    </section>
  );
}
