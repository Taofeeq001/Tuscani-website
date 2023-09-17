import { data } from 'autoprefixer'
import React from 'react'
import Image from 'next/image'
import { destinations } from './data'

const Destinations = () => {
    return (
        <div className='flex px-[10%] flex-col gap-3 py-[10%]'>
            <div className='flex w-full justify-between'>
                <h1 className='text-[2xl] font-bold lg:text-[5xl]'>Explore Our Popular Destinations</h1>
                <div className='flex gap-3'>
                    <button className='p-3 font-bold bg-[grey]'>back</button>
                    <button className='p-3 font-bold bg-[orange] text-black'>Front</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    destinations.map(dest => {
                        return (
                            <div className='flex flex-col w-full'>
                                <Image className='rounded-xl' height={500} width={500} src={dest.img} />
                                <div>
                                    <p>{dest.title}</p>
                                    <p>From: <span>{dest.amount}</span> </p>
                                </div>
                                <div className='flex w-full justify-between'>
                                    <div className='flex gap-1'>
                                        <i>{dest.icon}</i>
                                        <b>{dest.everyday}</b>
                                    </div>
                                    <div className='flex gap-1'>
                                        <i>{dest.icon2}</i>
                                        <b>{dest.pp}</b>
                                    </div>
                                </div>
                                <p>{dest.details}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Destinations