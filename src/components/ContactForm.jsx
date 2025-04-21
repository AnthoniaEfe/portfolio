import React, { useState } from "react";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = () => {
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
      <form className="contact__form" onSubmit={handleSubmit} aria-labelledby="contact__heading" noValidate>
        {/* success message */}
           {successMessage && <div className="success__message" aria-live="polite">
            <h2> 
              <FontAwesomeIcon icon={faCheck}/>
              Message Sent!
              </h2>
             <p>{successMessage}</p>
            </div>
            } 

            {/* form title */}
            <h1 id="contact__heading">Contact Us</h1>
   
          {/* name */}
        <div className="form__group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="name-error"
          />
          {errors.name && <p className="error__message" id="name__error" aria-live="polite">{errors.name}</p>}
        </div>

        {/* email */}
        <div className="form__group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="email-error"
          />
          {errors.email && <p className="error__message" id="email__error" aria-live="polite">{errors.email}</p>}
        </div>

        {/* message */}
        <div className="form__group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="message__error"
          ></textarea>
          {errors.message && <p className="error__message" id="message-error" aria-live="polite">{errors.message}</p>}
        </div>

        {/* consent checkbox */}
        <div className="form__group ">
          <div className="checkbox__group">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            aria-required="true"
            aria-describedby="consent-error"
          />
          <label htmlFor="consent">I consent to being contacted by the team *</label> 
       </div>   
       {errors.consent && <p className="error__message" id="consent-error" aria-live="polite">{errors.consent}</p>}
       </div>
        <button type="submit" className="submit__button">Submit</button>
      </form>
    </main>
  );
};

export default ContactForm;