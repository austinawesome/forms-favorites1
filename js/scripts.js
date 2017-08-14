$(document).ready(function() {
  $("form#favorites").submit(function(event) {
event.preventDefault();
  var food = $("#food").val();
  var drink = $("#drink").val();
  var color = $("#color").val();
  var game = $("#game").val();
  favorites = [];
  favorites.push(food, drink, color, game);
  var favoritestuff = favorites.toString();
  alert(favoritestuff);
var newArray=[];
newArray.push(favorites[1], favorites[0], favorites[2]);

$("#thing1").text(newArray[0]);
$("#thing2").text(newArray[1]);
$("#thing3").text(newArray[2]);

});
});
