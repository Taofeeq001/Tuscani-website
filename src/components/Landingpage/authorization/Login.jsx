import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { TbEyeCheck, TbEyeClosed } from 'react-icons/tb'

const Login = ({ close }) => {
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [show, setShow] = useState(false)
    const [closeModal, setcloseModal] = useState(false)
    const handlepass = () => {
        setShow(!show)
    }
    const handleclosemodal = (e)=>{
        if(e.target.classList.contains("man")){
            setcloseModal(!closeModal)
        }
    }
    return (
        <div onClick={handleclosemodal} className='flex flex-col w-full h-[100vh] fixed top-0 left-0'>
            <div className='flex flex-col z-[500] items-center justify-center man w-full h-[100vh]'>
                <div className='bg-white w-[30%] rounded-xl p-7 flex flex-col gap-2'>
                    <div className='w-full flex justify-between'>
                        <p>Create an Account</p>
                        <FiX className='text-3xl cursor-pointer' onClick={close} />
                    </div>
                    <form className='w-full flex flex-col' action="">
                        <span className='flex flex-col gap-1 w-full'>
                            <label htmlFor="">Name and Surname</label>
                            <input type="text"
                                className='pl-3 bg-transparent py-2 rounded-md border border-[grey]'
                                placeholder='Enter your name and Surname'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </span>
                        <span className='flex flex-col gap-1 w-full'>
                            <label htmlFor="">Email Address</label>
                            <input type="text"
                                className='pl-3 bg-transparent py-2 rounded-md border border-[grey]'
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </span>
                        <span className='flex flex-col gap-1 w-full'>
                            <label htmlFor="">Password</label>
                            <div className='px-3 py-2 items-center flex justify-between w-full rounded-md border border-[grey]'>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={show ? "text" : "password"}
                                    className='outline-none bg-transparent border-transparent w-full'
                                    placeholder='Enter your email address'
                                />
                                <span onClick={handlepass}>
                                    {show ? <TbEyeCheck /> : <TbEyeClosed />}
                                </span>
                            </div>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <input type="checkbox" name="" id="" />
                            <p>I agreed with Terms and Privacy</p>
                        </span>
                        <div className='flex flex-col items-center gap-2'>
                            <button className='bg-orange text-white'>Sign Up</button>
                            <p>or</p>
                            <button>Sign up with Google</button>
                            <p>Already have an Account ? <Link href={"/login"} className='text-orange'>Login In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login