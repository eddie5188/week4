// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. CHEESEBURGERS!!!!!)
  var yell = function(food) {
    // change this so it works
    // .toUpperCase() is a built-in function
    return food.toUpperCase()+"!!!!!"
  }

  var theMostAwesomeFood = "cheeseburgers"
  var theWorstFood = "tomatoes"

  window.alert(yell(theWorstFood))
})
