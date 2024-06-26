
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [submit, setSubmit] = useState(true);
  const [submitmessage, setSubmitmessage] = useState(true);
  const [namefalse, setNamefalse] = useState(true);
  const [inputfield, setInputfield] = useState(true);
  const [message, setMessage] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (submitmessage === false) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          navigate("/");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timer, submitmessage]);

  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      input.name.toLowerCase() === "adem" &&
      input.password.toLowerCase() === "tozlu"
    ) {
      setSubmit(false);
    }
    if (input.name === "" || input.password === "") {
      setInputfield(false);
    } else {
      setInputfield(true);
    }

    if (
      (input.name.toLowerCase() !== "adem" && input.name.length > 0) ||
      (input.password.toLowerCase() !== "tozlu" && input.password.length > 0)
    ) {
      setNamefalse(false);
    } else {
      setNamefalse(true);
    }
  }

  function handleSubmitMessage(e) {
    e.preventDefault();

    if (input.message.length > 4 && input.email.includes("@")) {
      setSubmitmessage(false);
    } else {
      setSubmitmessage(true);
    }
    if (input.message === "" && input.email === "") {
      setInputfield(false);
    } else {
      setInputfield(true);
    }
    if (input.message.length > 0 && input.message.length < 5) {
      setMessage(false);
    } else {
      setMessage(true);
      if (input.email === "" && input.message.length > 0) {
        setEmailCheck(false);
      } else {
        setEmailCheck(true);
      }
    }
  }

  return (
    <main className="contact__main">
      {submit ? (
        <form onSubmit={handleSubmit} className="form">
          <h1 className="form__headline">Login:</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />

          <p
            style={{ display: namefalse ? "none" : "" }}
            className="form__contact__error-message"
          >
            Your name or password is incorrect! <br />
            note: adem tozlu

          </p>
          <p
            style={{ display: inputfield ? "none" : "" }}
            className="form__contact__error-message"
          >
            please check your input fields
          </p>

          <button type="submit" className="form__contact-button">
            Login
          </button>
        </form>
      ) : submitmessage ? (
        <form onSubmit={handleSubmitMessage} className="form">
          <h2 className="form__headline">Your Message</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={input.message}
            onChange={handleChange}
          />
          <p
            style={{ display: message ? "none" : "" }}
            className="form__contact__error-message"
          >
            Your message must be at least 5 lines long
          </p>
          <p
            style={{ display: inputfield ? "none" : "" }}
            className="form__contact__error-message"
          >
            please check your input fields
          </p>
          <p
            style={{ display: emailCheck ? "none" : "" }}
            className="form__contact__error-message"
          >
            Please check your email address
          </p>
          <button type="submit" className="form__contact-button">
            Send
          </button>
          {/* <button type="submit" className="form__contact-button">
            Send
          </button> */}
        </form>
      ) : (
        <p className="contact__messages">
          Thank you for your message{" "}
          <span>
            Redirect to home in <span style={{ color: "red" }}>{timer}</span>{" "}
          </span>
        </p>
      )}
    </main>
  );
}

export default Contact;
