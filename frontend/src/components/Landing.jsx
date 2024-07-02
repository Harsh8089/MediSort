import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Landing({ slogan }) {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: ['', slogan],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [slogan])

  return (
    <div className='absolute top-[25vh]'>
      <div className='flex flex-col w-[100vw] justify-center items-center'>
        <p className='text-[130px] text-white'>
          Medi<span className='text-black'>Sort</span>
        </p>
        <div className='text-[45px] mt-[-30px] text-white tracking-wide'>
          <span ref={typedRef}></span>
        </div>
      </div>
    </div>
  )
}

export default Landing
