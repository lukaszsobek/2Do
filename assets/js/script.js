// mark as done with css class
$("li").on("click", function() {
	$(this).toggleClass("markedDone")
})



// remove item on click
$("span").on("click", function(e) {
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
		$("ul").append("<li>" + textValue + "<span>x</span></li>")

	}
})


