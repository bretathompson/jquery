this is the navigation_fade.js page
$(document).ready(function(){

});




// Task 1: Create the mouseover/mouseout Effect: Our goal is to add a jQuery effect that will quickly fade out and then back in when a user hovers over a button or 
// navigation link. The fade will happen quite quickly so it will look more like the button is pulsing or flashing. Just enough to indicate the user has put the 
// mouse over the link.

// 1. We will create this effect in a new JavaScript page that we can link to each of the HTML pages. Create a new JavaScript page named 'navigation_fade.js' 
//     inside the js folder
//     1a. Connect this new file to the following HTML pages: index.html, shop.html, and cart.html. Create the <script> tag directly below the <script> tag 
//     that connects the main jQuery file
// 2. We want our code to run immediately when the page is loaded. Add the document ready method (document ready function) inside the navigation_fade.js page
// 3. Inside the document ready method, add a jQuery selector that selects the following 3 selectors:
//     3a. Any anchor tag inside the <nav>
//     3b. Any anchor tag inside the <footer>
//     3c. Any <button> tag
// 4. Add a jQuery mouseover event to the selectors and run a function inside
// 5. Use the jQuery $(this) selector and the fadeTo method to fade the buttons to '0.3' opacity (30%) in '150' milliseconds
// 6. Use the same process to select the same selectors, but this time add a mouseout event. Fade the buttons to an opacity of '1' (100%) in '150' milliseconds
// Reload the site. The buttons should now fade out and immediate back in when you hover the mouse over them. This event should occur on the links in the navigation 
//     bar, the Add to Cart buttons, the Clear Cart button, the Checkout button, and the navigation links in the footer.


// Task 2: Fix the Next and Previous Button Stuck in Fade: The buttons fade out and in but we have a problem: If you click the Next and Previous buttons, the buttons 
//     are still faded when you go to the next page. The reason why is because the mouseover event was fired when we put the mouse over the button, but the mouseout 
//     event isn't fired because we never moused out and instead clicked the button, firing the link

// 1. We can fix this easily by adding a click event to the buttons which will set the buttons back to 100% opacity. Directly below the mouseover and mouseout events, 
//     create a jQuery click event on the same selectors as task 1 and again use the jQuery fadeTo method with the $(this) keyword to set the opacity to 
//     '1' (100%) in 0 (zero) milliseconds


// Task 3: Fix the Next and Previous Buttons to Work with Pagination: We have another small problem. Whenever we navigate to the next or previous page in the 
//     shop.html page, the Next and Previous buttons no longer fade out and in.

// 1. To remedy the problem, surround all code in the navigation_fade.js page with a JavaScript function named 'fadeButtons'. Call the function directly below the 
//     function declaration. Now we can call the fade out / fade in function whenever we need it
// 2. A good place to call it would be in the click events for the Next and Previous buttons in the shop.js page. Add function calls to the fadeButtons function 
//     directly below the saveToLocalStorage function call inside both the click event for the Next buttons and the click event for the Previous buttons inside 
//     the shop.js page



$(document).ready(function(){
    // Task 1: Create the mouseover/mouseout Effect
    $('nav a, footer a, button').on({
        mouseover: function() {
            $(this).fadeTo(150, 0.3);
        },
        mouseout: function() {
            $(this).fadeTo(150, 1);
        },
        click: function() {
            // Task 2: Fix the Next and Previous Button Stuck in Fade
            $(this).fadeTo(0, 1);
        }
    });

    // Task 3: Fix the Next and Previous Buttons to Work with Pagination
    function fadeButtons() {
        $('nav a, footer a, button').fadeTo(0, 1);
    }

    fadeButtons(); // Call the function on page load
});


$(document).ready(function(){
    // Task 1: Create the mouseover/mouseout Effect
    // 3. Inside the document ready method, add a jQuery selector that selects the following 3 selectors:
    //     3a. Any anchor tag inside the <nav>
    //     3b. Any anchor tag inside the <footer>
    //     3c. Any <button> tag
    $('nav a, footer a, button').mouseover(function() {
      // 5. Use the jQuery $(this) selector and the fadeTo method to fade the buttons to '0.3' opacity (30%) in '150' milliseconds
      $(this).fadeTo(150, 0.3);
    }).mouseout(function() {
      // 6. Use the same process to select the same selectors, but this time add a mouseout event. Fade the buttons to an opacity of '1' (100%) in '150' milliseconds
      $(this).fadeTo(150, 1);
    });
  
    // Task 2: Fix the Next and Previous Button Stuck in Fade
    // 1. Directly below the mouseover and mouseout events, create a jQuery click event on the same selectors as task 1
    $('nav a, footer a, button').click(function() {
      // 1. again use the jQuery fadeTo method with the $(this) keyword to set the opacity to '1' (100%) in 0 (zero) milliseconds
      $(this).fadeTo(0, 1);
    });
  
    // Task 3: Fix the Next and Previous Buttons to Work with Pagination
    // 1. Surround all code in the navigation_fade.js page with a JavaScript function named 'fadeButtons'
    function fadeButtons() {
      // Code from Task 1 and Task 2
      $('nav a, footer a, button').mouseover(function() {
        $(this).fadeTo(150, 0.3);
      }).mouseout(function() {
        $(this).fadeTo(150, 1);
      });
  
      $('nav a, footer a, button').click(function() {
        $(this).fadeTo(0, 1);
      });
    }
  
    // Call the function directly below the function declaration
    fadeButtons();
  });
  
