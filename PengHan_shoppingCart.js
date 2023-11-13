module.exports = {
  cart: [],

  // Function to add a beverage to the cart
  addBeverageToCart(beverage) {
    this.cart.push(beverage);
  },

  // Function to remove a beverage from the cart
  removeBeverageFromCart(beverage) {
    const index = this.cart.indexOf(beverage);
    if (index != -1) {
      this.cart.splice(index, 1);
    }
  },

  // Function to view the contents of the cart
  viewCart() {
    return this.cart;
  },

  // Function to update the quantity of a beverage in the cart
  updateQuantityInCart(beverage, newQuantity) {
    const index = this.cart.indexOf(beverage);
    if (index != -1) {
      this.cart[index].quantity = newQuantity;
    }
  },

  // Function to calculate the total price of items in the cart
  calculateTotalPrice() {
    let total = 0;
    for (const beverage of this.cart) {
      total += beverage.price * beverage.quantity;
    }
    return total;
  },

  // Function to simulate the checkout process
  checkout() {
    const total = this.calculateTotalPrice();
    return `Your total is $${total}. Payment has been processed. Thank you for your order!`;
  },

  // Function to clear the cart
  clearCart() {
    this.cart = [];
  },
};
