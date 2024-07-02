import React, { useState, useContext, useEffect } from 'react'
import searchIcon from '../assets/searchIcon.png' 
import useMedicineList from '../hooks/useMedicineList'
import { MedicineListContext } from '../context/MedicineContext'

function InputBox() {
  const [medicineName, setMedicineName] = useState("")
  
  const { setMedicines } = useContext(MedicineListContext)
  const fetchMedicineList = async() => {
      const data = await useMedicineList(medicineName)
      if(data.success) setMedicines(data)   
  }

  return (
    <div>
      <div className='w-[776px] h-[38px] flex justify-between items-center bg-white rounded-[13px]'>
          <input
            type='text'
            placeholder='Search for a Medicine...'
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className='w-[750px] h-[38px] text-[18px] px-[13px] py-[5px] outline-none border-none rounded-[13px]'
          />
          <div 
            className='h-full rounded-[13px] flex items-center'
            onClick={fetchMedicineList}
          >
                <img 
                    src={searchIcon} 
                    className='h-[30px] pr-[5px] cursor-pointer'     
                />
          </div>
      </div>
      
    </div>
  )
}

export default InputBox