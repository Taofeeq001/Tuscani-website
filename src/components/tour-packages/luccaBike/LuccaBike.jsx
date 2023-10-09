'use client'
import React from 'react'
import Details from './Details'
import GalleryProps from '@/components/Landingpage/props/GalleryProps'
import Header2 from '@/components/Header2'
import Image from 'next/image'
import { TbArrowBack } from 'react-icons/tb'
import Testimony from '@/components/Landingpage/Testimony/Testimony'
import Footer from '@/components/Landingpage/Footer'
import { useRouter } from 'next/navigation'

const LuccaBike = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col'>
            <Header2 />
            <div className='lg:px-[10%]'>
                <div onClick={() => router.back()} className='flex gap-1 items-center cursor-pointer'>
                    <TbArrowBack />
                    <p className='text-xl'>Back</p>
                </div>
                <div className='flex gap-[3rem] lg:flex-row flex-col'>
                    <div className='flex flex-col gap-2 lg:w-1/2 w-full'>
                        <Image height={450} width={450} className='w-full flex justify-start' src={"/Images/Rectangle 39.svg"} />
                        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 w-full gap-5'>
                            <Image height={100} width={200} src={"/Images/R1.svg"} />
                            <Image height={100} width={200} src={"/Images/R2.svg"} />
                            <Image height={100} width={200} src={"/Images/R3.svg"} />
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-1/2 w-full gap-2'>
                        <h1>Wine Tasting in Tuscany</h1>
                        <p>from <span className='text-[orange] font-bold'> 34 &euro;</span></p>
                        <p className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='flex flex-col w-[45%] gap-3'>
                            <div>
                                <p className='font-bold text-xl'>Select a date</p>
                                <Image height={400} width={100} className='w-full' src={"/Images/Base Calendar.svg"} />
                            </div>
                            <div>
                                <p className='text-xl font-bold'>Time</p>
                                <input className='w-full border-2 border-gray-500 p-2 rounded-e-lg' type="time" />
                            </div>
                            <button className='bg-[orange] p-2 rounded-md text-xl text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <Details />
                <GalleryProps
                    img1={"/Images/img1.svg"}
                    img2={"/Images/img2.svg"}
                    img3={"/Images/img3.svg"}
                    img4={"/Images/img4.svg"}
                />
            </div>
            <Testimony />
            <Footer />
        </div>
    )
}

export default LuccaBike