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


$( document ).ready(function() {
  $(document).foundation();
	paper.install(window);
	paper.setup('myCanvas')

	var hitOptions = {
		// segments: true,
		// stroke: true,
		fill: true,
		tolerance: 5
	};

	function makeTriangle(){
		var triangle = new Path;
		triangle.fillColor = "red";
		triangle.add(new Point(100, 100));
		triangle.add(new Point(200, 100));
		triangle.add(new Point(200, 200));
		triangle.closed = true;

		var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
		var hue = Math.random() * 360;
		triangle.fillColor = { hue: hue, saturation: 1, lightness: lightness };
		triangle.strokeColor = 'black';
	}

	function makeSquare(){
		var square = new Path;
		square.fillColor = "blue";
		square.add(new Point(100, 100));
		square.add(new Point(200, 100));
		square.add(new Point(200, 200));
		square.add(new Point(100, 200));
		square.closed = true;
	}

	function makeRectangle(){
		var rectangle = new Path;
		rectangle.fillColor = "green";
		rectangle.add(new Point(100, 100));
		rectangle.add(new Point(300, 100));
		rectangle.add(new Point(300, 200));
		rectangle.add(new Point(100, 200));
		rectangle.closed = true;
	}

	$('#triangle').click(function(){
		makeTriangle();
	});

	$('#square').click(function(){
		makeSquare();
	});

	$('#rectangle').click(function(){
		makeRectangle();
	});

	$('#clear_canvas').click(function(){
		$('#myCanvas').empty();
	});



	var segment, path;
	var movePath = false;

	function onMouseDown(event) {
		segment = path = null;
		var hitResult = project.hitTest(event.point, hitOptions);
		if (!hitResult){
			return;
		}

		if (event.modifiers.shift) {
			if (hitResult.type == 'segment') {
				hitResult.segment.remove();
			};
			return;
		}

		if (hitResult) {
			path = hitResult.item;
			if (hitResult.type == 'segment') {
				segment = hitResult.segment;
			} else if (hitResult.type == 'stroke') {
				var location = hitResult.location;
				segment = path.insert(location.index + 1, event.point);
				path.smooth();
			}
		}

		movePath = hitResult.type == 'fill';
		if (movePath){
			debugger;
			project.activeLayer.addChild(hitResult.item);
		}
	}

	function onMouseMove(event) {
		project.activeLayer.selected = false;
		if (event.item)
			event.item.selected = true;
	}

	function onMouseDrag(event) {
		if (segment) {
			segment.point += event.delta;
			path.smooth();
		} else if (path) {
			path.position += event.delta;
		}
	}

	$('#myCanvas').mousedown(function(event){
		onMouseDown(event);
	})
});
