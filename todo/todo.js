// This code runs when the page loads
$(function() {

  $(".btn").on("click", function(event) {
    // Do something
    event.preventDefault()
var elementThatWasClicked = $(this)
console.log(elementThatWasClicked)
elementThatWasClicked.remove()  });

})
