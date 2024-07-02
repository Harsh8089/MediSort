import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Landing from './Landing'
import banner from '../assets/banner.jpg'
import Logo from '../assets/logo.png'
import slogans from '../const.js'
import NavigationLinks from './NavigationLinks'

function Nav() {
  const location = useLocation()
  const [slogan, setSlogan] = useState("")

  useEffect(() => {
    const routeToSlogan = {
      '/': slogans['home'],
      '/about': slogans['about'],
      '/search': slogans['search'],
      '/contact': slogans['contact']
    }

    setSlogan(routeToSlogan[location.pathname] || "")
  }, [location])

  return (
    <div className='overflow-x-hidden'>
      <div>
        <div>
          <img src={banner} className='h-[600px] w-[100vw] block' alt="banner" />
        </div>
        <nav className='flex absolute top-[20px] left-[10px] text-white'>
          <div>
            <img src={Logo} className='w-[130px] h-[100px]' alt="logo" />
          </div>
          <NavigationLinks />
        </nav>
      </div>
      <Landing slogan={slogan} />
    </div>
  )
}

export default Nav
