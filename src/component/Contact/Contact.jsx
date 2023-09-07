import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'
import { useRef } from 'react';

function Contact() {
 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_twvrh4f', 'template_ff2jq7f', form.current, 'UzGAn61aPiVdOL-lL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon"/>
            <h4>Email</h4>
            {/* <h5>abc@gmail.com</h5> */}
            <a href="mailto:faizanaliakbar125@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon"/>
            <h4>Messenger</h4>
            {/* <h5>Faizan Ali Akbar</h5> */}
            {/* <a href='https://m.me/put subname from url herefacebook.com'>Send a message</a> */}
            <a href="https://facebook.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon"/>
            <h4>Whatsapp</h4>
            {/* <h5>+923037447537</h5> */}
            <a href="https://api.whatsapp.com/send?phone=+923037447537">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
