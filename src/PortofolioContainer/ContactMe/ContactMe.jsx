import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "./contact.css";

const ContactMe = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wraper">
        <h2 className="c-title">Contact Me</h2>
        <div className="c-form">
          <>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Name"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </>
          <>
            <FloatingLabel controlId="floatingTextarea2" label="Your message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <a
              href="https://trivia-quiz-aif.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline-dark" className="btn-app">
                Send Message
              </Button>
            </a>
          </>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
