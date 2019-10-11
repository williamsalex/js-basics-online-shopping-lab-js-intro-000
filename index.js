var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName : item, itemPrice : Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var string
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var i
    string = "In your cart, you have "
    for (i = 0; i < cart.length; i++) {
      string = string+`${cart[i][0][itemName]} at $${cart[i][1]}, `
    }
    string = string+"."
    return string
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
