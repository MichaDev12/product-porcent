const products = document.querySelector('.products');
const garrafaPrices = document.querySelector('.garrafaPrices');
const percentajePrices = document.querySelector('.percentajePrices');
const finalPrices = document.querySelector('.finalPrices');
const productInput = document.querySelector('#product');
const priceInput = document.querySelector('#price');
const addProduct = document.querySelector('#addProduct');
const deleteLast = document.querySelector('#deleteLast');
const reset = document.querySelector('#reset');

let decision = true;

addProduct.addEventListener('click', () => {
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

reset.addEventListener('click', () => {
  const titleOne = document.createElement('div');
  const titleTwo = document.createElement('div');
  const titleThree = document.createElement('div');
  const titleFour = document.createElement('div');
  while (products.firstChild) {
    products.removeChild(products.firstChild);
    garrafaPrices.removeChild(garrafaPrices.firstChild);
    percentajePrices.removeChild(percentajePrices.firstChild);
    finalPrices.removeChild(finalPrices.firstChild);
  }
  titleOne.textContent = 'Nombre Producto';
  titleOne.classList.toggle('title');
  products.appendChild(titleOne);

  titleTwo.textContent = 'Precio Original';
  titleTwo.classList.toggle('title');
  garrafaPrices.appendChild(titleTwo);

  titleThree.textContent = 'Unidad + 70%';
  titleThree.classList.toggle('title');
  percentajePrices.appendChild(titleThree);

  titleFour.textContent = 'Precio Final';
  titleFour.classList.toggle('title');
  finalPrices.appendChild(titleFour);

});

deleteLast.addEventListener('click', () => {
  if (products.childElementCount > 1) {
    products.removeChild(products.lastChild);
    garrafaPrices.removeChild(garrafaPrices.lastChild);
    percentajePrices.removeChild(percentajePrices.lastChild);
    finalPrices.removeChild(finalPrices.lastChild);
  }
  if (decision) {
    decision = false;
  } else {
    decision = true;
  }
});
