import React, { useEffect } from 'react'
import styled from 'styled-components';

import { IoIosMail } from "react-icons/io";
import { MdWrongLocation } from "react-icons/md";

import { FaPhoneSquare } from "react-icons/fa";
import FooterContacItem from './FooterContacItem'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FooterSectionStyl=styled.div`
padding: 2rem;
position: relative;
display: block;
.SecondRow{
    padding: 2rem;
    width: 100%;
    background-color: var(--deep-dark-1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.TriedRaw{
    margin-top: 2rem;
    border-top: 1px solid var(--deep-dark-1);
    text-align: center;
    padding: 2rem;
}
@media only screen and (max-width:1000px) {
  .SecondRow{
    flex-direction: column;
    width: 100%;
    .itemcontainer{
        margin-top: 1rem;
        width: 400pX;
        align-items: center;
    }
}  
}

`;
const Footer = () => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          
        },[]);
    
      })
  return (
    <FooterSectionStyl>
              

        <div className="Footercontainer">
            <div className="FirstRow">

            </div>
            <div className="SecondRow" data-aos="fade-up">
                <FooterContacItem  className="contact" itemIcon={<MdWrongLocation/>} itemText="110 district kabul Rd, Rindge,NH 03461"/>
                <FooterContacItem  className="contact" itemIcon={<FaPhoneSquare/>} itemText="125-711-811 | 125-668-886"/>
                <FooterContacItem  className="contact" itemIcon={<IoIosMail/>} itemText="Support.gymcenter@gmail.com"/>
                
            </div>
            <div className="TriedRaw">
            Copyright ©2022 All rights reserved | This Project is made with <span>💗</span> by Y.Rahnaward
            </div>
        </div>
    </FooterSectionStyl>
  )
}

export default Footer