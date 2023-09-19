function ajax(src, callback) {
    // your code here
    fetch(src, {method:'GET'})
        .then(response => response.json())
        .then(data => render(data));
}

function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    document.body.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const product = document.createElement('div');
        product.textContent = `${data[i].name}, ${data[i].price}, ${data[i].description}`;
        document.body.appendChild(product);
    }
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page