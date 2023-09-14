import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setFormValid] = useState(true);

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!userName || !subject || !email || !message) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
    setDone(false);
  };
  const handleSubmit = (event) => {
    console.log("handleSubmit ran");

    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setUserName("");
    setSubject("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_schz4ke",
        "template_ft0g47p",
        formRef.current,
        "user_L0QJ5c7O5vNc4tkRs5OsW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-container-wrapper">
          <div className="contact-container-wrapper-left">
            <h1 className="contact-container-wrapper-left-title">
              {" "}
              My Contact{" "}
            </h1>{" "}
            <div className="c-info">
              <div className="contact-container-wrapper-left-title-item">
                <i
                  className="fas fa-mobile-alt"
                  aria-label="Home icon"
                  data-aos="fade-right"
                  data-aos-duration="700"
                />
                +381644917853
              </div>
              <div className="contact-container-wrapper-left-title-item">
                <i
                  className="fas fa-envelope-open-text"
                  aria-label="Home icon"
                  data-aos="fade-right"
                  data-aos-duration="700"
                />
                adrijana.work@gmail.com
              </div>
              <div className="contact-container-wrapper-left-title-item">
                <i
                  className="fas fa-city"
                  aria-label="Home icon"
                  data-aos="fade-right"
                  data-aos-duration="700"
                />
                21000 Novi Sad - Serbia
              </div>
            </div>
          </div>
          <div
            className="contact-container-wrapper-right"
            onSubmit={(event) => onSubmitForm(event)}
          >
            <p className="contact-container-wrapper-right-desc">
              If you have job offers feel free to email me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                onChange={(event) => setSubject(event.target.value)}
                value={subject}
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <textarea
                rows="10"
                placeholder="Message"
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
              <button className="btn"> Submit </button>
              {<p>{done && isFormValid ? "Message has been sent" : null}</p>}
              {!isFormValid ? <p>All field are required.</p> : null}
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;
