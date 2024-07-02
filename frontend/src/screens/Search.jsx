import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import { MedicineListProvider } from '../context/MedicineContext';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext'

function Search() {
  const [displaySummary, setDisplaySummary] = useState(false)

  const toggle = () => {
      setDisplaySummary(prevVal => !prevVal)
  }

  return (
    <MedicineListProvider>
        <div className='bg-gradient-to-tr from-[#152d4f] via-[#112849] via-[#0d2343] via-[#091e3d] to-[#051937] font-bold w-[100vw] max-h-[1500px] flex flex-col items-center py-10'>
            <div className='flex items-center'>
              <InputBox />
              <div 
                className='relative left-[20vw] text-white cursor-pointer'
                onClick={toggle}
              >
                cart
              </div>
            </div>
            <CartProvider>
              {
                  displaySummary? (<Cart />) : (<Cards />)
              }
            </CartProvider>
        </div>
    </MedicineListProvider>
  );
}

export default Search
