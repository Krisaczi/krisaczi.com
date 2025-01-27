import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../Images/KrisAcziV4.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    budget: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      honeypot: e.target.form.honeypot.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree with the privacy policy.");
      return;
    }
    if (formData.honeypot) {
      alert("Bot detected, no email sent.");
      return;
    }

    const templateParams = {
      name: formData.name,
      mail: formData.mail,
      budget: formData.budget,
      message: formData.message,
    };

    emailjs
      .send(
        "service_bhgwb0m",
        "template_y5yei1x",
        templateParams,
        "muuAVIAz2lz-JcD12"
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email. Error:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div id="CONTACT" className="contactContainer">
      <div className="contactWrapper">
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="contactInputField">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contactInputField">
            <label>Mail</label>
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contactInputField">
            <label>Budget</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="text" name="honeypot" style={{ display: "none" }} />
          </div>
          <div className="contactMessageWrapper">
            <label>Message</label>
            <textarea
              className="contactMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="10"
            />
          </div>
          <div className="consentWrapper">
            <input
              className="consentChecbox"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="contactConsent">I AM NOT A ROBOT</label>
            <button
              className="button"
              type="submit"
              style={{ display: "block", marginTop: "10px" }}
            >
              SUBMIT
            </button>
          </div>
        </form>

        <footer>
          <div className="footerWraper">
            <div className="footerLogo">
              <a href="#MAIN">
                <img className="logo" src={logo} alt="copmany's logo" />
              </a>
            </div>
            <div className="footerLinks">
              <div className="links">
                <a className="footerLink" href="#OFFER">
                  OFFER
                </a>
                <a className="footerLink" href="#MY PROJECTS">
                  MY PROJECTS
                </a>
                <a className="footerLink" href="#CONTACT">
                  CONTACT
                </a>
              </div>
              <div className="footerCopyRights">&copy; KrisAczi 2025</div>
            </div>
            <div className="socials"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;
