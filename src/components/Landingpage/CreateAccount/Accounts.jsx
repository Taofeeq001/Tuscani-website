import React from 'react'
import { FiX } from 'react-icons'

export const Signin = () => {
    return (
        <div>
            <div className='bg-white rounded-2xl p-3'>
                <form action="">
                    <div className='flex w-full justify-between'>
                        <h1>Create Account</h1>
                        <FiX />
                    </div>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Name and Surname</label>
                        <input className='w-full p-1' type="text" />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Email Address</label>
                        <input className='w-full p-1' type="email" />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <input className='w-full p-1' type="password" />
                    </span>
                    <span>
                        <input type="checkbox" name="" id="" />
                        <p>I agreed with <span className='text-[orange]'>Term</span> and <span className='text-[orange]'>Privacy</span></p>
                    </span>
                    <div>
                        <button className='p-2 text-white'>Sign Up</button>
                        <p>or</p>
                        <div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
