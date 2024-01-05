

const cardContainer = document.querySelector('#cardContainer');
function addProducts() {
    let cardInfo = '';
    

    products.forEach((individualCard) => {
      cardInfo += `
            <div class="card" id="cardNumber${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}" type="button">Add to Cart</button>
                </div>
            </div>`;
    });
    cardContainer.innerHTML = cardInfo;
}
addProducts();


function saveToLocalStorage() {
    let cartButton = document.getElementsByClassName("cartButton");

    for (let i = 0; i < cartButton.length; i++) {
        let addButton = cartButton[i];

        addButton.addEventListener("click", function(event) {
            event.preventDefault();

            let cartItemSearch = cart.find((cartItem) => cartItem.id == selectedProduct.id);
            if (cartItemSearch) {
                cartItemSearch.quantity++;
            } else{
                cart.push({selectedProduct, quantity: 1 });
            };

            localStorage.setItem("CART", JSON.stringify(cart));

            displayCart();
        });
    }
}
saveToLocalStorage();


function displayCart() {
    clearStorageAndCart();
    sideBarContainer.innerHTML = "";

    cart.forEach((cartItem) => {
        sideBarContainer.innerHTML += `
            <div class="tableRow">
                <div class="tableCell">
                    ${cartItem.name} 
                </div>
                <div class="tableCell">
                    &dollar; ${cartItem.price}
                </div>
            </div>
            <div class="tableRow">            
                <div class="tableCell borderBottom">
                    <input class='quantityNumberInput' id="${cartItem.id}" type='number' value='${cartItem.quantity}'
                    minimum='1' maximum='5'/>                
                </div> 
                <a href="#" class="tableCell borderBottom removeLink" id="${cartItem.id}">Remove</a>
            </div>`;
    });
    removeFromCart();
    updateQuantity();

}
displayCart();
            


const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});




// Task 1: Add the Quantity Number Input to the Current Cart:
// 1. The displayCart( ) function in the shop.js file is used to display the shopping cart products in the sidebar of the shop.html page. 
// This is where we want to include our number input. We will place our input inside the empty tableCell div that is located inside the 
// second div with the class of tableRow. Inside the displayCart function, create a new <input> tag. Place the input tag inside the first 
// tableCell div that is inside the second tableRow div. The correct tableCell div is currently empty and has a class of tableCell and 
// borderBottom (<div class="tableCell borderBottom"></div>). Create the new <input> tag and add the following attributes and values:
//     A. Include a class named 'quantityNumberInput'. This class will be used later to select the input element and update the value of the number field
//     B. Include an id. Assign it the value of the id of the current cart item that the forEach loop is iterating over. The id should look like 
//     this: id="${cartItem.id}". This id will be used in another task to match the id of the current iterated object to the id of the product in 
//     the cart array
//     C. Assign the input the type of 'number'
//     D. The value of the input will be assigned to the quantity of the current iterated object. For example: ${cartItem.quantity}. This way the 
//     quantity will always match the current quantity in the local storage and cart array
//     E. Set a minimum value of '1' (one). This will stop the user from adding a negative number of items to the cart
//     F. Set a maximum value of '5'. In our shopping cart, the users will not be able to order more than 5 units of the same product
// 2. We want the number input on the cart.html page to function the same way as it does on the shop.html page. The two <input> tags should be 
// identical. The <input> tag on the cart.html page is missing the class and id. The <input> tag can be found on the cart.js page inside the 
// displayCartProducts function. The tag is found within the div with the class of cartQuantity. Modify the <input> tag to include a class named 
// 'quantityNumberInput' and an id set to the value of the currently iterated item's id. For example: ${cartItem.id}

// Add some products to the cart by clicking the Add to Cart button. Each product on the shop.html page should now have a number input that 
// can be used to change the quantity of the product from 1 to 5. Depending on the version of your browser, you may or may not see the up and 
// down arrows until you hover over or click inside the number input.


// Task 2: Increase Quantity with Add to Cart Button:
// Currently, if you click the Add to Cart button multiple times on the same product on the shop.html page, it will add the product 
// multiple times to the cart. We don't want the product to be added multiple times. Instead, we want the quantity number input box to increase.
// This task will remedy the problem. We will add the code to the saveToLocalStorage function inside the shop.js file. This function currently adds a 
// click event to Add to Cart button that looks inside the products array for whichever item was clicked on by the user. It then pushes the item's 
// information to the cart and local storage. We will add the code here so that when the button is clicked, the quantity will be updated before pushing 
// the information to the cart and local storage.
// 1. Create a new variable named 'cartItemSearch' directly below the selectedProduct variable declaration inside the FOR loop of the saveToLocalStorage 
// function on the shop.js page
// 2. The purpose of this variable is to look to see if the item that was just clicked on by the user is currently inside the cart. We will do this by 
// using the find( ) method on the cart array, and by comparing the id of the cart item to the product that was selected. Set the value of the 
// cartItemSearch variable to the following: cart.find( (cartItem) => cartItem.id == selectedProduct.id);
// 3. If the item is currently in the cart, we want to update the quantity of the item in the cart array. We don't need to add the entire item to the 
// cart again. If the item is not in the cart, we want to push the entire item to the cart. This is a good time to use an IF/ELSE statement. Create an 
// IF statement directly below the cartItemSearch variable declaration
//     A. The IF statement condition simply needs to check if there is anything inside the cartItemSearch variable. Set the condition of the IF 
//     statement to 'cartItemSearch' like this: if (cartItemSearch) {
// 4. If the item exists in the cart, we want to increment the value of the quantity property of that item in the cart array. Inside the IF statement, 
// add new code that uses the increment operator (++) to increment the quantity property of the cartItemSearch variable
// 5. If the current item doesn't exist in the cart, we want to push the entire item to the cart. Add an ELSE statement to the IF statement. We already 
// have the code to push the entire item to the cart. Move the following code that pushes the item into the cart inside the ELSE statement: cart.push(selectedProduct);

// Each time you press the Add to Cart button on a product card that is already inside the cart, the quantity of that product should now increase. 
// If you click on a product that is not currently inside the cart, the entire product will be added to the cart with a quantity of 1.

