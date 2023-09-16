import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {
    return (
        <div className='container flex justify-between w-full items-center'>
            <div className='w-[30%]'>
                <Image height={100} width={100} src="/Images/tus-logo.svg" />
            </div>
            <div className='hidden lg:flex w-[60%] justify-between'>
                <div className='flex gap-7 items-center'>
                    <Link href="/" >Home</Link>
                    <Link href="/aboutus" >About us</Link>
                    <Link href="/tour-packages" >Tour Packages</Link>
                    <Link href="/contact-us" >Contact Us</Link>
                </div>

                <div className='w-[30%] flex gap-6 items-center'>
                    <select name="" id="">
                        <option value="eng">Eng</option>
                        <option value="ar">Ar</option>
                        <option value="fr">Fr</option>
                    </select>
                    <Link href="/login" >Login</Link>
                    <Link className='px-4 py-2 cursor-pointer bg-[orange] rounded-lg text-white' href="/signup" >Sign Up</Link>
                </div>
                <
            </div>
            
        </div>
    )
}

export default Header