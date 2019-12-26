/** Structuring code with modules
 *  1. Keeps code neat
 *  2. Important aspect for any robust application architecture
 *  3. Keeps data secure
 * 
 *  4. Set up event listeners for keypress events
 *  5. Using event objects
 * 
*/

//Budget Controller
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();

//UI Controller
var UIController = (function() {

    //Some Code

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
        
        // 1. Get the field input data
        // 2. Add the item to the budget controller
        // 3. Add a new item to the user interface
        // 4. Calculate the budget
        // 5. Display the budget on the UI

    });

    document.addEventListener('keypress', function(event){
        console.log(event);
    });

})(budgetController, UIController);