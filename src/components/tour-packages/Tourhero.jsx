'use client'
import React from 'react'
import { dest } from './Tourdata'
import Image from 'next/image'
import Header2 from '../Header2'

const Tourhero = () => {
  return (
    <div>
        <Header2/>
        <div className='flex flex-col px-[10%] py-[4%]'>
            <h1 className='mt-10 text-4xl font-bold'>Tour Packages</h1>
            <div>
                {
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7'>
                    {
                        dest.map((dest, i) => {
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
                                    <a href={dest.link}>Read More ...</a>
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        </div>
        <div className='flex flex-col px-[10%] py-[4%]'>
            <h1 className='mt-10 text-4xl font-bold'>Services</h1>
            <div>
                {
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7'>
                    {
                        dest.map((dest, i) => {
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
                                    <a href={dest.link}>Read More ...</a>
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Tourhero