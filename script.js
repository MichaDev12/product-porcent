const products = document.querySelector('.products');
const garrafaPrices = document.querySelector('.garrafaPrices');
const percentajePrices = document.querySelector('.percentajePrices');
const finalPrices = document.querySelector('.finalPrices');
const productInput = document.querySelector('#product');
const priceInput = document.querySelector('#price');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const productName = productInput.value;
  const productPrice = priceInput.value;
  productInput.value = '';
  priceInput.value = '';

  const product = document.createElement('div');
  const price = document.createElement('div');
  const percentajePrice = document.createElement('div');
  const finalPrice = document.createElement('div');

  product.textContent = productName;
  products.appendChild(product);
  price.textContent = productPrice;
  garrafaPrices.appendChild(price);
});
