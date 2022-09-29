import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServiceSectionItmes from './ServiceSectionItmes'

import {IoIosBicycle ,IoIosFitness}from 'react-icons/io'
import {IoAlarm ,IoFitness}from 'react-icons/io5'
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";

const ServiceSectionStyle=styled.div`
padding: 5rem 2rem;
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
  return (
    <ServiceSectionStyle>
        <div className="container">
        <SectionTitle subTitle='why people Select Us' Title='Services'/>
        <div className='ServicesItems'>
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