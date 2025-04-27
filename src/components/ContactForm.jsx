import React, { useState } from "react";
import { faCheck, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from "framer-motion"

const ContactForm = () => {
  const MotionDiv = motion.div;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const emailAddress = "anthoniaefe36@gmail.com";
  const subject = "PORTFOLIO SITE FORM";

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
    if (!formData.name.trim()) newErrors.firstName = "This field is required";
    if (!formData.email.trim()) newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "This field is required";
    if (!formData.consent) newErrors.consent = "To submit this form, please consent to being contacted";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) { 
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formData.message)}`;
      console.log("Form Submitted", formData);

      setSuccessMessage("Thanks for completeing the form. We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} aria-labelledby="contact__heading" noValidate>
        {/* success message */}
           {successMessage && <div aria-live="polite">
            <h2> 
              <FontAwesomeIcon icon={faCheck}/>
              Message Sent!
              </h2>
             <p>{successMessage}</p>
            </div>
            } 

            {/* form title */}
            <h1>Contact Us</h1>
   
          {/* name */}
        <div>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="name-error"
          />
          {errors.name && <p aria-live="polite">{errors.name}</p>}
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="email-error"
          />
          {errors.email && <p aria-live="polite">{errors.email}</p>}
        </div>

        {/* message */}
        <div>
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="message__error"
          ></textarea>
          {errors.message && <p aria-live="polite">{errors.message}</p>}
        </div>

        {/* consent checkbox */}
        <div>
          <div>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="consent-error"
            className="w-fit"
          />
          <label htmlFor="consent">I consent to being contacted by the team *</label> 
       </div>   
       {errors.consent && <p aria-live="polite">{errors.consent}</p>}
       </div>
        <button type="submit" className="solid-button flex">
          Submit 
           <motion.div          
              whileHover={{ 
                x:8, 
                y:-8,
                transition: { type: "spring", stiffness: 300, duration:0.5 }   
              }}
          ><FontAwesomeIcon icon={faPaperPlane} className="text-purple-light ml-5"/>
          </motion.div> 
          </button>
      </form>
    </main>
  );
};

export default ContactForm;