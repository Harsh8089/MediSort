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

        var ads = $(".style__adBadge-text___2He6o")
        var ads_flag = 0
            if (ads['length'] != 0)
            {
                ads_flag = 1
                console.log("ads_flag")
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
            images: [],
            hyperLinks: [
                "https://www.1mg.com" + ($(hyperLink[0]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[1]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[2]).attr('href') || ''),
                "https://www.1mg.com" + ($(hyperLink[3]).attr('href') || '')
            ],
            src: Array.from({length: 4}, () => "Tata1mg")
        }

        var imgScripts = $("div.content script").first()    
        var string = imgScripts.text()
        var images = []
        string.split("\"").forEach(str => {
            if(str.startsWith("https://onemg.gumlet.io/")&&str.includes("h_150")){
                images.push(str.replace('\\',''))
            }
        })
        if(ads_flag == 1) {
            medicineDetails.images.push(images[0])
            medicineDetails.images.push(images[1])
            medicineDetails.images.push(images[3])
            medicineDetails.images.push(images[4])
        }
        else {
            medicineDetails.images.push(images[0])
            medicineDetails.images.push(images[1])
            medicineDetails.images.push(images[2])
            medicineDetails.images.push(images[3])   
        }

        return medicineDetails

    } catch (error) {
        console.log("Error while scraping Tata1mg", error)        
        return null
    }
}

module.exports = tata1mg