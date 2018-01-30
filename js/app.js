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

    //turned the variable deleteButton into an actual button
    deleteButton.attr("type", "button");
    //added text on the button, and also added a class (for styling)
		deleteButton.addClass('listButton').text('Delete');

    //add list item to the main ul
    $("#toDoList").append(listItem);
    //add delete button to that li
    $(listItem).append(deleteButton);

    //once we click that form submit button, now, clear the value of the text input in that form
    $('#submitText').val("");
    //reset focus on text input once we click the form submit button
    $('#submitText').focus();
})

//now that we've added a new list item to the ul
//we need to be able to remove each individual li with it's paired button
// "parent' list (we click an item, on the li item, reference this button & then delete it)
// but where have i specifically called the deleteButton - does it just know to click the one button?
    $('ul').on('click', 'li', function(e) {
      $(this).remove();
    })

});
