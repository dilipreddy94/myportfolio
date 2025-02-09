import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Controls the popup visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ddbgw5g",  // Replace with your EmailJS Service ID
      "template_fxaxrd5",  // Replace with your EmailJS Template ID
      formData,
      "o5hRcxWUid6GLjqXm"       // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsPopupVisible(true); // Show success popup
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
      setTimeout(() => setIsPopupVisible(false), 3000); // Hide popup after 3 seconds
    })
    .catch((error) => console.error("Email Error:", error));
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Let's work together! Feel free to reach out.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Popup Confirmation Message */}
      {isPopupVisible && (
        <div className="popup">
          <p>✅ Email Sent Successfully!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
