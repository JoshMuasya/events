import React from 'react'
import ServicesSection from './ServicesSection'
import Hero from './Hero'
import Why from './Why'
import Metrics from './Metrics'
import HybridSection from './HybridSection'
import GallerySection from './GallerySection'

const LandingPage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <ServicesSection />
      <Why />
      <Metrics />
      <GallerySection />
    </div>
  )
}

export default LandingPage
