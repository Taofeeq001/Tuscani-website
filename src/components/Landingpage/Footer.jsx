'use client'
import React from 'react'
import Image from 'next/image'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsTwitter } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col py-6 px-[10%] bg-black gap-10'>
      <Image width={150} height={150} src={"/Images/tus-logo.svg"} />
      <div className='grid lg:grid-cols-5 py-5 md:grid-cols-3 lg:gap-12 grid-cols-1 border-[grey] border-y-2'>
        <div className='flex flex-col text-white gap-4'>
          <h1 className='text-2xl font-bold'>Services</h1>
          <p className='text-[15px]'>Bike and Rickshaw rental</p>
          <p className='text-[15px]'>Guided Tours of Lucca</p>
          <p  className='text-[15px]'>Guided Bike Tour of Lucca</p>
          <p  className='text-[15px]'>Trip In The Tuscan Hills</p>
          <p  className='text-[15px]'>Transportation With Luxury Cars</p>
          <p  className='text-[15px]'>Wine Tours By Bus With Guide</p>
        </div>
        <div className='flex flex-col text-white gap-4'>
          <h1 className='text-2xl font-bold'>Home</h1>
          <p  className='text-[15px]'>Home</p>
          <p  className='text-[15px]'>About Us</p>
          <p  className='text-[15px]'>Tour Packages</p>
        </div>
        <div className='flex flex-col text-white gap-4'>
          <h1 className='text-2xl font-bold'>Help</h1>
          <p  className='text-[15px]'>Terms and Services</p>
          <p  className='text-[15px]'>Privacy Policy</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-white'>Contacts</h1>
          <div className='flex gap-2 items-center'>
            <i className='text-[orange]'><BiMap /></i>
            <p className='text-white text-[15px]'>Piazza Napoleone, Lucca, Tuscany</p>
          </div>
          <div className='flex gap-2 items-center'>
            <i className='text-[orange]'><BsTelephone /></i>
            <p className='text-white text-[15px]'>+2348109027102</p>
          </div>
          <div className='flex gap-2 items-center'>
            <i className='text-[orange]'><AiOutlineMail /></i>
            <p className='text-white text-[15px]'>taofeeqolayiwolakolapo@gmail.com</p>
          </div>
        </div>
        <div>
          <h1 className='text-2xl text-white font-bold'>Social Media</h1>
          <div className='flex gap-4'>
            <Link className='p-3 rounded-full text-black bg-[orange]' href="/twitter"><BsTwitter/></Link>
            <Link className='p-3 rounded-full text-black bg-[orange]' href="/facebook"><GrFacebookOption/></Link>
            <Link className='p-3 rounded-full text-black bg-[orange]' href="/instagram"><AiOutlineInstagram/></Link>
          </div>
        </div>
      </div>
      <div className='w-full items-center flex flex-col justify-center'>
        <p className='text-white'>Copyright &copy;2022. All right reserved</p>
        <p className='text-[orange]'>Designed by: Simsuraj_Dev</p>
      </div>
    </div>
  )
}

export default Footer