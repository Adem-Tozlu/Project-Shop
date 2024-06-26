
import { useState, useContext } from "react";
import { FetchAPIContext } from "../context/FetchAPI";

function Login() {
  const { cartempty } = useContext(FetchAPIContext);
  const [submit, setSubmit] = useState(true);
  const [namefalse, setNamefalse] = useState(true);
  const [inputfield, setInputfield] = useState(true);

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
      cartempty();
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

  return (
    <main className="contact__main">
      {submit ? (
        <form onSubmit={handleSubmit} className="form">
          <h1 className="form__headline">Login</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
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
            Your name or password is incorrect!
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
      ) : (
        <>
          <h2 className="buy__order">Order received!</h2>
          <p className="buy__messages">
            We will email you as soon as we have an estimated delivery date.
          </p>
        </>
      )}
    </main>
  );
}

export default Login;
