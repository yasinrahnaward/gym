import React from 'react'
import AboutSection from '../components/AboutSection'
import ClassesSection from '../components/ClassesSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ServicesSection from '../components/ServicesSection'

import image1 from '../assets/Header/header1.jpg';
import image2 from '../assets/Header/header2.jpg';
import image3 from '../assets/Header/header3.jpg';
import image4 from '../assets/Header/header4.jpg';
const images=[image1,image2,image3,image4];

const Home = () => {
  return (
    <div>
      <Header
       heroImages={images}
       headerSubTitle="WE PLAN YOUR HEALTH & FITNESS SUCCESS"
       headerTitle='GIT IN SHAPE'
       headerTypedText={["Strength and Conditioning Equipment", "Variety of Training with Expert Teachers", "Digital Fitness Platform"]}
       ></Header>
      <AboutSection></AboutSection>
      <ServicesSection ></ServicesSection>
      <ClassesSection></ClassesSection>
      <Footer></Footer>
    </div>
  )
}

export default Home