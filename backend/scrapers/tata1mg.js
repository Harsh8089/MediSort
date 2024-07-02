const cheerio = require('cheerio')
const urls = require('../const')
const onemg = urls['tata1mg']

const tata1mg = async(medicine) => {
    try {
        var url = onemg['url'] + medicine

        let response = await fetch(url, {
            headers: {
                'Origin': onemg['Origin'],
                'Referer': url,
                'User-Agent': onemg['User-Agent']
            }
        })
        if(!response.ok) {
            throw new Error('Failed to fetch data')
        }

        var body = await response.text()
        var $ = cheerio.load(body)

        let med_name, price, hyperLink

        var med_name1 = $(".style__pro-title___3G3rr")

        if(med_name1.length === 0) {
            med_name = $(".style__pro-title___3zxNC")
            price = $('.style__price-tag___B2csA')
            hyperLink = $(".style__horizontal-card___1Zwmt").children('a')
        } else {
            med_name = med_name1
            price = $('.style__price-tag___KzOkY')
            hyperLink = $(".style__product-link___1hWpa")
        }

        let medicineDetails = {
            medicines: [
                $(med_name[0]).text(),
                $(med_name[1]).text(),
                $(med_name[2]).text(),
                $(med_name[3]).text()
            ],
            prices: [
                $(price[0]).text(),
                $(price[1]).text(),
                $(price[2]).text(),
                $(price[3]).text()
            ],
            hyperLinks: [
                "https://www.1mg.com" + ($(hyperLink[0]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[1]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[2]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[3]).attr('href') || '')
            ]
        }

        return medicineDetails

    } catch (error) {
        console.log("Error while scraping Tata1mg", error)        
        return null
    }
}

module.exports = tata1mg