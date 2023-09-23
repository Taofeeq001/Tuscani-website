'use client'
import React from 'react'
import Image from 'next/image'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Testimony = () => {
    return (
        <div className='lg:px-[10%] py-10 flex flex-col gap-4'>
            <div className='flex flex-row justify-between w-full items-center'>
                <h1 className='text-3xl font-bold'>Happy Customers say</h1>
                <div className='flex gap-2'>
                    <button className='p-4 rounded-full bg-[grey]'><IoIosArrowBack/></button>
                    <button className='p-4 rounded-full bg-[orange]'><IoIosArrowForward/></button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-7 md:grid-cols-2 grid-cols-1'>
                <div className='flex flex-col items-center border p-6 border-[grey] rounded-xl'>
                    <div className='flex flex-col w-full items-center'>
                        <Image />
                        <p>Lyod Gomez</p>
                    </div>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                </div>
                <div className='flex flex-col items-center border p-6 border-[grey] rounded-xl'>
                    <div className='flex flex-col w-full items-center '>
                        <Image />
                        <p>Lyod Gomez</p>
                    </div>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                </div>
            </div>
        </div>
    )
}

export default Testimony