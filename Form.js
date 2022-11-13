import React, { useState } from "react";
import Heading from "./Heading";
import Template from "./Template";
import Template2 from "./Template2";
import Forms from "./Form.css";

export default function Form() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [message, setmessage] = useState("");

  let emailchangehandler = (e) => {
    setemail(e.target.value);
    console.log(name);
  };

  let namechangehandler = (e) => {
    setname(e.target.value);
    console.log(name);
  };

  let messagechangehandler = (e) => {
    setmessage(e.target.value);
    console.log(name);
  };

  let submithandler = () => {
    setTimeout(() =>{
      setname("");
      setmessage("");
      setemail("");
    }, 1000)
  
  };

  return (
    <div id="form">
      <Template>
        <Heading mainHeading="CONTACT ME" />
        <Template2>
          <div className="container-fluid">
            <form
              target="_blank"
              action="https://formsubmit.co/d26b41aaaf35f6fea2fac56527c78634"
              method="POST"
              onSubmit={submithandler}
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label inp-label"
                >
                  Name
                </label>
                <input
                name="name"
                  type="text"
                  value={name}
                  onChange={namechangehandler}
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label inp-label"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={emailchangehandler}
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label inp-label"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  value={message}
                  onChange={messagechangehandler}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">
                Send
              </button>
            </form>
          </div>
        </Template2>
      </Template>
    </div>
  );
}
