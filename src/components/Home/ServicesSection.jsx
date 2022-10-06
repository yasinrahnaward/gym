import React, { useEffect } from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle'
import ServiceSectionItmes from './ServiceSectionItmes'

import {IoIosBicycle ,IoIosFitness}from 'react-icons/io'
import { GiGymBag } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSectionStyle=styled.div`
padding: 5rem 2rem;

border-bottom: 2px solid var(--deep-dark-1);
.ServicesItems{
    display: flex;
    gap:5rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width:768px){
    .ServicesItems{
        flex-direction: column;
        max-width: 380px;
        margin: 0 auto;
        gap: 5rem;
    }
    
}
`;
const ServicesSection = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      
    },[]);

  })
  return (
    <ServiceSectionStyle>
        <div className="container" data-aos="fade-up">
        <SectionTitle subTitle='why people Select Us' Title='Services' />
        <div className='ServicesItems' data-aos="fade-up">
             <ServiceSectionItmes itemIcon={<IoIosFitness/>} itemTitle="Modern Equipment" itemText="There are many variations of passages of lorem Ipsum available, but the majority
have suffered alteration."/>
             <ServiceSectionItmes itemIcon={<IoIosBicycle/>} itemTitle="Healthy nutrition plan" itemText="There are many variations of passages of lorem Ipsum available, but the majority
have suffered alteration."/>
             <ServiceSectionItmes itemIcon={<GiGymBag/>} itemTitle="Proffesponal training" itemText="There are many variations of passages of lorem Ipsum available, but the majority
have suffered alteration."/>

        </div>
        </div>
    </ServiceSectionStyle>
  )
}

export default ServicesSection