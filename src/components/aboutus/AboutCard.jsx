import React from 'react'
import { GrMapLocation } from 'react-icons/gr'
import { FaAward } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { MdPriceCheck } from 'react-icons/md'


const AboutCard = () => {
  return (
    <div className='bg-[url(/Images/orange-bg.svg)] py-5 bg-no-repeat gap-8 bg-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-[10%]'>
        <div className='bg-[#FED] p-3 rounded-lg flex flex-col items-center'>
            <GrMapLocation className='text-3xl text-[orange]'/>
            <b className='capitalize w-[60%] text-center leading-loose'>Complete Packages for all your Wishes</b>
        </div>
        <div className='bg-[#FED] p-3 rounded-lg flex flex-col items-center'>
            <FaAward className='text-3xl text-[orange]'/>
            <b className='capitalize w-[60%] text-center leading-loose'>Over 30 Years Of Experience</b>
        </div>
        <div className='bg-[#FED] p-3 rounded-lg flex flex-col items-center'>
            <GiPoliceOfficerHead className='text-3xl text-[orange]'/>
            <b className='capitalize w-[60%] text-center leading-loose'>Expert Guides For You</b>
        </div>
        <div className='bg-[#FED] p-3 rounded-lg flex flex-col items-center'>
            <MdPriceCheck className='text-3xl text-[orange]'/>
            <b className='capitalize w-[60%] text-center leading-loose'>Guaranteed fun at the best price!</b>
        </div>
        
    </div>
  )
}

export default AboutCard