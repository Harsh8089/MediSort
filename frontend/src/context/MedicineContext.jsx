import React, { useState, createContext } from 'react'

const MedicineListContext = createContext()

function MedicineListProvider({children}) {
    
    const [medicines, setMedicines] = useState({})

  return (
      <MedicineListContext.Provider value={{ medicines, setMedicines }}>
        {children}
      </MedicineListContext.Provider>
  )
}

export { MedicineListContext, MedicineListProvider }


