export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    //this cart is the cart array we created in cart.js
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}