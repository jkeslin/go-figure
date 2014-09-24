// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .


$(function(){

  $(document).foundation();
  	window.onload = function() {
			paper.setup('myCanvas');
			with (paper) {
				var path = new Path();
				path.strokeColor = 'black';
				var start = new Point(100, 100);
				path.moveTo(start);
				path.lineTo(start.add([ 200, -50 ]));
				view.size();
				view.draw();
		}
}

 //  	window.onload = function() {
	// 		// Get a reference to the canvas object
	// 		var canvas = document.getElementById('myCanvas');
	// 		// Create an empty project and a view for the canvas:
	// 		paper.setup(canvas);
	// 		// Create a Paper.js Path to draw a line into it:
	// 		var path = new paper.Path();
	// 		// Give the stroke a color
	// 		path.strokeColor = 'black';
	// 		var start = new paper.Point(100, 100);
	// 		// Move to start and draw a line from there
	// 		path.moveTo(start);
	// 		// Note that the plus operator on Point objects does not work
	// 		// in JavaScript. Instead, we need to call the add() function:
	// 		path.lineTo(start.add([ 200, -50 ]));
	// 		// Draw the view now:
	// 		paper.view.draw();
	// }
});
