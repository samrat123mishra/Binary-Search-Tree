var createLine = function () {
    this.draw = function (p1, p2) {
  var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute("x1", p1[0]);
    line.setAttribute("y1", p1[1]);
    line.setAttribute("x2", p2[0]);
    line.setAttribute("y2", p2[1]);
    line.style.stroke = "red";
    line.style.strokeWidth = "2px";
    svg.append(line);
}
}
var line = new createLine();