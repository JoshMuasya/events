import React from 'react'
import ServicesSection from './ServicesSection'
import Hero from './Hero'
import Why from './Why'
import Metrics from './Metrics'
import CTA from './CTA'

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <ServicesSection />
      <Why />
      <Metrics />
      <CTA />
    </div>
  )
}

export default LandingPage
