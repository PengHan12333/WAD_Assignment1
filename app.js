const shoppingCart = require("./PengHan_shoppingCart"); // Import the shopping cart module

// Sample beverages to add to the cart
const beverage1 = {
  name: "Coffee",
  price: 2.5,
  quantity: 2,
};

const beverage2 = {
  name: "Tea",
  price: 1.5,
  quantity: 3,
};

// Add beverages to the cart
shoppingCart.addBeverageToCart(beverage1);
shoppingCart.addBeverageToCart(beverage2);

// View the cart
console.log("Cart contents:", shoppingCart.viewCart());

// Update the quantity of a beverage
shoppingCart.updateQuantityInCart(beverage1, 4);

// View the updated cart
console.log("Updated cart contents:", shoppingCart.viewCart());

// Calculate the total price
const total = shoppingCart.calculateTotalPrice();
console.log("Total price:", total);

// Simulate the checkout process
const checkoutMessage = shoppingCart.checkout();
console.log(checkoutMessage);

// Clear the cart
shoppingCart.clearCart();
console.log("Cart contents after clearing:", shoppingCart.viewCart());
