class Draw {
    constructor(){
        
    }
    circleDraw(x, y, rx, color) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttributeNS(null, 'cx', x);
        circle.setAttributeNS(null, 'cy', y);
        circle.setAttributeNS(null, 'r', rx);
        circle.setAttributeNS(null, 'fill', color);
        circle.setAttributeNS(null, 'stroke', "black");
        elem.svg.appendChild(circle);

    }
    textMarker(x, y, text) {
        var xInc = 12,
            yInc = 5;
        var markerXPosition = x - xInc;
        var markerYPosition = y + yInc;
        var textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', markerXPosition);
        textelement.setAttribute('dy', markerYPosition);
        var txtnode = document.createTextNode(text);
        textelement.appendChild(txtnode);
        elem.svg.appendChild(textelement);
    }
    lineDraw(p1, p2, color) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1", p1[0]);
        line.setAttribute("y1", p1[1]);
        line.setAttribute("x2", p2[0]);
        line.setAttribute("y2", p2[1]);
        line.style.stroke = color;
        line.style.strokeWidth = "2px";
        elem.svg.append(line);
    }
}
var draw = new Draw();
