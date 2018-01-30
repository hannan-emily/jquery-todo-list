//sing jquery, so, add this to the top to contain rest of jquery content
$(document).ready(function () {

  $('.button').on('click', (function() {
    // create new ul list
    var listItem = $('<li>');
    //changes list item to what we want
    listItem.html($('#submitText').val());
    $("#toDoList").append(listItem);
    $('#submitText').val("");

}))
});


// var listItem = function() {
//   var newListItem = ($('#submitText').val);
//   $('list').append(newListItem);
//   $('#submitText').val('');
//   // $(#submitText).focus();
// }
//
// //when our submit button is clicked
// $('button').click(function() {
// //grab the text value from in the text section
//   var newItem = $('#submitText').value;
//   //grab our ul, class=demandsList, append the text as a new li
//   $('.demandsList').append('<li>' + newItem + '</li>');
// })


// $('button').click(function() {
//   console.log('you clicked the button yo');
// });
//
// var newItem = $('submitText').value;
// console.log('newItem');
//
// $('button').click(function () {
//   $('.demandsList').append("<li>" + newItem + "</li>");
// })
