
// Dragula can't be loaded until the document.body is. So we have to do some
// semi weird stuff here. 
// 
// Browserify will atuomatically inject the module in a browserified way and
// wrap the contents of this file in a function that gets passed the module.
// We delay execution of this module until window.onload is called. Where we
// finally re-expose window.dragula as the actual dragula function with a valid
// document body. 
function fixDragulaBody() {
	window.dragula = require('dragula');
}

// window.onload can usually only store one function. There's a number of ways 
// of dealing with this but this immplementation looked to be the best.
//
// It preserves the previous value of window.onload and calls it when the time 
// comes, if it is still defined.
//
// Source: http://blog.roberthahn.ca/articles/2007/02/02/how-to-use-window-onload-the-right-way/
function makeDoubleDelegate(function1, function2) {
	return function() {
	if (function1)
		function1();
	if (function2)
		function2();
	}
}

window.onload = makeDoubleDelegate(window.onload, fixDragulaBody );
