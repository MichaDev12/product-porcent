const products = document.querySelector('.products');
const garrafaPrices = document.querySelector('.garrafaPrices');
const percentajePrices = document.querySelector('.percentajePrices');
const finalPrices = document.querySelector('.finalPrices');
const productInput = document.querySelector('#product');
const priceInput = document.querySelector('#price');
const button = document.querySelector('button');

let decision = true;

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
  if (productName == '') {
    product.textContent = 'Producto';
  } else {
    product.textContent = productName;
  }
  product.classList.toggle('productName');
  products.appendChild(product);

  // product price
  price.textContent = productPrice;
  price.classList.toggle('garrafaPrice');
  garrafaPrices.appendChild(price);

  // price with 70%
  let unitPrice = productPrice / 4;
  let porcentaje = unitPrice + (70 * unitPrice) / 100;
  percentajePrice.textContent = porcentaje;
  percentajePrice.classList.toggle('percentajePrice');
  percentajePrices.appendChild(percentajePrice);

  // final price
  finalPrice.textContent = porcentaje * 4;
  finalPrice.classList.toggle('finalPrice');
  finalPrices.appendChild(finalPrice);

  //background-color
  if (decision) {
    product.classList.toggle('purple');
    price.classList.toggle('purple');
    percentajePrice.classList.toggle('purple');
    finalPrice.classList.toggle('purple');
    decision = false;
  } else {
    product.classList.toggle('blue');
    price.classList.toggle('blue');
    percentajePrice.classList.toggle('blue');
    finalPrice.classList.toggle('blue');
    decision = true;
  }
});
