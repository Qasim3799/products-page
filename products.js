

form = document.querySelector('form')
searchInput = document.getElementById('search-input')
const container = document.getElementById('container')

const products = [
    { name: 'Nivea Body Cream', price: '#9,365', prevPrice: '#11,635', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/8523401/1.jpg?1668', category: 'skincare cream body lotion cosmetics' },

    { name: 'itel P65 Phone', price: '110,300', prevPrice: '', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/1253473/1.jpg?0887', category: 'mobile phones gadgets devices' },

    { name: 'Oraimo Boompop pro', price: '#53,801', prevPrice: '#69,958', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/5257114/1.jpg?2630', category: 'Phones accessories gadgets devices' },

    { name: 'Duravolt 16 inches', price: '#72,200', prevPrice: '110,000', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/8966663/1.jpg?5175', category: 'fans electrical appliances electronics'},

    { name: 'Nivea Black & White', price: '#4,400', prevPrice: '#6,125', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/9523401/1.jpg?6057', category: 'body cream lotion skincare cosmetics' },

    { name: 'Silver Crest 2L Industrial', price: '#23,500', prevPrice: '#25,596', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/9080814/1.jpg?9815', category: 'blender kitchen appliances electrical electronics' },

    { name: 'Itel Smart Watch fit', price: '#16,005', prevPrice: '#19,320', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/6269404/1.jpg?7229', category: 'smart watch devices clock gadgets devices' },

    { name: 'Eageat wireless 2.4Ghz', price: '#3,520', prevPrice: '#24,680', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/0775833/1.jpg?1994', category: 'mouse computer accessories' },

    { name: 'Philip fun101 Wireless', price: '#11,737', prevPrice: '#15,600', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1991804/1.jpg?7154', category: 'mobile phone torchlight phone' },

    { name: 'Sony playstation 5 PS5 slim', price: '832,491', prevPrice: '900,000', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/8966663/1.jpg?5175', category: 'ps5 console game' },
]

let searchedProducts;     // Variable for storing products that are being searched.

if(!localStorage.getItem('search')){
    searchedProducts = []
    localStorage.setItem('search', JSON.stringify(searchedProducts))
}


const filterProducts = event => {

    const searchedItem = searchInput.value.trim()

    searchedProducts = JSON.parse(localStorage.getItem('search'))
    searchedProducts.push(searchedItem)

    localStorage.setItem('search', JSON.stringify(searchedProducts))

    
    const pattern = new RegExp(searchedItem, 'i');


    const filteredProducts = products.filter((product) => {
        return pattern.test(product.name) || pattern.test(product.category)
     })

    container.innerHTML = ''

    if (filteredProducts.length > 0) {
        filteredProducts.forEach((item) => {
            container.innerHTML += `
                <div class='product'>
                    <img class='product-img' src='${item.img}'>
                    <p class='product-name'>${item.name}</p>
                    <p class='price'>${item.price}</p>
                    <p class='prev-price'>${item.prevPrice}</p>
                </div>
            `
        })
    }

    else {
        container.innerHTML = `<p id='not-found'>Product Not Found </p>`
    }


}



products.forEach((item) => {
    container.innerHTML += `
        <div class='product'>
            <img class='product-img' src='${item.img}'>
            <p class='product-name'>${item.name}</p>
            <p class='price'>${item.price}</p>
            <p class='prev-price'>${item.prevPrice}</p>
        </div>
    `
})
