import avatar from "../assets/Group 5a.png";
import Blobsp from "../assets/Group8.png";
import Blobs from "../assets/blobs.svg";

export default function Banner() {
  return (
    <section
      id="welcome"
      className="md:grid grid-cols-2 items-center pt-10 md:pt-20
      md:px-12 px-8 bg-slate-50  dark:bg-vesta-9"
    >
      {/* left half */}{" "}
      <div className="col-span-1  ">
        {" "}
        <img src={avatar} alt="avatar" className=" w-5/6 mx-auto " />{" "}
      </div>
      {/* right half  */}
      <div className="col-span-1 relative justify-center items-center">
        <img
          src={Blobsp}
          alt="decorative purple blobs"
          className="absolute -right-3 top-4 -z-10"
        />
        <h2
          className="font-semibold text-4xl md:text-7xl tracking-tighter mt-4 uppercase z-10
      "
        >
          Hello👋🏽{" "}
        </h2>
        <h1
          className="font-semibold text-4xl md:text-6xl my-2 tracking-tighter z-10
      "
        >
          I'm Anthonia
        </h1>
        <p
          className="text-xl md:text-2xl z-10
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
          <a href="#footer" className="hover:text-vesta-6 z-10">
            connect!
          </a>{" "}
        </p>
      </div>{" "}
    </section>
  );
}
