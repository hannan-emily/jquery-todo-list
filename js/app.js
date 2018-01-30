//sing jquery, so, add this to the top to contain rest of jquery content
$(document).ready(function () {

  $('.button').on('click', function(e) {
    //prevent default submit until we enter in text
    e.preventDefault();
    // create new ul list
    var listItem = $('<li>');
    //changes list item to what we want
    listItem.html($('#submitText').val());

    //create delete button for each listItem
    var deleteButton = $('<button>');

    //work on this
    deleteButton.attr("type", "button");
		deleteButton.addClass('listButton').text('Delete');

    $("#toDoList").append(listItem);
    $(listItem).append(deleteButton);

    $('#submitText').val("");
    $('#submitText').focus();
})

//now that we've added a new list item to the ul
//we need to be able to remove each individual li with it's paired button
    $('ul').on('click', 'li', function(e) {
      $(this).remove();
    })

});
