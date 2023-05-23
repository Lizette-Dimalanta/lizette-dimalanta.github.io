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
    <div className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
      </div>
      <div className='md:hidden'>
        <CgMenuGridR onClick={handleToggle} className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300' />
        { 
          toggle ? (
            <div className='fixed w-full h-screen top-14 mt-8 left-0 backdrop-blur-lg flex flex-col justify-center items-center z-20'>
              <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'>
                <IoHome size={20} />
                <span className='pl-4'>HOME</span>
              </a>
              <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'>
                <IoPerson size={20} />
                <span className='pl-4'>ABOUT</span>
              </a>
              <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'>
                <RiSuitcaseFill size={20} />
                <span className='pl-4'>EXPERIENCE</span>
              </a>
              <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'>
                <FaCode size={20} />
                <span className='pl-4'>PROJECTS</span>
              </a>
              <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'>
                <RiContactsBook2Fill size={20} />
                <span className='pl-4'>CONTACT</span>
              </a>
            </div>
          )
          : (
            <div></div>
          )
        }
      </div>
    </div>
  )

  return (
  // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Name (Homepage Button) & Toggle Menu ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
    <header className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
        
        <div className='hidden md:flex gap-4 '>
          {menu.map((item) => (
            <div key={item.id}>
              <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
            </div>
          ))}
        </div>
        <div className='md:hidden'>
          {! toggle ? <CgMenuGridR onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'/>
          : <IoIosArrowUp onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer'/> }
          {toggle ? <MenuOverlay menu = {menu} /> : null}
        </div>
      </div>
    </header>
  )
}

export default Navbar

{/* <CgMenuGridR onClick={handleToggle} className='text-lg cursor-pointer md:hidden flex gap-4 hover:scale-125 transition-all ease-in-out duration-300 */}


// import React, { useState } from 'react'
// import { CgMenuGridR } from "react-icons/cg";
// import { IoIosArrowUp } from "react-icons/io";
// import MenuOverlay from './MenuOverlay';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false)
//   // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Menu Items ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
//   const menu = [
//     {
//         id:1,
//         title:'HOME'
//     },
//     {
//         id:2,
//         title:'ABOUT'
//     },
//     {
//         id:3,
//         title:'EXPERIENCE'
//     },
//     {
//         id:4,
//         title:'EDUCATION'
//     },
//     {
//         id:5,
//         title:'PROJECTS'
//     }
// ]
//   return (
//   // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Name (Homepage Button) & Toggle Menu ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
//     <header className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
//       <div className='flex place-items-center justify-between'>
//         <button>
//           <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
//             <span className='not-italic'> DIMALALNTA</span>
//           </h1>
//         </button>
        
//         <div className='hidden md:flex gap-4 '>
//           {menu.map((item) => (
//             <div key={item.id}>
//               <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
//             </div>
//           ))}
//         </div>
//         <div className='md:hidden'>
//           {! toggle ? <CgMenuGridR onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'/>
//           : <IoIosArrowUp onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer'/> }
//           {toggle ? <MenuOverlay menu = {menu} /> : null}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar

