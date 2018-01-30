//sing jquery, so, add this to the top to contain rest of jquery content
$(document).ready(function () {

  $('.button').on('click', (function(e) {
    //prevent default submit until we enter in text
    e.preventDefault();
    // create new ul list
    var listItem = $('<li>');
    //changes list item to what we want
    listItem.html($('#submitText').val());

    //create delete button for each listItem
    var deleteButton = $('<button>');

    $("#toDoList").append(listItem);
    $(listItem).append(deleteButton);

    $('#submitText').val("");
    $('#submitText').focus();
}))
});

$(document).ready(function() {
	$('#submitButton').on('click', function(e) {
		e.preventDefault(); //prevent the default action of submit
		//add input to list
		var newItem = $('<li>');
		newItem.html($('#input').val());

		var btn = $('<button>'); //create delete button
		btn.attr("type", "button");
		btn.addClass('listButton').text('Delete');

		$('#listTable').append(newItem);
		$(newItem).append(btn);

		//remove input
		$('#input').val(""); //usual text -- html  but this this is form input, it needs to be value

		$('#input').focus();
	})


	// $("ul").on("click", "li", function() {
	// 	$(this).remove();
	// })

	$('ul').on('click', 'li', function(e) {
		$(this).remove();
	})

})
