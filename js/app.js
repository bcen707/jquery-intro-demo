/* app.js
* main script file for our little application
* */

"use strict";

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

$(onReady);