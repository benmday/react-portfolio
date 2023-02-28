import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jptfdlg",
        "template_y0r9pw8",
        form.current,
        "Yt4xEGZ3Y6Qv10Pa9"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current[0].value = " ";
          form.current[1].value = " ";
          form.current[2].value = " ";
          window.alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm className="contact">
      <h4>Contact me here!</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
}

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  padding: 125px 20%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgb(36, 102, 36);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgb(36, 102, 36);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(133, 55, 55);
      color: white;
      border: none;
    }
  }
`;
