import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ajit34555@gmail.com</h5>
            <a href="mailto:ajit34555@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messagenger</h4>
            <h5>Ajit Kumar Gupta</h5>
            <a href="https://www.facebook.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7019495949</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917019495949"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* end of contact options*/}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your EmailID"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
