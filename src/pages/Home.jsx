import React from 'react'
import AboutSection from '../components/AboutSection'
import ClassesSection from '../components/ClassesSection'
import ServicesSection from '../components/ServicesSection'

const Home = () => {
  return (
    <div>
      <AboutSection></AboutSection>
      <ServicesSection ></ServicesSection>
      <ClassesSection></ClassesSection>
    </div>
  )
}

export default Home