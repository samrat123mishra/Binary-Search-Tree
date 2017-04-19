var textMarker = function () {
    this.draw = function (x, y, text) {
        var xInc = 12,
            yInc = 5;
        var markerXPosition = x-xInc;
        var markerYPosition = y+yInc;
        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', markerXPosition);
        textelement.setAttribute('dy', markerYPosition);
        txtnode = document.createTextNode(text);
        textelement.appendChild(txtnode);
        elem.svg.appendChild(textelement);
    }

}
var marker = new textMarker();