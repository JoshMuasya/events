import React from 'react'
import ServicesSection from './ServicesSection'
import Hero from './Hero'
import Why from './Why'

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <ServicesSection />
      <Why />
    </div>
  )
}

export default LandingPage
