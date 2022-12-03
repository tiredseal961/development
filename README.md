# Development

### Link to Deployed Website
https://tiredseal961.github.io/development/

### Goal and Value of the Application
The application goal is to make an interface for a baklava store that allows users to easily filter and sort the baklava products, and add/remove them from their cart. I took inspiration from the baklava at Allepo Sweets and referred to their products. The value of the app lies in how easy it makes the process of shopping for baklava. The user can find the exact baklava product they crave without having to endlessly scroll.

### Usability Principles Considered
To make it easier for users to scroll through the list and update their cart at the same time, I made both the list of items and cart on the same page. I made sure that there was enough space for the image and description of the products so that the users can have a good look at them. I chose sorting by main ingredient type as a lot of people prefer walnuts over pistachios or vice versa. It is a big deciding factor. I also chose sorting by vegan/vegatarian as it is common for baklava stores to cater to people with different dietary resrictions. The filtering and sorting dropdown menus are all in one place to make the interface more useable and to make it easier for the user. 

### Organization of Components
ShopItem.js represents each individual baklava box item and has all the neccessary feilds. 
App.js has the rest of the app, including the shopping cart.

### How Data is Passed Down Through Components
Props are used to pass data from App.js to each individual ShopItem.js component. This data includes
the item fields and also the add to and remove from cart functions. The props are passed in from App.js
and accessed in ShopItem.js.

### How the User Triggers State Changes
When the user chooses a filtering option from the dropDown menu, the filter type (for filter 1 or 2) state changes. When the user chooses a sorting option
from the sorting dropdown menu, the sorting type changes. The list of items that is displayed first gets filtered by functions matchesFilter1Type and matchesFilter2Type. If the user didn't choose any filtering in the dropdown menus, then the list will not be filtered. The cartList state changes when the user presses Add to Cart or Remove from Cart, for which their functions (contained within App.js) get called from ShopItem.js. Presing Clear Cart also triggers a change to this state (it makes the cartList empty).
