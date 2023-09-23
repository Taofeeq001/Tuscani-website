'use client'
import React from 'react'
import { popularity } from './Data'
import Image from 'next/image'
import Link from 'next/link'

const Popularpackage = () => {
    return (
        <div className='container grid lg:grid-cols-4 gap-7 md:grid-cols-2 grid-cols-1 py-[8%]'>
            {
                popularity.map((pop) => {
                    return (
                        <div className='flex flex-col gap-4 w-full shadow-md shadow-[grey] rounded-3xl'>
                            <Image className='w-full' src={pop.image} />
                            <div className='rounded-b-xl p-5 flex flex-col gap-3'>
                                <h1>{pop.title}</h1>
                                <p><sup>&euro;</sup><span className='font-bold text-3xl text-[orange]'>{pop.price}</span><sub>/day</sub></p>
                                <div className='flex gap-2 items-center'>
                                    <i className='text-[orange]'>{pop.icon1}</i>
                                    <p>{pop.icon1det}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className='text-[orange]'>{pop.icon2}</i>
                                    <p>{pop.icon2det}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className='text-[orange]'>{pop.icon3}</i>
                                    <p>{pop.icon3det}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className='text-[orange]'>{pop.icon4}</i>
                                    <p>{pop.icon4det}</p>
                                </div>
                                <button href={pop.link} className='border-2 border-[orange] py-3 rounded-xl w-full'> Book Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Popularpackage