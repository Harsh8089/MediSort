const express = require('express')
const tata1mg = require('./scrapers/tata1mg')
const pharmeasy = require('./scrapers/pharmeasy')

const app = express()
app.use(express.json())


app.get('/', async (req, res) => {
    var medicine = req.body.name || 'crocin'
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
