//sing jquery, so, add this to the top to contain rest of jquery content
$(document).ready(function () {

//add in text content from input form as a new li, into parent ul list
$('.button').click(function() {
  $('ul').append('<li>($('input.newDemand'))</li>');
});

// $("ul").on('click', 'li', function(event) {
//     console.log(event.target, "event delegation");
//     //this is a child function tht works on all parent items. this changes clicked items to red
//     $(event.target).css("color", "red");
//   })
// });
//second, be able to remove li items from the ul

});
