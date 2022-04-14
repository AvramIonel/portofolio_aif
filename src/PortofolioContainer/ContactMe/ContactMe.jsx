import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { FloatingLabel, Form, Button, Col } from "react-bootstrap";
import "./contact.css";

const ContactMe = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5o7plir",
        "template_4zyk18v",
        formRef.current,
        "ITEzYD8U49OoSsFF6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wraper">
        <h2 className="c-title">Contact Me</h2>
        <div className="c-form">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group as={Col}>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Name"
                className="mb-3"
              >
                <Form.Control as="textarea" placeholder="" name="from_name" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Subject"
                className="mb-3"
              >
                <Form.Control as="textarea" placeholder="" name="e_subject" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="" name="email" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel controlId="floatingTextarea2" label="Your message">
                <Form.Control
                  as="textarea"
                  placeholder=""
                  name="message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>
            {/* <a
              href="https://trivia-quiz-aif.netlify.app/"
              target="_blank"
              rel="noreferrer"
            > */}
            <Button variant="outline-dark" type="submit" className="btn-app">
              Send Message
            </Button>
            {/* </a> */}
            <Form.Group />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
