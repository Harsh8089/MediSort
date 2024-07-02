const cheerio = require('cheerio')
const urls = require('../const')
const pharmeasy_ = urls['pharmeasy']


const pharmeasy = async(medicine) => {
    try {
        var url = pharmeasy_['url'] + medicine
        response = await fetch(url, {
            headers: {
                'Origin': pharmeasy_['Origin'],
                'Referer': url,
                'User-Agent': pharmeasy_['User-Agent']
            }
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const body = await response.text()
        const $ = cheerio.load(body)

        let med_name = $(".ProductCard_medicineName__8Ydfq")  
        let image = $('img.ProductCard_productImage__dq5lq')
        let hyperLink = $(".ProductCard_medicineUnitWrapper__eoLpy.ProductCard_defaultWrapper__nxV0R")

        let medicineDetails = {
            medicines: [
                $(med_name[0]).text(),
                $(med_name[1]).text(), 
                $(med_name[2]).text(), 
                $(med_name[3]).text()
            ],
            prices: [
                
            ],
            images: [
                $(image[0]).attr('src'), 
                $(image[1]).attr('src'), 
                $(image[2]).attr('src'), 
                $(image[3]).attr('src'), 
            ],
            hyperLinks: [
                "https://www.pharmeasy.in"+$(hyperLink[0]).attr('href'),
                "https://www.pharmeasy.in"+$(hyperLink[1]).attr('href'),
                "https://www.pharmeasy.in"+$(hyperLink[2]).attr('href'),
                "https://www.pharmeasy.in"+$(hyperLink[3]).attr('href')
            ],
            src: Array.from({length: 4}, () => "Pharmeasy")
        }
        let priceParent = $(".ProductCard_priceContainer__dqj7Q")
        let price = $(".ProductCard_ourPrice__yDytt")
        let prices2 = $(".ProductCard_gcdDiscountContainer__CCi51")
        let pr_idx = 0
        let pr2_idx = 0
        for(var i = 0; i < 4; i++) {
            let childText = $(priceParent[i]).text();
            if (childText.charAt(0) === "M") medicineDetails.prices.push($(prices2[pr2_idx++]).children('span').first().text())
            else medicineDetails.prices.push($(price[pr_idx++]).text())
        }
        
        return medicineDetails
    } catch (error) {
        console.log("Error while scraping Pharmeasy", error)        
        return null
    }
}

module.exports = pharmeasy








