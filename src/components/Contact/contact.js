import React, { useRef } from "react";
import "./contacts.css";
import FacebookIcon from "../../assets/facebookicon.png";
import InstagramIcon from "../../assets/instagramicon.png";
import LinkedinIcon from "../../assets/linkedinicon.png";
import TwitterIcon from "../../assets/twittericon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_04kdlcm",
        "template_t3yu8nb",
        form.current,
        "p0Si_5rHM2jRTgmpJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPagetitle">My Clients</h1>
        <p className="ClientDesc"> My Client Description</p>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunity
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/lokesh.bogi/" target="_blank"><img src={FacebookIcon} alt="Facebook" className="link" /></a>
            <a href="https://www.instagram.com/lokesh_bogi/" target="_blank"><img src={InstagramIcon} alt="Instagram" className="link" /></a>
            <a href="https://www.linkedin.com/in/lokesh-bogi-396ba2245/" target="_blank"><img src={LinkedinIcon} alt="Linkedin" className="link" /></a>
            <a href="https://twitter.com/lokesh_bogi" target="_blank"><img src={TwitterIcon} alt="Twitter" className="link" /></a>
            
            
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
