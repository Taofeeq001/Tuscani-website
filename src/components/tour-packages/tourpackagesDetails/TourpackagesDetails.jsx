import Header2 from '@/components/Header2'
import React from 'react'
import Image from 'next/image'
import { TbArrowBack } from 'react-icons/tb'
import Details from './Details'

const TourpackagesDetails = () => {
  return (
    <div className='flex flex-col'>
      <Header2 />
      <div className='lg:px-[10%]'>
        <div className='flex gap-1 items-center cursor-pointer'>
          <TbArrowBack />
          <p className='text-xl'>Back</p>
        </div>
        <div className='flex'>
          <div className='flex flex-col gap-2 w-1/2 items-center'>
            <Image height={450} width={450} className='w-[95%]' src={"/Images/wine.svg"} />
            <div className='grid lg:grid-cols-3 gap-3'>
              <Image height={100} width={180} src={"/Images/Rectangle 40.svg"} />
              <Image height={100} width={180} src={"/Images/Rectangle 41.svg"} />
              <Image height={100} width={180} src={"/Images/Rectangle 42.svg"} />
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <h1>Wine Tasting in Tuscany</h1>
            <p>from <span className='text-[orange] font-bold'> 34 &euro;</span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div>
              <div>
                <p>Select a date</p>
                <Image height={400} width={100} src={"Images/Base Calendar.svg"} />
              </div>
              <div>
                <p>Time</p>
                <input type="time" />
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <Details/>
      </div>
    </div>
  )
}

export default TourpackagesDetails