import React from 'react'
import { LandingNav, Testimonial, Products, Story, Android, Hero, FAQ, Benefits, Footer } from '@/components'

const Landing = () => {
  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className='bg-["#333333"] ' >  
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />
      <Story />
      <Testimonial />
      <Android />
      <FAQ />
      <Footer/>
    </div>
  )
}

export default Landing
