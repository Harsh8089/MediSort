async function useMedicineList(medicine) {
    try {
        var name = medicine
        const response = await fetch('http://localhost:4000/medicine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
        const data = await response.json() 
        if(data && data.success) {
            return data
        }

    } catch (error) {
        console.log(error)
    }
    return null
}

export default useMedicineList