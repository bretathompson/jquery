
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
                            <input class='quantityNumberInput' id="${cartItem.id}" type="number" value="${cartItem.quantity}" min="1" max="5">
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
        subtotal += cartItem.price * cartItem.quantity;
        shipping += 1 * cartItem.quantity;
    });

    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;
}




function displayOrderSummary() {
    updateQuantity();
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




// Task 2: Create the slidedown Effect: In order for the slidedown effect to work, we need to first hide the HTML div and then use the jQuery slideDown 
// method to display the message. The slidedown will only be on the cart.html page so we will add the jQuery to the cart.js page. The code will add a 
// click event which will fire a slideDown event.
// 1. We want the code to run immediately when the page loads. Add a document ready function at the bottom of the cart.js page
// 2. The first thing we need to do is use jQuery to hide the thank you message. Inside the document ready function, use the jQuery hide( ) method to 
//     hide the checkoutThankYou div
// 3. Next, we will add a click event to the Checkout button. Directly below the hide statement, use jQuery to select the Checkout button and add a 
//     jQuery click event. Provide a function without parameters inside the click event
// 4. Finally, we will create the slide down effect. Inside the function, use a jQuery selector to select the thank you div and attach the slideDown( ) 
//     method to create the slide down effect


// Task 3: Fix Thank You Message Without Items in the Cart: 
// 1. The slideDown works great, but we have one small problem. When the user clicks the Checkout button without anything in the cart, the message 
//     still thanks for the user for their order. It would be better if we display a different message. Directly above the slideDown statement, create 
//     an IF statement that checks whether the subtotal variable is equal to zero. This will tell us that the cart is empty
// 2. Inside the IF statement, use a selector to select the thank you message and attach the .html( ) method to it. Change the text of the div to 
//     'The cart is currently empty.'
// 3. The message is still hidden. Create a new statement inside the IF statement directly below the .html( ) statement that uses the slideDown method 
//     to display the message
// 4. Add an ELSE statement and move the original slideDown statement inside to display the original message when the subtotal variable is not zero



$(document).ready(function () {
    // Hide the thank you message initially
    $('#checkoutThankYou').hide();

    // Add click event to the Checkout button
    $('#checkoutButton').click(function () {
        // Check if the cart is empty
        if (subtotal === 0) {
            // Display a different message for an empty cart
            $('#checkoutThankYou').html('The cart is currently empty.').slideDown();
        } else {
            // Display the original thank you message
            $('#checkoutThankYou').slideDown();
        }
    });
});



$(document).ready(function () {
    // Hide the thank you message initially
    $('#checkoutThankYou').hide();

    // Add click event to the Checkout button
    $('#checkoutButton').click(function () {
        // Check if the cart is empty
        if (subtotal === 0) {
            // Display a different message for an empty cart
            $('#checkoutThankYou').html('The cart is currently empty.').slideDown();
        } else {
            // Display the original thank you message
            $('#checkoutThankYou').slideDown();
        }
    });
});

