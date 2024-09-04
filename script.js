const products = document.querySelector('.products');
const garrafaPrices = document.querySelector('.garrafaPrices');
const percentajePrices = document.querySelector('.percentajePrices');
const finalPrices = document.querySelector('.finalPrices');
const productInput = document.querySelector('#product');
const priceInput = document.querySelector('#price');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const productName = productInput.value;
  const productPrice = Number(priceInput.value);
  productInput.value = '';
  priceInput.value = '';

  const product = document.createElement('div');
  const price = document.createElement('div');
  const percentajePrice = document.createElement('div');
  const finalPrice = document.createElement('div');

  // product name
  product.textContent = productName;
  products.appendChild(product);

  // product price
  price.textContent = productPrice;
  garrafaPrices.appendChild(price);

  // price with 70%
  let unitPrice = productPrice / 4;
  let porcentaje = unitPrice + (70 * unitPrice) / 100;
  percentajePrice.textContent = porcentaje;
  percentajePrices.appendChild(percentajePrice);

  // final price
  finalPrice.textContent = porcentaje * 4;
  finalPrices.appendChild(finalPrice);
});
