'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiX } from 'react-icons/fi'



const Header = ({handleLogin}) => {
    const [openHamburger, setOpenHamburger] = useState(false)
    const [active, setActive] = useState("home")
    const [login, setLogin] = useState(false)
    const [sign, setSign] = useState(false)
    const handlenavclick = ({home,aboutuse}) =>{
        setActive(home)
    }

    const handleHamburger = () => {
        setOpenHamburger(!openHamburger)
    }

    
    return (
        <section>
        <div className={`flex justify-between px-[10%] py-3 w-full items-center backdrop-blur-[6px]`}>
            <div className='w-[30%]'>
                <Image height={100} width={100} src="/Images/tus-logo.svg" />
            </div>
            <div className='hidden lg:flex w-[68%] justify-between'>
                <div className='flex gap-7  text-white items-center'>
                    <Link onClick={()=> handlenavclick("home")} className={active==="home"? "bg-[orange] p-3 rounded-xl":""} href="/" >Home</Link>
                    <Link onClick={()=> handlenavclick("aboutus")} className={active==="aboutus"? "bg-[orange] p-3 rounded-xl":""} href="/aboutus" >About us</Link>
                    <Link onClick={()=> handlenavclick("tour-packages")} className={active==="tour-packages"? "bg-[orange] p-3 rounded-xl":""} href="/tour-packages" >Tour Packages</Link>
                    <Link onClick={()=> handlenavclick("contact-us")} className={active==="contact-us"? "bg-[orange] p-3 rounded-xl":""} href="/contactus" >Contact Us</Link>
                </div>

                <div className='w-[28%] flex justify-between items-center'>
                    <select name="" id="">
                        <option value="eng">Eng</option>
                        <option value="ar">Ar</option>
                        <option value="fr">Fr</option>
                    </select>
                    <p className='text-white cursor-pointer' onClick={handleLogin} >Login</p>
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
                <Link href="/contactus" >Contact Us</Link>
                <Link href="/login" >Login</Link>
                <Link className='px-3 py-2 cursor-pointer bg-[orange] rounded-lg text-white' href="/signup" >Sign Up</Link>
            </div>
        </div>
        </section>
    )
}

export default Header