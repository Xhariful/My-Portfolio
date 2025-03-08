import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './Service'
import WorkProcedure from './WorkProcedure'
import AboutMe from './AboutMe'
import Portfolio from '../portfoliopages/Portfolio'

const HomePage = () => {
  return (
    <div className='lg:ml-20'>
      {/* HeroSection */}
      <HeroSection/>
      {/* ServiceSection */}
      <ServiceSection/>
      {/* WorkProcedure */}
      <WorkProcedure/>
      {/* AboutSection */}
      <AboutMe/>
      {/* PortfolioSection */}
      <Portfolio/>
    </div>
  )
}

export default HomePage