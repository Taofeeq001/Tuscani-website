import Header2 from '@/components/Header2'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex flex-col h-full'>
        <Header2/>
        <div className='flex flex-col w-full '>
            <div className='w-[40%] flex justify-between'>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>1</span>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>2</span>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>3</span>
            </div>
        </div>
    </div>
  )
}

export default Contact