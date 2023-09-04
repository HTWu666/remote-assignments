function avg(data) {
    const size = data.size;
    const products = data.products;
    let totalPrice = 0;

    for (let i = 0; i < size; i ++) {
        totalPrice += products[i].price;
    }

    const avgPrice = totalPrice / size;

    return avgPrice;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
); // should print the average price of all products