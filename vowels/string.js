"use strict";


function letterSearch() {
	let text = prompt("Введите текст");
	let letter = text.match(/[аеёиоуыэюя]/gi);
	if (letter === null) {
		console.log("Гласных букв нет")
	}
	else {
		return letter.length;
	}
}

console.log(letterSearch());