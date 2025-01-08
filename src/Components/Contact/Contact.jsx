import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#f5e6d3",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
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
        <label>I AGREE WITH THE PRIVACY POLICY</label>
      </div>
      <button type="submit" style={{ display: "block", marginTop: "10px" }}>
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
