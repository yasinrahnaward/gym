import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import FooterContacItem from "../FooterContacItem";
import { IoIosMail } from "react-icons/io";
import { MdWrongLocation } from "react-icons/md";

import { FaPhoneSquare } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Map from "./Map";

const ContactStyle = styled.div`
  padding: 8rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
    justify-content: space-between;
    position: relative;
    .left {
        width:  100%;
        margin-bottom: 2rem;
      .itemcontainer {
        border: none;
        background-color: var(--deep-dark-1);
        padding: 1rem;
        margin:1rem 0;
        width: 100%;
      }
    }
    .right{
        width:100%;
        margin-bottom: 2rem;
    }
  }
  .contactSection__wrapper::after{
    position: absolute;
    content: " ";
    width: 2px;
    height: 50%;
    background-color: var(--gray);
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
  }
  @media only screen and (max-width:820px) {
    .contactSection__wrapper{
        flex-direction: column;
    }
    .contactSection__wrapper::after{
        display: none;
    }
  }
`;
function ContactSection() {
  return (
    <ContactStyle>
      <div className="container">
        <SectionTitle subTitle="FIND US EASY" Title="CONTACT"></SectionTitle>
        <div className="contactSection__wrapper">
          <div className="left">
            <FooterContacItem
              className="contact"
              itemIcon={<MdWrongLocation />}
              itemText="110 district kabul, Afghanistan"
            />
            <FooterContacItem
              className="contact"
              itemIcon={<FaPhoneSquare />}
              itemText="(+93) 783-492-383"
            />
            <FooterContacItem
              className="contact"
              itemIcon={<IoIosMail />}
              itemText="Yasinrahnaward.2022@gmail.com"
            />
          </div>
          <div className="right">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
      <Map/>
    </ContactStyle>
  );
}

export default ContactSection;
