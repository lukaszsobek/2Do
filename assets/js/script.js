"use strict"

let LocalKey = "lukaszsobek_2Do_application"
let toDoList = []


// save item to local storage
function saveItem(item) {

	// we do need to get items already stored though
	let itemList = localStorage.getItem(LocalKey)
	itemList = itemList ? JSON.parse(itemList) : []
	itemList.push(item)
	itemList = JSON.stringify(itemList)
	localStorage.setItem(LocalKey,itemList)
	console.log(localStorage.getItem(LocalKey))

}


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
$("input[type='search']").on("keypress", function(e) {
	if(e.which == 13 && $(this).val() != "") {
		let textValue = $(this).val()
		saveItem(textValue)
		$(this).val("")
		$("ul").append("<li>" + textValue + "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>")

	} 
})