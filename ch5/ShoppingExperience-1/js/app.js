

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
                displayOrderSummary();
            }

            if (cart.length == 0) {
                localStorage.clear();
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
            displayOrderSummary();
        }

    });
}
clearCart();

function updateQuantity() {
    let quantityNumberInput = document.getElementsByClassName ('quantityNumberInput');
    
    for(let i = 0; i < quantityNumberInput.length; i++){
        quantityNumberInput[i].addEventListener('change', (event) => {
            let quantityChanged = quantityNumberInput[i].value;
            if(quantityChanged > 5) {quantityChanged = 5;}
         
        let itemToChange = cart.find((item) => item.id == event.target.id);
        itemToChange.quantity = +quantityChanged;

        localStorage.setItem('CART', JSON.stringify(cart));

        if (typeof displayOrderSummary == 'function') {
            displayOrderSummary();
        }
      });
    }
}


$(document).ready(function(){
    let sidebarOrigin = ('aside').offset();

    $(window).scroll(function(){
       let scrollPosition = $("html").scrollTop();

       if (sidebarOrigin.top < scrollPosition) {
        $('aside').addClass('sticky');
        $('aside').width('17.9%');
       } else {
        $('aside').remove('sticky');
        $('aside').width('20%');
       }
      });
});

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




// --------------------------------------------------------------------




// Task 1: Create the Sticky jQuery: Our goal is to make the sidebar sticky. We will do this by determining the location of the sidebar on the 
// page and comparing it with the location of the top of the page. We will use jQuery to put the sidebar in a fixed position when the top of the 
// sidebar leaves the top of the page. We want the sidebar to be sticky on both the shop.html and cart.html pages so the sticky code will be placed 
// inside the app.js page.

// 1. Add a jQuery document ready function at the bottom of the app.js page. Place the rest of the code of this task inside the ready function
// 2. The first thing we need to know is the location of the sidebar in relation to the document. The sidebar is located inside the <aside> tags. 
//     A good choice to use to get the location is the jQuery offset( ) method. Create a new variable named 'sidebarOrigin'. Use the jQuery offset 
//     method with the jQuery selector that selects the <aside>. Assign this offset value to the sidebarOrigin variable
// 3. Next, we will add a scroll event. We will assign the scroll event to the entire window so it will fire the scroll event no matter where you 
//     are on the page. Combine the scroll event method with the $(window) selector and assign it to a function without parameters. Place the rest 
//     of the code for this task inside the function
// 4. We need to know where the top of the page is. This way, we can compare the top of the sidebar and the top of the page itself. This will tell us 
//     when the sidebar is about to leave the page. Create a new variable named 'scrollPosition'. Use the scrollTop( ) method with the <html> tag's 
//         jQuery selector to get the value of the top of the page. Assign it to the scrollPosition variable. Your code should look like this:
//         let scrollPosition = $('html').scrollTop();
// 5. If the location of the top of the sidebar is less than the top of the page, then the sidebar is at the top of the page and starting to leave 
//     the page. Create an IF statement with a conditional that checks if the top of the sidebarOrigin variable is less than the scrollPosition of 
//     the entire page. The conditional should look like this: sidebarOrigin.top < scrollPosition
// 6. When the top of the sidebar leaves the top of the page, we want to change the sidebar to a fixed position so it will stay on the page. Inside 
//     the IF statement use a jQuery selector to select the <aside> tag and a jQuery method to add a class named 'sticky' to it. The sticky class will 
//     be created in the next task
// 7. When the top of the sidebar reenters the page, we want the sidebar to return to normal. Create an ELSE statement. Inside the ELSE, use a jQuery 
//     selector to select the <aside> and a jQuery method to remove the sticky class


// Task 2: Add the Sticky CSS: We will use the position property to set the sidebar to a fixed position. In this task we will create the sticky class and update the width of the sidebar so it matches the current width

// 1. At the bottom of the style.css page, create a new CSS style rule for the class of 'sticky'
// 2. Assign the sticky class to a 'fixed' position that is '8px' from the top of the page and '5.35%' from the right of the page. These value will move 
//     the sidebar to the same location that it was before the fixed positioning was applied
// 3. The sidebar should be sticky, but we still have one problem: the width of the sidebar is incorrect. The sticky class sets the position to fixed. 
//     This takes the sidebar out of the normal flow. Before the fixed positioning is applied, the width of the sidebar is created with a percentage (20%). 
//     When it is removed from the flow, it loses the constraints of its parent (<main>). The <main> has a width of 90%. So before the fixed positioning, 
//     the width of the sidebar is 20% of the 90%. After the fixed positioning is applied, the width is now 20% of the 100% width of the window. This 
//     makes the width of the sidebar wider. We need to change the width of the sidebar to a smaller percentage so it lines up
//     A. On the app.js page inside the IF statement, directly below the code that adds the sticky class, use a jQuery selector to select the <aside> tag and a jQuery method to change it's width to '17.9%'. This should stop the sidebar from jumping when it becomes sticky
// 4. When the sticky class is removed because the sidebar has reentered the page, we need to return the width to the original '20%'. In the ELSE 
//     statement directly below the code that removes the sticky class, add code that uses jQuery to select the <aside> tag and uses a jQuery method 
//     to change the width of the sidebar to '20%'

