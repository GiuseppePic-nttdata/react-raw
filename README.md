## Description of the architecture

### App

In this component, it's been used the "useSearchParams" hooks that allows to get or set a parameters of the route. Every time the user clicks the go back button, in the route will be displayed the previous parameter inserted into it. Hence the "searchQuery" variable will change value, it'll trigger the useEffect hook and it'll get the data from the get request, based on the parameter of the route.
The "onSubmit" function works as callback for the List component, once the user enter a not empty value, the function will call the "setSearchParams" setter state, making automaticaly change the value of the "searchQuery" variable and triggering the useEffect hook to get the new data

### SearchBox component

This component allows the user to enter and execute the axios get request. When the user clicks on the button "Execute query" or it presses Enter, the component will call the "onSubmit" callback. This one is provided by the "App" component and it sets the "searchParams" to the value entered in the text input field. Consequently the "useEffect" in the "App" component will be called and it'll execute the axios get request, since the "searchQuery" will change value and this variable is a dependency of the "useEffect" hook.

### List component

This component displays the data got from the axios get request and it manages the pagination.
The "ELEMENTS_TO_SHOW" variable indicates the number of elements to show in one page.
The "MAX_NUMBER_OF_PAGE" variable computes the maximum number of pages that can be displayed.
The "showPreviousButton" and "showNextButton" functions check if the corrisponding buttons should be shown or not, depending on the variable "currentPage".
The function "getRows" allows to render 10 items per page, it does it by calculating the start and the end of the items to display and slicing the array of the items with these two values, then the component "ResultItem" will handle the render of the specific item.
In the case the list of items is empty, it'll only be displayed a message that says no result is found.

## Instructions to run the app

First of all you need to execute:

### npm install

and then you can run it with

### npm start
