import React from 'react'
import Image from 'next/image'

const Bikeservice = () => {
    return (
        <div className='bg-[orange] lg:px-[10%] flex lg:flex-row flex-col lg:justify-between items-center'>
            <div className='w-1/2 flex flex-col items-center'>
                <h1>Book Now Bike</h1>
                <form action="" className='p-3 rounded-md bg-[#ecdec3]' >
                    <div className='flex lg:flex-row justify-between'>
                        <span>
                            <label htmlFor="Name and Surname">Name and Surname</label>
                            <input type="text" className='Enter your name and surname' name="name" id="" />
                        </span>
                        <span>
                            <label htmlFor="Email address">Name and Surname</label>
                            <input type="email" className='Enter your email address' name="email" id="" />
                        </span>
                    </div>
                    <div className='flex lg:flex-row justify-between'>
                        <span>
                            <label htmlFor="Name and Surname">Name and Surname</label>
                            <input type="text" className='Enter your name and surname' name="name" id="" />
                        </span>
                        <span>
                            <label htmlFor="Email address">Name and Surname</label>
                            <input type="email" className='Enter your email address' name="email" id="" />
                        </span>
                    </div>
                    <div className='flex lg:flex-row justify-between'>
                        <span>
                            <label htmlFor="Name and Surname">Name and Surname</label>
                            <input type="text" className='Enter your name and surname' name="name" id="" />
                        </span>
                        <span>
                            <label htmlFor="Email address">Name and Surname</label>
                            <input type="email" className='Enter your email address' name="email" id="" />
                        </span>
                    </div>
                    <div className='flex w-full items-center'>
                        <button className='px-4 py-3 rounded-lg'>Book Now</button>
                    </div>
                </form>
            </div>
            <Image width={100} src="" />
        </div>
    )
}

export default Bikeservice