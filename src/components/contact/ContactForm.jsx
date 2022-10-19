import React, { useState } from "react";
import styled from "styled-components";

const ContactFormStyle=styled.form`
 width: 100%;
 .form-group{
    width: 100%;
    margin-bottom: 1rem;

 }
 label{
    font-size: 1.2rem;
 }
 input,textarea{
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    color:var(--gray);
    background-color: var(--deep-dark-1);
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 1rem;
 }
 textarea{
    min-height: 250px;
    resize: vertical;
 }
 button{
    background-color: var(--gray);
    color: var(--deep-dark-1);
    font-size: 1.5rem;
    padding:.5rem 1rem;
    outline: none;
    border: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 10px;
 }
`;

const ContactForm = () => {
  const [name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Messege, setMessege] = useState();
  return (
    <div>
      <ContactFormStyle action="">
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Email">
            Your Email
            <input
              type="text"
              id="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Messege">
            Your Messege
            <textarea
              type="text"
              id="Messege"
              value={Messege}
              onChange={(e) => setMessege(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">send</button>
      </ContactFormStyle>
    </div>
  );
};

export default ContactForm;
