import React from 'react'
import Header2 from '../Header2'
import { TbLocation, TbMail, TbPhone } from 'react-icons/tb'
import Image from 'next/image'
import Footer from '../Landingpage/Footer'

const Contactus = () => {
    return (
        <div className='flex flex-col'>
            <Header2 />
            <div className='bg-[#FDC596] lg:px-[10%] flex lg:flex-row flex-col justify-between py-9 w-full lg:gap-20 items-center'>
                <div className='flex flex-col gap-5 lg:w-[30%] w-[90%]'>
                    <h1 className='text-5xl font-bold'>Get in Touch!</h1>
                    <p className='text-xl'>Fill up the form and our Team will get back to you within 24 hours.</p>
                    <div className='flex flex-col gap-10 mt-3'>
                        <div className='flex gap-1 items-center'>
                            <TbLocation className='w-[25px] h-[25px]' />
                            <p>Piazza Napoleone, Lucca, Tuscany</p>
                        </div>
                        <div className='flex gap-1 bg-[orange] items-center p-2 rounded-lg'>
                            <TbPhone className='w-[25px] h-[18px]' />
                            <p>+2348109027102</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <TbMail className='w-[25px] h-[25px]' />
                            <p>	taofeeqkolapo@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-[90%]'>
                    <form className='bg-[#f8d89c] w-full p-5 gap-3 rounded-lg flex flex-col' action="">
                        <span className='w-full flex flex-col gap-1'>
                            <p className='font-bold text-xl'>Name and Surname</p>
                            <input className='bg-white outline-none rounded-md p-2' placeholder='Enter your name and surname' type="text" />
                        </span>
                        <span className='w-full flex flex-col gap-1'>
                            <p className='font-bold text-xl'>Name and Surname</p>
                            <input className='bg-white outline-none rounded-md p-2' placeholder='Enter your email address' type="text" />
                        </span>
                        <span className='w-full flex flex-col gap-1'>
                            <p className='font-bold text-xl'>Name and Surname</p>
                            <textarea className='outline-none' name="" id="" cols="30" rows="10"></textarea>
                        </span>
                        <span className='w-full items-center flex justify-center'>
                            <button className='bg-[orange] p-3 rounded-md'>Send Message</button>
                        </span>
                    </form>
                </div>
            </div>
            {/* ========================MAP SHOWING THE DIRECTION HERE ================================= */}

            <div className='w-[100%] h-[60vh]'>
                <iframe
                    title="Ilorin"
                    className="inset-0 w-full h-[60vh] border-0 rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2369657796225!2d-73.98509768531884!3d40.74881797932707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40uMTQ4LTQ4LjAiTiA3M8KwNTgnMTIuMSJX!5e0!3m2!1sen!2sus!4v1628794887199!5m2!1sen!2sus"
                    allowFullScreen=""
                ></iframe>

                {/* <Image height={250} width={250} className='w-full' src={"/Images/Rectangle 33.svg"} /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Contactus