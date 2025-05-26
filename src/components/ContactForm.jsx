import { useState } from "react";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "This field is required";
    if (!formData.consent) newErrors.consent = "Please consent to being contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      setSuccessMessage("");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Send to admin notification
      await emailjs.send(
        "service_8v47cxw",      
        "template_0zugojr",    
        templateParams,
        "6xxbBwxZHskQC7Ch_" 
      );

      // Send auto-reply to the user
      await emailjs.send(
       "service_8v47cxw",      
        "template_um55u3r",    
        templateParams,
        "6xxbBwxZHskQC7Ch_"  
      );

      setSuccessMessage("Thanks for completing the form. I'll be in touch with you soon 🙂");

      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("Email error:", err);
      alert("Failed to send email.");
    }
  }
  return (
    <main>
      <form onSubmit={handleSubmit} aria-labelledby="contact__heading" noValidate>
   
   <div className="flex flex-row items-center justify-between gap-4 md:gap-8 w-full ">
          {/* name */}
        <div className="w-full" >
          <label htmlFor="name">Full Name </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="name-error"
            required
          />
          {errors.name && <p aria-live="polite" className="error-message">{errors.name}</p>}
        </div>

        {/* email */}
        <div className="w-full">
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="email-error"
                 required
          />
          {errors.email && <p aria-live="polite" className="error-message">{errors.email}</p>}
        </div>
      </div>
        {/* message */}
        <div>
          <label htmlFor="message"> Message </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="message__error"
            required
          ></textarea>
          {errors.message && <p aria-live="polite" className="error-message">{errors.message}</p>}
        </div>

        {/* consent checkbox */}
        <div >
          <div className="flex flex-row items-center gap-4 ">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="consent-error"
            className="w-fit m-0 bg-purple-light border-purple-light rounded focus:ring-purple-light 
            focus:ring-1 text-off-white checked:bg-purple-light"
          />
          <label htmlFor="consent" >I consent to being contacted </label> 
       </div>   
       {errors.consent && <p aria-live="polite" className="error-message">{errors.consent}</p>}
       </div>


             {/* success message */}
           {successMessage && <div aria-live="polite" className="success-message">
              <h3 className="text-2xl">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-3xl md:text-4xl text-[#09E85E]"/>
                Message Sent!
              </h3>
              <p>{successMessage}</p>
            </div>
            }

        <button type="submit" className="w-fit px-6 md:px-8 py-4 md:py-6 overflow-hidden font-semibold text-textblack hover:bg-textblack flex transition-all
         bg-off-white border-[1px] border-textblack rounded-full group ${className} hover:text-off-white duration-300">
         Send Message
          <FontAwesomeIcon icon={faPaperPlane} className="text-purple-light ml-5"/>
          </button>
      </form>
    </main>
  );
};

export default ContactForm;