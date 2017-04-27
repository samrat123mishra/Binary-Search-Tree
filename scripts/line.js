function lineDraw(p1, p2, color) {
  var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  line.setAttribute("x1", p1[0]);
  line.setAttribute("y1", p1[1]);
  line.setAttribute("x2", p2[0]);
  line.setAttribute("y2", p2[1]);
  line.style.stroke = color;
  line.style.strokeWidth = "2px";
  elem.svg.append(line);
}
