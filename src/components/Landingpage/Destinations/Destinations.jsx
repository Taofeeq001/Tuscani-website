'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { destinations } from './data'

const Destinations = () => {
    const [index, setIndex] = useState(0);

    // ================No of Images to show at default===========================//
    const numtoShow = 4;

    //================== Handle forward button function =========================//
    const handlebuttonClickForward = () => {
        setIndex(index + 1) % destinations.length
    }
    const handlebuttonClickBackward = () => {
        setIndex(index - 1) % destinations.length
    }

    return (
        <div className='flex px-[10%] flex-col gap-3 py-[10%]'>
            <div className='flex w-full justify-between'>
                <h1 className='text-[2xl] font-bold lg:text-[5xl]'>Explore Our Popular Destinations</h1>
                <div className='flex gap-3'>
                    <button onClick={handlebuttonClickBackward} className='p-3 font-bold bg-[grey]'><IoIosArrowBack /></button>
                    <button onClick={handlebuttonClickForward} className='p-3 font-bold bg-[orange] text-black'><IoIosArrowForward /></button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    destinations.slice(index, index + numtoShow).map((dest, i) => {
                        return (
                            <div key={i} className='flex flex-col w-full gap-3'>
                                <Image className='rounded-xl' height={500} width={500} src={dest.img} />
                                <div className='flex flex-col gap-3'>
                                    <p>{dest.title}</p>
                                    <p>From: <span className='text-[orange] font-bold'>{dest.amount}</span> </p>
                                </div>
                                <div className='flex w-[95%] justify-between text-[orange]'>
                                    <div className='flex gap-1 items-center'>
                                        <i>{dest.icon}</i>
                                        <b className='text-[15px]'>{dest.everyday}</b>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <i>{dest.icon2}</i>
                                        <b className='text-[15px]'>{dest.pp}</b>
                                    </div>
                                </div>
                                <p className='text-[14px]'>{dest.details}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex lg:flex-row justify-between flex-col items-center'>
                <Image height={650} width={650} src="" />
                <div>
                    <p>WELCOME TO OUR SITE</p>
                    <h1 className='font-bold text-[25px]'>We are the best Company for you to visit</h1>
                    <p>After decades of experience, and a whole life in Lucca, we offer you the most
                        complete tourism service in the city. In addition to having bikes and rickshaws to
                        have as much fun as you want, you have the choice of tour guides with whom to
                        tour and drivers for your every need! We offer packages in the way that you get the
                        most at the lowest price. Book with us and we will always be available for you!
                    </p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
                        <div>
                            <h1 className='text-[orange] font-bold text-[20px]'>20+</h1>
                            <span>Years of Experience</span>
                        </div>
                        <div>
                            <h1 className='text-[orange] font-bold text-[20px]'>100+</h1>
                            <span>Happy Customer</span>
                        </div>
                        <div>
                            <h1 className='text-[orange] font-bold text-[20px]'>15+</h1>
                            <span>Choice of Services</span>
                        </div>
                        <div>
                            <h1 className='text-[orange] font-bold text-[20px]'>10+</h1>
                            <span>Professional Guide</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations