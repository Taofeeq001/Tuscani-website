import Header2 from '@/components/Header2'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex flex-col h-full'>
        <Header2/>
        <div className='flex flex-col w-full h-[100%] items-center justify-between'>
            <div className='w-[40%] flex justify-between'>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>1</span>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>2</span>
                <span className='w-[40px] h-[40px] items-center justify-center text-black rounded-full'>3</span>
            </div>
            <form className='w-full flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between' action="">
                <div>
                    <span className='flex flex-col w-full'>
                        <label className='font-bold' htmlFor="">When will you visit?</label>
                        <input type="date" />
                    </span>
                    <span className='flex flex-col w-full'>
                        <label className='font-bold' htmlFor="">Which time?</label>
                        <input type="time" />
                    </span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact