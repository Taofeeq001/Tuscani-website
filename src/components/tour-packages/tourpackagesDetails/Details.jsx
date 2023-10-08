import React from 'react'
import { TbBus, TbCup, TbCurrency, TbLanguage, TbLocation, TbUser, TbUsersGroup } from 'react-icons/tb'

const Details = () => {
  return (
    <div className='lg:w-1/2 w-full mt-5 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Details</h1>
        <p className='flex text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
                <TbUsersGroup className='text-[orange] text-xl'/>
                <p><b>Number of Group:</b> 15 - 30</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbCup className='text-[orange] text-xl'/>
                <p><b>Duration:</b> 15 hours and 45 minutes</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbLocation className='text-[orange] text-xl'/>
                <p><b>Departure and Arriving Area:</b> Lucca</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbUser className='text-[orange] text-xl'/>
                <p><b>Guide Services:</b> Included</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbLanguage className='text-[orange] text-xl'/>
                <p><b>Language:</b> English and Italian</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbCurrency className='text-[orange] text-xl'/>
                <p><b>Entry Fees:</b> Lorem Ipsum</p>
            </div>
            <div className='flex gap-2 items-center'>
                <TbBus className='text-[orange] text-xl'/>
                <p><b>Entry Transportation:</b> Bus</p>
            </div>
        </div>  
    </div>
  )
}

export default Details