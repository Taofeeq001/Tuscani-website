'use client'
import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import {BsCalendarDate, BsCarFront} from 'react-icons/bs'
import {PiTimer} from 'react-icons/pi'
import {MdOutlineTour} from 'react-icons/md'

const Publictour = () => {
    return (
        <div className='bg-white rounded-xl px-2 rounded-tl-none flex w-full justify-between py-4'>
            <div className='flex gap-1 border-r-slate-300'>
                <IoIosPeople className='w-[24px] h-[24px]' />
                <div className='flex flex-col gap-3'>
                    <b>Number of People</b>
                    <select name="" id="">
                        <option value="">Choose number</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-1 border-r-slate-300'>
                <BsCalendarDate className='w-[24px] h-[24px]'/>
                <div className='flex flex-col gap-3'>
                    <b>Date</b>
                    <input type="date" name="" id="" />
                </div>
            </div>
            <div className='flex gap-1 border-r-slate-300'>
                <PiTimer className='w-[24px] h-[24px]'/>
                <div className='flex flex-col gap-3'>
                    <b>Time</b>
                    <select name="" id="">
                        <option value="">Choose Time</option>
                        <option value="">1:00 am</option>
                        <option value="">2:00 am</option>
                        <option value="">3:00 am</option>
                        <option value="">4:00 am</option>
                        <option value="">5:00 am</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-1 border-r-slate-300'>
                <MdOutlineTour className='w-[24px] h-[24px]'/>
                <div className='flex flex-col gap-3'>
                    <b>Tour</b>
                    <select className='w-[full]' name="" id="">
                        <option value="">Select Tour</option>
                        <option value="">Lucca Bike Tour</option>
                        <option value="">Book a bike </option>
                        <option value="">Tour in the outside of Lucca</option>
                        <option value="">Wine Tasting in Tuscany</option>
                        <option value="">Cinque Terre Tour</option>
                        <option value="">Siena and Surroundings</option>
                        <option value="">Pisa & Lucca</option>
                        <option value="">Italy Special Trips</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-1 border-r-slate-300'>
                <BsCarFront className='w-[24px] h-[24px]'/>
                <div className='flex flex-col gap-3'>
                    <b>Transportation</b>
                    <select name="" id="">
                        <option value="">Select Transportation</option>
                        <option value="">Minivan and Bus</option>
                        <option value="">Transfers & NCC</option>
                        <option value="">Luxury Experience</option>
                    </select>
                </div>
            </div>
            <button className='bg-[orange] rounded-2xl py-5 px-4'>
                <BsCarFront className='w-[24px] h-[24px]'/>
            </button>
        </div>
    )
}

export default Publictour