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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree with the privacy policy.");
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
    <div className="contactWrapper">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Mail</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Budget</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="contactConsent">
            I AGREE WITH THE PRIVACY POLICY
          </label>
        </div>
        <button type="submit" style={{ display: "block", marginTop: "10px" }}>
          SUBMIT
        </button>
      </form>

      <footer>
        <div className="footerWraper">
          <div className="footerLogo">
            <img className="logo" src={logo} alt="company's logo" />
          </div>
          <div className="footerLinks">
            <div className="links">
              <a className="footerLink" href="">
                OFFER
              </a>
              <a className="footerLink" href="">
                MY PROJECTS
              </a>
              <a className="footerLink" href="">
                CONTACT
              </a>
            </div>
            <div className="footerCopyRights">&copy; KrisAczi 2025</div>
          </div>
          <div className="socials">LinkedIn</div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
