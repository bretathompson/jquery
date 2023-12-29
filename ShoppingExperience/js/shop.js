

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


            let selectedProduct = products.find( (product) => product.id == cartButton[i].id);

            cart.push(selectedProduct);

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
                <div class="tableCell borderBottom"></div> 
                <a href="#" class="tableCell borderBottom removeLink" id="${cartItem.id}">Remove</a>
            </div>`;
    });
    removeFromCart();

}
displayCart();
            


const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});




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



// Inside the saveToLocalStorage function in shop.js
function saveToLocalStorage() {
    let cartButton = document.getElementsByClassName("cartButton");

    for (let i = 0; i < cartButton.length; i++) {
        let addButton = cartButton[i];

        addButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Find the selected product in the products array
            let selectedProduct = products.find((product) => product.id == cartButton[i].id);

            // Find the selected product in the cart
            let cartItemSearch = cart.find((cartItem) => cartItem.id == selectedProduct.id);

            // Check if the item is already in the cart
            if (cartItemSearch) {
                // If the item is in the cart, increment the quantity
                cartItemSearch.quantity++;
            } else {
                // If the item is not in the cart, add it with quantity 1
                cart.push({ ...selectedProduct, quantity: 1 });
            }

            // Update the cart and localStorage
            displayCart();
            saveCartToLocalStorage();
        });
    }
}
saveToLocalStorage();