import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-stone-50   dark:bg-vesta-9">
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
    </div>
  );
}
