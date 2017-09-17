"use strict"

let LocalKey = "lukaszsobek_2Do_application"


function loadLocalStore() {
// populate list with items from local storage

	// get
	let itemList = localStorage.getItem(LocalKey)
	itemList = itemList ? JSON.parse(itemList) : []

	// append list
	itemList.map(function(x) {
		$("ul").append("<li>" + x + "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>")
	})

}


function saveItem(item) {
// save item to local storage

	// get 
	let itemList = localStorage.getItem(LocalKey)
	itemList = itemList ? JSON.parse(itemList) : []

	// add
	itemList.push(item)

	// save
	itemList = JSON.stringify(itemList)
	localStorage.setItem(LocalKey,itemList)
	
}


function deleteItem(searchText) {
// delete an item

	// get
	let itemList = localStorage.getItem(LocalKey)
	itemList = itemList ? JSON.parse(itemList) : []

	// delete
	let theKey = itemList.indexOf(searchText)
	itemList.splice(theKey,1)

	// save
	itemList = JSON.stringify(itemList)
	localStorage.setItem(LocalKey,itemList)

	//console.log(localStorage.getItem(LocalKey))
}


// mark as done with css class
$("ul").on("click", "li", function() {
	$(this).toggleClass("markedDone")
})


// remove item on click
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		deleteItem($(this).text())
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


$(document).ready(loadLocalStore)