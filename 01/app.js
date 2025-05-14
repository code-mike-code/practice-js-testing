function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

function getTotalPrice(productList) {
    return productList.reduce( (acc, product) => {
        const priceWithDiscount = product.price * (1 - product.discount)
        return acc + (priceWithDiscount * product.count);
    }, 0);
}

const totalPrice = Math.round(getTotalPrice( getProductList()) * 100 ) / 100;
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)