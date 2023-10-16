'use client'
import React, { useState } from 'react'
import Header from './Header'
import { GiWorld } from 'react-icons/gi'
import Publictour from './tourtabs/Publictour'
import Privatetour from './tourtabs/Privatetour'
import Login from './authorization/Login'

const Hero = () => {
  const [active, setActive] = useState("public")
  const [isOpen, setIsOpen] = useState(false)
  const [loginopen, setLoginopen] = useState(false)
  
  const tabs = [
    {
      id: 'public',
      icon: <GiWorld />,
      header: "Public Tours",
      content: <Publictour />
    },
    {
      id: 'private',
      icon: <GiWorld />,
      header: "Private Tours",
      content: <Privatetour />
    }
  ]
  const handleLogin = () => {
    setIsOpen(!isOpen)
  }
  const handleclose = ()=>{
    setLoginopen(!loginopen)
  }
  // const close = ()=>{

  // }

  return (
    <div className='bg-[url(/Images/herobg.svg)] bg-no-repeat bg-center h-[100vh] w-full flex flex-col'>
      <Header close={handleclose } handleLogin={handleLogin} />
      <div className='w-full flex flex-col gap-5 pt-[3%] lg:pt-[7%] items-center justify-center'>
        <div className='flex flex-col gap-3 items-center'>
          <h1 className='lg: text-[100px] font-bold text-white head'>Enjoy in the Best Way!</h1>
          <p className='font-bold text-white'>Enjoy our Service for your trip anytime</p>
        </div>
        <div className='w-[75%] backdrop-blur-[10px] rounded-3xl p-4 flex flex-col'>
          <button className='flex rounded-t-xl w-[25%] h-10 items-center justify-between bg-slate-400 '>
            {
              tabs.map((tab) => {
                return (
                  <div onClick={() => setActive(tab.id)} key={tab.id} className={`flex w-full gap-1 text-white items-center ${active === tab.id ? "bg-[black] pl-1 rounded-tl-xl text-[orange] w-full h-full" : ""}`}>
                    <p>{tab.icon}</p>
                    <h2>{tab.header}</h2>
                  </div>
                )
              })
            }
          </button>
          <div className='w-full'>
            {
              tabs.find((tab) => tab.id === active)?.content
            }
          </div>
        </div>
      </div>
      {
        isOpen && (
          <Login close={()=> setIsOpen(false)} />
        )
      }
    </div>
  )
}

export default Hero