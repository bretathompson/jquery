
const cartCardContainer = document.querySelector('#cartCardContainer');

function displayCartProducts() {   
    clearStorageAndCart(); 

    cartCardContainer.innerHTML = '';
    
    if (cart.length > 0) {

        cart.forEach((cartItem) => {
            cartCardContainer.innerHTML += `
                <div class="cartCard">
                    <div class="cartCardFlex">
                        <img src="${cartItem.image}" alt="${cartItem.description}">
                        <p class="cartTitle">${cartItem.name}</p>
                        <p class="cartDescription">${cartItem.description}</p>
                        <div class="cartQuantity">
                            <input type="number" value="${cartItem.quantity}" min="1" max="5">
                        </div>
                        <p class="cartPrice">&dollar;${cartItem.price}</p>
                    </div>
                    <p class="textAlignRight removeMargins"><a href="#" class="removeLink" id="${cartItem.id}">Remove</a></p>
                </div>
            `;
            removeFromCart();
        });

    } else {
        cartCardContainer.innerHTML = '<p id="emptyCart">The cart is empty</p>';
    }
}
displayCartProducts();


let subtotal;
let shipping;
let tax;
let total;

function calculateOrderSummary() {
    subtotal = 0;
    shipping = 0;
    tax = 0;
    total = 0;

    clearStorageAndCart();

    cart.forEach((cartItem) => {
        subtotal += cartItem.price;
        shipping += 1;
    });

    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;
}




function displayOrderSummary() {
    calculateOrderSummary();

    const sideBarContainer = document.querySelector('#sideBarContainer');

    sideBarContainer.innerHTML = `
        <div class="tableRow">
            <div class="tableCell"> 
                Subtotal
            </div>
            <div class="tableCell">
                &dollar; ${subtotal.toFixed(2)}
            </div>
        </div>
        <div class="tableRow">
            <div class="tableCell"> 
                Shipping
            </div>
            <div class="tableCell">
                &dollar; ${shipping.toFixed(2)}
            </div>
        </div>
        <div class="tableRow">
            <div class="tableCell borderBottom">Sales Tax</div>
            <div class="tableCell borderBottom">
                &dollar; ${tax.toFixed(2)}
            </div>
        </div>
        <div class="tableRow">
            <div class="tableCell">Total</div>
            <div class="tableCell bold">
                &dollar; ${total.toFixed(2)}
            </div>
        </div>
    `;
}
displayOrderSummary();







function calculateOrderSummary() {
    subtotal = 0;
    shipping = 0;
    tax = 0;
    total = 0;

    clearStorageAndCart();

    cart.forEach((cartItem) => {
        // Modify the following line to multiply the quantity by the item price
        subtotal += cartItem.price * cartItem.quantity;

        // Modify the following line to multiply the shipping cost by the item quantity
        shipping += 1 * cartItem.quantity;
    });

    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;
}


// Task 4: Update Order Summary to Include the Quantity:
// We have one last thing we need to do with the quantity. We need to add the quantity to the Order Summary on the cart.html page so that the total amount 
//     due is correct.
// 1. The calculateOrderSummary function on the cart.js page is used to calculate the subtotal, shipping, tax, and total. We need to multiply the quantity 
//     of an item by its item price to calculate the correct subtotal. In the forEach loop within the calculateOrderSummary function, the first statement 
//     adds the prices of each item together and assigns it to the subtotal variable. This would be a good place to add our quantity. Modify the subtotal 
//     statement to multiply the cart item's price by the cart item's quantity and assign that to the subtotal variable using the addition assignment operator
// 2. The Kevin's Knick Knacks site charges $1 for every item that is shipped. We need to update the shipping charge for each item that has been added 
//     multiple times to the shopping cart. The statement directly below the one you modified in step 1 calculates the shipping cost. We need to multiply 
//     this value by the cart item's quantity as well. Modify the shipping statement to multiply the 1 dollar amount by the cart item's quantity

// The money amounts should now all be correct. Here is what the output would look like if you add 4 Squishy Caterpillar items to the shopping cart:
// The money amounts should be:
// Subtotal -> $39.96
// Shipping -> $4.00
// Sales Tax -> 2.68
// Total -> $46.64



<!-- Inside the displayCartProducts function in cart.js -->
cart.forEach(cartItem => {
    // Existing code...

    // Modify the following line to include class and id attributes
    cartContent += `
        <!-- Other elements... -->
        <div class="cartQuantity">
            <input
                class="quantityNumberInput"
                id="${cartItem.id}"
                type="number"
                value="${cartItem.quantity}"
                min="1"
                max="5"
            />
        </div>
        <!-- Other elements... -->
    `;

    // Other code...
});

