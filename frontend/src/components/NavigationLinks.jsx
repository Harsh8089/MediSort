import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationLinks() {
  return (
    <div className='flex ml-[45vw] w-[35vw] mt-[-50px] text-[18px] justify-evenly items-center'>
      <div className='w-[150px] text-center'>
        <NavLink
         to="/"
         className={({isActive}) => 
            isActive? 'bg-white text-black font-bold px-6 py-2 rounded-lg' : 'text-white  px-6 py-2 hover:bg-white hover:text-black hover:font-bold hover:rounded-lg'
         }
         >Home</NavLink>
      </div>
      <div className='w-[150px] text-center'>
        <NavLink 
        to="/about"
        className={({isActive}) => 
            isActive? 'bg-white text-black font-bold px-6 py-2 rounded-lg' : 'text-white  px-6 py-2 hover:bg-white hover:text-black hover:font-bold hover:rounded-lg'
         }
        >About Us</NavLink>
      </div>
      <div className='w-[150px] text-center'>
        <NavLink 
        to="/search"
        className={({isActive}) => 
            isActive? 'bg-white text-black font-bold px-6 py-2 rounded-lg' : 'text-white  px-6 py-2 hover:bg-white hover:text-black hover:font-bold hover:rounded-lg'
         }
        >Search</NavLink>
      </div>
      <div className='w-[150px] text-center'>
        <NavLink 
        to="/contact"
        className={({isActive}) => 
            isActive? 'bg-white text-black font-bold px-6 py-2 rounded-lg' : 'text-white  px-6 py-2 hover:bg-white hover:text-black hover:font-bold hover:rounded-lg'
         }
        >Contact Us</NavLink>
      </div>
    </div>
  )
}

export default NavigationLinks
