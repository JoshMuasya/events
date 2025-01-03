import React from 'react'
import ServicesSection from './ServicesSection'
import Hero from './Hero'
import Why from './Why'
import Metrics from './Metrics'

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <ServicesSection />
      <Why />
      <Metrics />
    </div>
  )
}

export default LandingPage
