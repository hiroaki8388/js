lEt tool = new Tool();
tool.onMouseDown = function(event) {
let c = Shape.Circle(event.point.x, event.point.y, 20); c.fillColor = 'green';
};
