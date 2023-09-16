'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiX } from 'react-icons/fi'



const Header = () => {
    const [openHamburger, setOpenHamburger] = useState(false)

    const handleHamburger = () => {
        setOpenHamburger(!openHamburger)
    }
    return (
        <div className='flex justify-between px-[10%] py-3 w-full items-center backdrop-blur-[6px]'>
            <div className='w-[30%]'>
                <Image height={100} width={100} src="/Images/tus-logo.svg" />
            </div>
            <div className='hidden lg:flex w-[68%] justify-between'>
                <div className='flex gap-7  text-white items-center'>
                    <Link href="/" >Home</Link>
                    <Link href="/aboutus" >About us</Link>
                    <Link href="/tour-packages" >Tour Packages</Link>
                    <Link href="/contact-us" >Contact Us</Link>
                </div>

                <div className='w-[28%] flex justify-between items-center'>
                    <select name="" id="">
                        <option value="eng">Eng</option>
                        <option value="ar">Ar</option>
                        <option value="fr">Fr</option>
                    </select>
                    <Link className='text-white' href="/login" >Login</Link>
                    <Link className='px-3 py-2 cursor-pointer bg-[orange] rounded-lg text-white' href="/signup" >Sign Up</Link>
                </div>
            </div>
            <button onClick={handleHamburger} className='lg:hidden block'>
                {
                    openHamburger ? <FiX /> : <RxHamburgerMenu />
                }
            </button>
            <div className={`absolute top-[12%] left-0 flex flex-col w-full items-center justify-center gap-9 ease-out duration-300 overflow-hidden bg-slate-500 ${openHamburger ? "h-[50vh]" : 'h-0'}`}>
                <Link href="/" >Home</Link>
                <Link href="/aboutus" >About us</Link>
                <Link href="/tour-packages" >Tour Packages</Link>
                <Link href="/contact-us" >Contact Us</Link>
                <Link href="/login" >Login</Link>
                <Link className='px-3 py-2 cursor-pointer bg-[orange] rounded-lg text-white' href="/signup" >Sign Up</Link>
            </div>

        </div>
    )
}

export default Header