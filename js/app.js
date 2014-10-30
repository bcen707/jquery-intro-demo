/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

newTile.data('assocTile', tile);
newTile.data('tileInfo', info);

gameBoard.append(newTile);

$('#game-board img').click(function() {
	// 'this' refers to DOM element that raised the event
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);

});

//iterate over array, calling passed function for each element
//also works with objects

var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {

 console.log(element);
 console.log(index);

});

_.difference(array, ['c', 'd']);

var unionArray = _.union(array, ['e','f']);

_.intersection(array, ['b', 'c']);

var numArray = [1,2,3,4,5,6,7,8,9,10];

var evens = _.filter(numArray, function(num) {return 0 == num % 2});
console.log(evens);

var shuffledArray = _.shuffle(numArray);

console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

/*




*/

var startTime = _.now();
console.log(startTime);

var timer;

timer = window.setInterval(onTimer, 1000);

function onTimer() {
	// compare _.now() to start time to get elapsed time
	//Math.floor() rounds down to the nearest integer
	var elapsedSeconds = Math.floor((_.now() - startTime) / 10);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('game-board').empty();
}

$('.jumbotron').click(stopTimer);








/*
//select all navigation links
var allNavlinks = $('nav a');

var allImgs = $('img');

var allSections = $('section');

function onReady() {
	$('nav').slideUp();
	$('nav').slideDown();
	allSections.hide();
//	allNavlinks.attr('target', '_blank');
//	allNavlinks.addClass('awesomesauce');

}

allImgs.hover(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavlinks.click(function() {
	//the cooler jQuery this
	console.log();
	
	console.log(this);

	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000);
});

$(onReady); */