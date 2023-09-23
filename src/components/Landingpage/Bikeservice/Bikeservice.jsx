'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Bikeservice = () => {
    const [name, setName] = useState("")
    return (
        <div className='bg-[orange] lg:px-[10%] flex lg:flex-row flex-col lg:justify-between items-center'>
            <div className='lg:w-1/2 w-[90%] flex flex-col gap-7 items-center py-5'>
                <h1 className='font-bold text-2xl'>Book Now Bike</h1>
                <form action="" className='p-5 rounded-xl bg-[#ecdec3] flex flex-col gap-4 justify-center lg:items-center w-full' >
                    <div className='flex lg:flex-row flex-col justify-between gap-4 w-full'>
                        <span className='w-full flex flex-col'>
                            <label htmlFor="Name and Surname">Name and Surname</label>
                            <input className='py-3' type="text" placeholder='Enter your name and surname' name="name" id="" />
                        </span>
                        <span className='w-full flex flex-col'>
                            <label htmlFor="Email address">Email Address</label>
                            <input className='py-3' type="email" placeholder='Enter your email address' name="email" id="" />
                        </span>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-between gap-4 w-full'>
                        <span className='flex flex-col w-full' >
                            <label htmlFor="Name and Surname">Telephone Number</label>
                            <input className='py-3' type="text" placeholder='e.g 08178765789' name="name" id="" />
                        </span>
                        <span className='flex flex-col w-full'>
                            <label htmlFor="Email address">Service Type</label>
                            <select className='py-3' name="" id="">
                                <option value="">Select Service Type</option>
                                <option value="">one</option>
                                <option value="">two</option>
                            </select>
                        </span>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-between gap-4 w-full'>
                        <span className='flex flex-col w-full'>
                            <label htmlFor="Name and Surname">Date</label>
                            <input className='py-3' type="date" name="" id="" />
                        </span>
                        <span className='flex flex-col w-full'>
                            <label htmlFor="Email address">Time</label>
                            <input className='py-3' type="time" name="" id="" />
                        </span>
                    </div>
                    <div className='flex w-full justify-center items-center'>
                        <button className='px-4 py-3 rounded-3xl bg-[orange]'>Book Now</button>
                    </div>
                </form>
            </div>
            <div>
                <Image width={250} height={250} className='w-full' src="/Images/bike picture.svg" />
            </div>
        </div>
    )
}

export default Bikeservice