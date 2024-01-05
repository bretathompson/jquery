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


$('#nextButton').click(function() {
    if ((currentPage * productsPerPage) <= totalProducts) {
        currentPage++;
    }
    paginate();
    saveToLocalStorage();
});

$('#prevButton').click(function() {
    if (currentPage > 1) {
        currentPage--;
    }
    paginate();
    saveToLocalStorage();
});

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



// Task 3: Fix the Next and Previous Buttons to Work with Pagination: We have another small problem. Whenever we navigate to the next or previous page in the 
//     shop.html page, the Next and Previous buttons no longer fade out and in.

// 1. To remedy the problem, surround all code in the navigation_fade.js page with a JavaScript function named 'fadeButtons'. Call the function directly below the 
//     function declaration. Now we can call the fade out / fade in function whenever we need it
// 2. A good place to call it would be in the click events for the Next and Previous buttons in the shop.js page. Add function calls to the fadeButtons function 
//     directly below the saveToLocalStorage function call inside both the click event for the Next buttons and the click event for the Previous buttons inside 
//     the shop.js page


const cardContainer = document.querySelector('#cardContainer');

function addProducts() {
    // Your code for adding products to the cardInfo variable
}

let productsPerPage = 6;
let currentPage = 1;
let pagedResults = [];
let totalProducts = products.length;

function paginate() {
    // Your code for pagination
}

paginate();
saveToLocalStorage();

// Task 3: Fix the Next and Previous Buttons to Work with Pagination
// 2. A good place to call it would be in the click events for the Next and Previous buttons in the shop.js page.
$('#nextButton').click(function() {
    if ((currentPage * productsPerPage) <= totalProducts) {
        currentPage++;
    }
    paginate();
    saveToLocalStorage();
    fadeButtons(); // Call the fadeButtons function after pagination
});

$('#prevButton').click(function() {
    if (currentPage > 1) {
        currentPage--;
    }
    paginate();
    saveToLocalStorage();
    fadeButtons(); // Call the fadeButtons function after pagination
});

function saveToLocalStorage() {
    // Your code for saving to local storage
}

function displayCart() {
    // Your code for displaying the cart
}

const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});

// Task 1: Create the mouseover/mouseout Effect
// 1. To remedy the problem, surround all code in the navigation_fade.js page with a JavaScript function named 'fadeButtons'.
// Call the function directly below the function declaration. Now we can call the fade out / fade in function whenever we need it
function fadeButtons() {
    // Your code from navigation_fade.js for fading buttons
}

// Call the fadeButtons function initially
fadeButtons();

