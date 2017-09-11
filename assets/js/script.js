// mark as done with css class
$("ul").on("click", "li", function() {
	$(this).toggleClass("markedDone")
})



// remove item on click
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	})
	e.stopPropagation()

})



// add new item to the ul list 
$("input[type='text']").on("keypress", function(e) {
	if(e.which == 13) {
		let textValue = $(this).val()
		$(this).val("")
		$("ul").append("<li>" + textValue + "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>")

	}
})


