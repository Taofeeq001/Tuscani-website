import Bikeservice from '@/components/Landingpage/Bikeservice/Bikeservice'
import Footer from '@/components/Landingpage/Footer'
import Testimony from '@/components/Landingpage/Testimony/Testimony'
import Tourhero from '@/components/tour-packages/Tourhero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Tourhero/>
        <Bikeservice/>
        <Testimony/>
        <Footer/>
    </div>
  )
}

export default page