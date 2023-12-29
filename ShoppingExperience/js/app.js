

let cart = [];

const sideBarContainer = document.querySelector('#sideBarContainer');

function clearStorageAndCart() {
    cart = [];

    let currentStorage = JSON.parse(localStorage.getItem('CART'));

    if (currentStorage) {
        cart = currentStorage;
    }
}


function removeFromCart() {
    let removeLinks = document.getElementsByClassName('removeLink');

    for (let i = 0; i < removeLinks.length; i++) {
        removeLinks[i].addEventListener('click', (event) => {
            clearStorageAndCart();

            let selectedProduct = cart.find( (cartItem) => cartItem.id == event.target.id);

            let itemIndex;

            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == selectedProduct.id) {
                itemIndex = cart.indexOf(cart[j]);
                }
            }
                
            cart.splice(itemIndex, 1);
                        

            localStorage.setItem('CART', JSON.stringify(cart) );

            if (typeof displayCart === "function") {
                displayCart();
            }

            if (typeof displayCartProducts === "function") {
                displayCartProducts();
            }

            if (cart.length == 0) {
                localStorage.clear();
            }

            if (typeof displayOrderSummary === "function") {
                displayOrderSummary();
            }

        });
    }
}


function clearCart() {
    const clearCartButton = document.getElementById('clearCartButton');

    clearCartButton.addEventListener('click', () => {
        cart = [];

        localStorage.clear();

        if (typeof displayCart === "function") {
            displayCart();
        }

        if (typeof displayCartProducts === "function") {
            displayCartProducts( );
        }

        if (typeof displayOrderSummary === "function") {
            displayOrderSummary();
        }

    });
}
clearCart();



// Task 3: Create the Update Quantity Function:
// The product quantity will now update when you click the Add to Cart button multiple times. However, when you click the up and down arrows on the number 
// input controller to adjust the quantity, the information is not retained between pages because the cart and local storage aren't being updated. In this 
// task, we will create a new function that will remedy the problem. We will create this new function on the app.js page since it will be applied to both 
// the shop.html and cart.html pages.

// 1. At the bottom of the app.js page, create a new function named 'updateQuantity'. The function will not have any parameters. All code for the 
//     rest of this task will go inside the function
// 2. In order to manipulate the quantity number inputs, we first need to grab them from our HTML. Create a new variable named 'quantityNumberInput'
//     A. Use getElementsByClassName to grab any element with the class of quantityNumberInput
// 3. Whenever you use getElementsByClassName, the result is placed into a collection. Because of this, we have to loop through the collection to 
//     grab each individual input. Create a FOR loop that loops through the items stored in the quantityNumberInput variable
// 4. Inside the loop, use addEventListener to add a 'change' event to each input. We will use the change event because it will detect if anything 
//     has changed in the number input box. The change event will fire both when the user clicks the up or down arrow and when the user types a number in the box.
// 5. Apply an arrow function with a parameter named 'event' to the change event listener. The rest of the code will be located inside the change event
// 6. We don't want the value of the number input box to go higher than five since the highest number of products that a user can buy is 5. To prevent this, 
//     do the following:
//     A. First we need to know what the current value of the box is. Create a variable named 'quantityChanged' and assign it to the current iterated item's 
//         value attribute (quantityNumberInput[i].value)
//     B. Next, create an IF statement that checks if the quantityChanged variable is greater than 5. If it is, set the quantityChanged variable to 
//         five (inside of the IF statement). This will force any number that is above 5 to become a 5 thus limiting how many items of a product the user can purchase
// 7. Next, we need to find the selected product in the cart array so we can update it's quantity. Create a new variable named 'itemToChange' directly 
//     below the IF statement and assign it to the following:
//     A. Apply the find( ) method to the cart array to find the item where the id of the item is the same as the id of the item that was clicked on. 
//     Use the following code to accomplish this: let itemToChange = cart.find( (item) => item.id == event.target.id);
// 8. Now we can update the quantity of the item. Set the quantity of the itemToChange variable to the quantityChanged variable.
//     A. We do have a small problem here though. The value inside the quantityChanged variable could be a string instead of a number. To force the 
//         value to be a number, you can either use the parseInt( ) method, or you can simply place a plus symbol in front of the variable name (no spaces). 
//         We will use the plus symbol. When finished, your code should look like this: itemToChange.quantity = +quantityChanged;
// 9. Now that we have updated the quantity property in the cart array, we will use the cart array to update the local storage. Update the local storage 
//     with the cart array using the setItem method. Don't forget to use JSON.stringify to turn the array of objects into a string. Also, remember that the 
//     name of the key that is storing our information inside local storage is named CART.
// 10. After we update the cart array and local storage, we have to call the displayOrderSummary( ) function to update the Order Summary information displayed 
//     on the page. However, we only want to do this if the function exists. Otherwise, we will get an error that the browser can't find the function. We 
//     will remedy this by surrounding the function call with an IF statement that checks whether the displayOrderSummary function exists. We did this in 
//     previous exercises.
//     A. Create an IF statement
//     B. For the condition, check whether the displayOrderSummary function exists by using this code: typeof displayOrderSummary == "function"
//     C. Call the displayOrderSummary function inside the IF statement
// 11. We need to call the updateQuantity function in two places: Firstly, when the Order Summary is displayed (displayOrderSummary) on the cart.js page. 
//     Secondly, when the shopping cart is displayed (displayCart) on the shop.js page. This way, the quantity inputs will always be up-to-date
//     A. Add a function call to the updateQuantity function at the very top of the displayOrderSummary function on the cart.js page. We want the call to 
//         be made at the top so the quantity will be updated before we calculate the summary and display it on the page
//     B. Add another function call to the updateQuantity function directly below the removeFromCart function call inside the displayCart function on the 
//         shop.js page

// You should now be able to change the quantity of a product in the cart and the quantity information will be retained when you move between pages or 
//     refresh the page.




// Inside the app.js file

// ...

// 1. Create a new function named 'updateQuantity'.
function updateQuantity() {
    // 2. In order to manipulate the quantity number inputs, grab them from the HTML.
    let quantityNumberInput = document.getElementsByClassName('quantityNumberInput');

    // 3. Loop through the quantity number inputs.
    for (let i = 0; i < quantityNumberInput.length; i++) {
        // 4. Add a 'change' event to each input.
        quantityNumberInput[i].addEventListener('change', (event) => {
            // 5. Arrow function with a parameter named 'event'.
            event.preventDefault();

            // 6. Limit the quantity value to 5.
            let quantityChanged = quantityNumberInput[i].value;
            if (quantityChanged > 5) {
                quantityChanged = 5;
            }

            // 7. Find the selected product in the cart array.
            let itemToChange = cart.find((item) => item.id == event.target.id);

            // 8. Update the quantity of the item.
            itemToChange.quantity = +quantityChanged;

            // 9. Update the local storage with the cart array.
            localStorage.setItem('CART', JSON.stringify(cart));

            // 10. Call the displayOrderSummary function if it exists.
            if (typeof displayOrderSummary == 'function') {
                displayOrderSummary();
            }
        });
    }
}

// 11. Call the updateQuantity function where needed.

// ...

// Example: Calling updateQuantity in displayOrderSummary function on cart.js
function displayOrderSummary() {
    // Call the updateQuantity function at the top
    updateQuantity();

    // ... (existing code)
}
