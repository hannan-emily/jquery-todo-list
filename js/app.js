//sing jquery, so, add this to the top to contain rest of jquery content
$(document).ready(function () {

  $('.button').on('click', (function() {
    // create new ul list
    var listItem = $('<li>');
    //changes list item to what we want
    listItem.html($('#submitText').val());
    $("#toDoList").append(listItem);
    $('#submitText').val("");
    $('#submitText').focus;
}))
});
