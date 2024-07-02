import React, { useEffect, useState, useContext } from 'react';
import { MedicineListContext } from '../context/MedicineContext';
import Card from './Card';

function Cards() {
  const { medicines } = useContext(MedicineListContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (medicines && medicines.success) {
      let tempData = [];
      if (medicines.tata1mg) {
        let details = Object.values(medicines.tata1mg);
        for (let i = 0; i < details[0].length; i++) {
          let row = [];
          for (let j = 0; j < details.length; j++) {
            row.push(details[j][i]);
          }
          tempData.push(row);
        }
      }
      if (medicines.pharmeasy) {
        let details = Object.values(medicines.pharmeasy);
        for (let i = 0; i < details[0].length; i++) {
          let row = [];
          for (let j = 0; j < details.length; j++) {
            row.push(details[j][i]);
          }
          tempData.push(row);
        }
      }
      setData(tempData); // Update the state with the collected data
    }
  }, [medicines]);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className='flex flex-wrap px-[10px] justify-center mt-[50px]'>
      {
        medicines && medicines.success ? (
        data.map((medicine, index) => (
            <Card 
                key={index}
                name={medicine[0]}
                price={medicine[1]}
                img={medicine[2]}
                link={medicine[3]}
                src={medicine[4]}
            />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cards;
