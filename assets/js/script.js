// mark as done with css class
$("li").on("click", function() {
	$(this).toggleClass("markedDone")
})

// remove item on click
$("span").on("click", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	})
	event.stopPropagation()

})


