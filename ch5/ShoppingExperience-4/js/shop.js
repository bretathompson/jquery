

const cardContainer = document.querySelector('#cardContainer');
function addProducts() {
    let cardInfo = '';
    

    products.forEach((individualCard) => {
    //   cardInfo += `
    //         <div class="card" id="cardNumber${individualCard.id}">
    //             <img src="${individualCard.image}" alt="${individualCard.description}">
    //             <div class="cardText">
    //                 <h4>${individualCard.name}</h4>
    //                 <p>${individualCard.description}</p>
    //                 <p>&dollar; ${individualCard.price}</p>
    //                 <button class="cartButton" id="${individualCard.id}" type="button">Add to Cart</button>
    //             </div>
    //         </div>`;
    });
    cardContainer.innerHTML = cardInfo;
}
// addProducts();

let productsPerPage = 6;
let currentPage = 1;
let pagedResults = [];
let totalProducts = products.length;

function paginate() {
    let end = currentPage * productsPerPage;
    let start = end - productsPerPage;

    pagedResults = products.slice(start, end);

    $('#cardContainer').empty();
    $.each(pagedResults, function (index, individualCard) {
        $('#cardContainer').append(`
            <div class="card" id="cardNumber${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}" type="button">Add to Cart</button>
                </div>
            </div>`
        );
    });
}

paginate();

function paginate() {
    let end = currentPage * productsPerPage;
    let start = end - productsPerPage;

    pagedResults = products.slice(start, end);

    $('#cardContainer').empty();
    $.each(pagedResults, function (index, individualCard) {
        $('#cardContainer').append(`
            <div class="card" id="cardNumber${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}" type="button">Add to Cart</button>
                </div>
            </div>`
        );
    });

    if (currentPage <= 1) {
        $('#prevButton').attr('disabled', true);
    } else {
        $('#prevButton').attr('disabled', false);
    }

    if ((currentPage * productsPerPage) >= totalProducts) {
        $('#nextButton').attr('disabled', true);
    } else {
        $('#nextButton').attr('disabled', true);
    }
}

paginate();
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







