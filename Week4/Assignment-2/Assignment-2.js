function ajax(src, callback) {
    // your code here
    fetch(src, {method:'GET'})
        .then(response => response.json())
        .then(data => callback(data));
}

function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    document.body.innerHTML = '';

    data.forEach(item => {
        const product = document.createElement('div');
        product.textContent = `${item.name}, ${item.price}, ${item.description}`;
        document.body.appendChild(product);
    });
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page