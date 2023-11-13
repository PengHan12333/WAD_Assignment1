# Shopping Cart Module

This module provides a set of functions to manage a shopping cart in a JavaScript application. It allows users to add, remove, view, update quantities, calculate the total price, simulate checkout, and clear the cart.

## Functions

- `addBeverageToCart(beverage)`: Adds a beverage to the cart.

- `removeBeverageFromCart(beverage)`: Removes a specific beverage from the cart.

- `viewCart()`: Displays the current contents of the cart.

- `updateQuantityInCart(beverage, newQuantity)`: Updates the quantity of a beverage in the cart.

- `calculateTotalPrice()`: Calculates the total price of items in the cart.

- `checkout()`: Simulates the checkout process and provides a message with the total price.

- `clearCart()`: Clears the cart, removing all items.


## Usage

1. **Importing the Module:**

    ```javascript
    const shoppingCart = require("./PengHan_shoppingCart");
    ```

2. **Sample Beverages:**

    Define beverages to add to the cart:

    ```javascript
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
    ```

3. **Adding Beverages:**

    Add beverages to the cart:

    ```javascript
    shoppingCart.addBeverageToCart(beverage1);
    shoppingCart.addBeverageToCart(beverage2);
    ```

4. **View Cart Contents:**

    Display the contents of the cart:

    ```javascript
    console.log("Cart contents:", shoppingCart.viewCart());
    ```

5. **Update Quantity:**

    Update the quantity of a beverage in the cart:

    ```javascript
    shoppingCart.updateQuantityInCart(beverage1, 4);
    ```

6. **Calculate Total Price:**

    Calculate the total price of items in the cart:

    ```javascript
    const total = shoppingCart.calculateTotalPrice();
    console.log("Total price:", total);
    ```

7. **Checkout:**

    Simulate the checkout process:

    ```javascript
    const checkoutMessage = shoppingCart.checkout();
    console.log(checkoutMessage);
    ```

8. **Clear Cart:**

    Clear the cart:

    ```javascript
    shoppingCart.clearCart();
    console.log("Cart contents after clearing:", shoppingCart.viewCart());
    ```

