// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerText;
  const quantityValue = quantity.value;
  const subtotalPrice = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalPrice;

  //console.log(subtotalElement);

  return subtotalElement;
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const products = getElementsByClassName('product');
  const productsPrice = product.querySelector('.price span');
  const productsQuantity = product.querySelector('.quantity input');
  const productsPriceValue = productsPrice.innerText;
  const productsQuantityValue = productsQuantity.value;
  const productsSubtotal = productsPriceValue * productsQuantityValue;
  const subtotalOfElements = product.querySelector('.subtotal span');
  subtotalOfElements.innerText = productsSubtotal;

  updateSubtotal(products);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
