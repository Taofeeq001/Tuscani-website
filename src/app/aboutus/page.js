import Footer from '@/components/Landingpage/Footer'
import Header from '@/components/Landingpage/Header'
import Testimony from '@/components/Landingpage/Testimony/Testimony'
import AboutCard from '@/components/aboutus/AboutCard'
import AboutLuca from '@/components/aboutus/AboutLuca'
import Hero from '@/components/aboutus/Hero'

import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <AboutLuca/>
      <AboutCard/>
      <Testimony/>
      <Footer/>
    </div>
  )
}

export default page