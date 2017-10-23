$(function(){
 $("form#grocery-list").submit(function(event){
  event.preventDefault();
  var groceryList = ["input#item-one", "input#item-two", "input#item-three", "input#item-four", "input#item-five", "input#item-six", "input#item-seven"]
  var alpha = groceryList.map(function(grocery){
    return $(grocery).val();
  });
  var caps = alpha.map(function(cap){
    return cap.toUpperCase();
  });
  var sorted = caps.sort();

  sorted.forEach(function(item){
    $("#list-result").append("<li>" + item + "</li>");
  });
 });
});






// });
// var alpha = alpha.sort();
//
// alpha.forEach(function(item){
//   $("#list-result").append("<li>" + item + "</li>");
// });
// });
// });
