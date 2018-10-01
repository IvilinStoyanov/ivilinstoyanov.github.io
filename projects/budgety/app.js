// BUDGET CONTROLLER
var budgetController = (function() {

})();


// UI CONTROLLER
var UIController = (function(){

})();


// MAIN CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        console.log('fine');
        // 1. Get the field input data

        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
       
        // using event.which for old browsers
        if(event.keyCode === 13 || event.which === 13) {
           ctrlAddItem();
        }
    })


})(budgetController, UIController);