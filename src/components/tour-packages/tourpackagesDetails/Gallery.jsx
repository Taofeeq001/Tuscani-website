import React from 'react'
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className='flex flex-col gap-5 mt-3'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-3xl font-bold'>Gallery</p>
                <div className='flex gap-2'>
                    <p className='p-4 rounded-full bg-[grey] text-black'><TbArrowLeft /></p>
                    <p className='p-4 rounded-full bg-[orange] text-white' ><TbArrowRight /></p>
                </div>
            </div>
            <div className='flex w-full items-center gap-3'>
                <div className='w-1/2'>
                    <Image width={350} height={350} className='w-full' src={"/Images/Rectangle 43.svg"} />
                </div>
                <div className='flex gap-1 w-1/2'>
                    <div className='flex flex-col w-1/2 justify-between'>
                        <Image width={500} height={500} className='w-full' src={"/Images/Rectangle 44.svg"} />
                        <Image width={300} height={300} className='w-full ' src={"/Images/Rectangle 45.svg"} />
                    </div>
                    <div className='w-1/2'>
                        <Image width={300} height={300} className='w-full' src={"/Images/Rectangle 46.svg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery