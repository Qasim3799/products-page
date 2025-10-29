form = document.querySelector('form')
searchItem = document.getElementById('search-input')
const container = document.getElementById('container')

const products = [
    {name: 'Nivea Body Cream', price: '#9,365', prevPrice: '#11,635', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/8523401/1.jpg?1668'}, 

    {name: 'itel P65 Phone', price: '110,300', prevPrice: '', img: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/1253473/1.jpg?0887'}
]


const filterProducts = event => {
    event.preventDefault();
    
    searchedItem = searchItem.value

    const output = products.filter((item) => {
        return item.name.toLowerCase().includes(searchedItem)
    })

    container.innerHTML = ''

    
    output.forEach((item)=> {
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



products.forEach((item)=> {
    container.innerHTML += `
        <div class='product'>
            <img class='product-img' src='${item.img}'>
            <p class='product-name'>${item.name}</p>
            <p class='price'>${item.price}</p>
            <p class='prev-price'>${item.prevPrice}</p>
        </div>
    `
})