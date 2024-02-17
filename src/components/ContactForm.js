import React, { useState } from "react";

export default function ContactForm() {
  const emailAddress = "anthoniaefe36@gmail.com";
  let subject = "Hello from React";
  const body = "This is a test email from a React component.";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="dark:bg-vesta-9" id="contact">
      <h2 className="heading">Get In Touch With Me</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-field h-12"
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="form-field h-12 "
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          className="form-field h-48"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="form-button ">
          Send Message
        </button>
      </form>
    </div>
  );
}
