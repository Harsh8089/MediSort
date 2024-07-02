const express = require('express')
const tata1mg = require('./scrapers/tata1mg')
const cors = require('cors')
const pharmeasy = require('./scrapers/pharmeasy')

const app = express()
app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.json())


app.post('/medicine', async (req, res) => {
    var medicine = req.body.name 
    const tata1mgDetails = await tata1mg(medicine)
    const pharmeasyDetails = await pharmeasy(medicine)
    res.status(200).json({
        success: true,
        tata1mg: tata1mgDetails,
        pharmeasy: pharmeasyDetails
    })
})

var PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})  
