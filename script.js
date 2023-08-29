let input = document.getElementById('check');
let basicPrice = document.getElementById('basic');
let proPrice = document.getElementById('pro');
let masterPrice = document.getElementById('master');

input.addEventListener('click', () => {
    if (input.checked) {
        basicPrice.textContent = 199.99;
        proPrice.textContent = 249.99;
        masterPrice.textContent = 399.99;
    } else {
        basicPrice.textContent = 19.99;
        proPrice.textContent = 24.99;
        masterPrice.textContent = 39.99;
    }
})