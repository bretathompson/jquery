

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



