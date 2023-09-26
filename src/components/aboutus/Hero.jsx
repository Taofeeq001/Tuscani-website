import React from 'react'
import Header from '../Landingpage/Header'

const Hero = () => {
  return (
    <div className='bg-[url(/Images/about-bg.svg)] bg-no-repeat bg-center w-full h-[100vh] flex flex-col text-white'>
      <Header/>
      <div className='w-full flex flex-col items-center justify-center gap-4 mt-[10%]'>
        <h1 className='text-4xl font-bold'>Our team cares about your full relax</h1>
        <p className='lg:w-[35%] text-center text-md font-bold leading-loose'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
        <div>
          <button className='p-3 rounded-xl bg-transparent border-2 border-white'>View our Tour Packages</button>
        </div>      
      </div>
    </div>
  )
}

export default Hero