'use client'
import React from 'react'
import { FiX } from 'react-icons'
import Link from 'next/link'
import { TbBrandGoogle, TbEye } from 'react-icons/tb'

const SignUp = ({setSignIn, signIn}) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
            <div className='bg-white rounded-2xl p-3 w-[30%]'>
                <form className='flex flex-col gap-3' action="">
                    <div className='flex w-full justify-between'>
                        <h1>Create Account</h1>
                        <div onClick={() => setSignIn(!signIn)}>
                            <FiX />
                        </div>
                    </div>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Name and Surname</label>
                        <input className='w-full p-2 rounded-md' placeholder='Enter your Name and Surname' type="text" />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Email Address</label>
                        <input className='w-full p-2 rounded-md' placeholder='Enter your email Address' type="email" />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <div className='flex items-center border-[grey]'>
                            <input className='w-full p-2 rounded-md' placeholder='Enter your Password' type="password" />
                            <span><TbEye /></span>
                        </div>
                    </span>
                    <span>
                        <input type="checkbox" name="" id="" />
                        <p>I agreed with <span className='text-[orange]'>Term</span> and <span className='text-[orange]'>Privacy</span></p>
                    </span>
                    <div className='flex flex-col items-center gap-2'>
                        <button className='p-2 text-white'>Sign Up</button>
                        <p>or</p>
                        <button>
                            <TbBrandGoogle />
                            <p>Sign Up with Google</p>
                        </button>
                    </div>
                    <p>Already have an Account? <Link className="text-[orange]" href="">Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp;

// import { TbBrandGoogle, TbEye } from 'react-icons/tb'

// export const Login = () => {
//     return (
//         <div>
//             <div className='bg-white rounded-2xl p-3 w-[30%]'>
//                 <form className='flex flex-col gap-3' action="">
//                     <div className='flex w-full justify-between'>
//                         <h1>Login</h1>
//                         <FiX />
//                     </div>
//                     <span className='flex flex-col gap-2'>
//                         <label htmlFor="">Email Address</label>
//                         <input className='w-full p-1' type="email" />
//                     </span>
//                     <span className='flex flex-col gap-2'>
//                         <label htmlFor="">Password</label>
//                         <input className='w-full p-1' type="password" />
//                     </span>
//                     <p>Forget your password?</p>
//                     <div>
//                         <button className='p-2 text-white'>Sign In</button>
//                         <p>or</p>
//                         <button>
//                             <p>G</p>
//                             <p>Sign Up with Google</p>
//                         </button>
//                     </div>
//                     <p>Don't have an Account? <Link className="text-[orange]" href="">Sign Up</Link></p>
//                 </form>
//             </div>
//         </div>
//     )
// }

