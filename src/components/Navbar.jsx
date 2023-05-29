import React, { useState } from 'react'
import { CgMenuGridR } from "react-icons/cg"
import { IoIosArrowUp } from "react-icons/io"
import { IoPerson, IoHome } from "react-icons/io5"
import { RiSuitcaseFill, RiContactsBook2Fill } from "react-icons/ri"
import { FaCode } from "react-icons/fa"
import MenuOverlay from './MenuOverlay'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='border-white border-x-[25px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-2xl md:text-3xl border-t-[4px] border-white font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
        <div className='font-Roboto-Mono text-sm hidden md:flex gap-5'>
          <a href='#main' className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <IoPerson size={15} /> ABOUT
          </a>
          <a href='#main' className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <RiSuitcaseFill size={16} /> EXPERIENCE
          </a>
          <a href='#main' className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <FaCode size={16} /> PROJECTS
          </a>
          <a href='#main' className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <RiContactsBook2Fill size={16} />CONTACT
          </a>
        </div>
      </div>
      <div className='md:hidden'>
      {toggle ? (
          <IoIosArrowUp size={20} onClick={handleToggle} className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300' />
      ) : (
        <CgMenuGridR size={20} onClick={handleToggle} className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300'/>
      )}
        {toggle && (
          <div className='fixed w-full h-screen top-[54px] left-0 backdrop-blur-lg flex flex-col justify-center items-end z-20 pb-96 pr-4'>
            <a href='' className='text-white cursor-pointer bg-slate-800/30 rounded-sm px-2 flex items-center m-2 p-2 hover:scale-110 transition-all ease-in-out duration-300'>
              <IoHome size={20} />
              <span className='pl-3 font-Roboto-Mono font-semibold text-2xl'>HOME</span>
            </a>
            <a href='' className='text-white cursor-pointer bg-slate-800/30 rounded-sm px-2 flex items-center m-2 p-2 hover:scale-110 transition-all ease-in-out duration-300'>
              <IoPerson size={20} />
              <span className='pl-3 font-Roboto-Mono font-semibold text-2xl'>ABOUT</span>
            </a>
            <a href='' className='text-white cursor-pointer bg-slate-800/30 rounded-sm px-2 flex items-center m-2 p-2 hover:scale-110 transition-all ease-in-out duration-300'>
              <RiSuitcaseFill size={20} />
              <span className='pl-3 font-Roboto-Mono font-semibold text-2xl'>EXPERIENCE</span>
            </a>
            <a href='' className='text-white cursor-pointer bg-slate-800/30 rounded-sm px-2 flex items-center m-2 p-2 hover:scale-110 transition-all ease-in-out duration-300'>
              <FaCode size={20} />
              <span className='pl-3 font-Roboto-Mono font-semibold text-2xl'>PROJECTS</span>
            </a>
            <a href='' className='text-white cursor-pointer bg-slate-800/30 rounded-sm px-2 flex items-center m-2 p-2 hover:scale-110 transition-all ease-in-out duration-300'>
              <RiContactsBook2Fill size={20} />
              <span className='pl-3 font-Roboto-Mono font-semibold text-2xl'>CONTACT</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

//         <div className='hidden md:flex gap-4 '>
//           {menu.map((item) => (
//             <div key={item.id}>
//               <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
//             </div>

export default Navbar