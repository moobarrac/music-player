import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from '../assets'
import { links } from '../assets/constants'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavLinks = ({handleClick}: {handleClick?:any}) => {
  return <div className="mt-10">
    {
      links.map(link => (
        <NavLink
          key={link.name}
          to={link.to}
          onClick={() => handleClick && handleClick()}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        >
          <link.icon className='w-6 h-6 mr-2' />
          {link.name}
        </NavLink>
      ))
    }
  </div>
}

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        {/* <img src={logo} alt="Logo" className="w-full h-14 object-contain" /> */}
        <NavLinks/>
      </div>
      <div className="absolute md:hidden block top-6 right-3">
      {
        menuOpen ? 
          <FaTimes
            className='w-6 h-6 text-white mr-2'
            onClick={() => setMenuOpen(false)}

          />
        : 
          <FaBars
            className='w-6 h-6 text-white mr-2'
            onClick={() => setMenuOpen(true)}
          />
        
      }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl z-10 p-6 from-white/10 to-[#483d8b] backdrop-blur-lg md:hidden smooth-transition ${menuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMenuOpen(false)}/>
      </div>
    </>
  )
}

export default Sidebar