import React from 'react'
import Image from 'next/image'

const AboutLuca = () => {
    return (
        <div className='flex py-[7%] lg:px-[10%] gap-[] lg:flex-row flex-col items-center'>
            <div className='w-1/2'>
                <Image className='w-[85%]' width={250} height={250} src={"/Images/about-luca.svg"} />
            </div>
            <div className='lg:w-[45%] w-full flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-[#333333] text-xl'>WELCOME TO OUR SITE</h4>
                    <h1 className='font-bold lg:text-3xl text-xl'>We Are The Center Of Lucca To Offer You The Best</h1>
                </div>
                <p className='leading-loose'>We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!</p>
                <div className='flex gap-5'>
                    <div>
                        <h1 className='font-bold text-3xl text-[orange]'>20+</h1>
                        <p className='text-[#333333]'>Years of Experience</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl text-[orange]'>100+</h1>
                        <p className='text-[#333333]'>Happy Customers</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl text-[orange]'>15+</h1>
                        <p className='text-[#333333]'>Choice of Services</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl text-[orange]'>10+</h1>
                        <p className='text-[#333333]'>Professional Guides</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLuca