import Socials from "../components/Socials";

export default function Footer() {
  return (
    <div id="footer" className="my-0 w-full bg-atsev-1">
      <h2 className="heading">Reach Out & Get In Touch With Me</h2>
      <form className="form">
        <input
          className="form-field "
          type="text"
          placeholder="Your Name"
          name="username"
          value=""
        />

        <input
          className="form-field "
          type="email"
          placeholder="Your Email"
          name="email"
          value=""
        />

        <textarea
          class="form-field "
          placeholder="Your Message"
          name="message"
        ></textarea>

        <button type="button" class="bg-white border rounded-xl">
          Send Message
        </button>
      </form>
      <Socials />
      <p className="font-mali mt-2 md:mt-4">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}
    </div>
  );
}
