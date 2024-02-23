import React, { useState } from "react";

export default function ContactForm() {
  const emailAddress = "anthoniaefe36@gmail.com";
  let subject = "SERVICE INQUIRY";
  const body = "Hello, I have an inquiry about ...";

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

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className=" pt-10 md:pt-20
    md:px-16 px-8 pb-10 md:pb-10 dark:bg-vesta-9"
      id="contact"
    >
      <h2 className="heading">Get in touch with me</h2>
      <hr className="divider" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-field h-12"
          type="text"
          placeholder="Really Cool Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-field h-12 "
          type="email"
          placeholder="reallycool@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-field h-48"
          placeholder="Really cool message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="form-button ">
          Send Message
        </button>
      </form>
    </div>
  );
}
